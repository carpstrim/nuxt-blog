module.exports = function apiModule(moduleOptions) {
    this.nuxt.hook('build:before', async ({ app }) => {
        // contentful 初期化
        const contentful = require('contentful')

        const client = contentful.createClient({
            space: process.env.CTF_SPACE_ID,
            accessToken: process.env.CTF_ACCESS_TOKEN
        })

        // contentfulからデータ取得
        let datas = await client.getEntries({
            content_type: 'post',
            order: '-fields.createdAt'
        })

        // JSON生成
        this.options.build.plugins.push({
            apply(compiler) {
                compiler.plugin('emit', (compilation, cb) => {
                    compilation.assets[`api/datas.json`] = {
                        source: () =>
                            JSON.stringify({ apiDatas: datas.items.map((item) => item.fields) }),
                        size: () => { }
                    }
                    cb()
                })
            }
        })


        // link rel="prefetch"にJSONを追加

        this.options.head.link = [
            ...this.options.head.link,
            {
                rel: 'prefetch',
                href: `${this.options.build.publicPath}api/datas.json`,
                as: 'fetch'
            }
        ]

        ///////////
        //追記
        ///////////

        // dev時はここで終了
        if (this.options.dev) return

        // generate時にexpress立てて、json取得できるようにする
        this.nuxt.hook('build:done', (generator) => {
            console.log('**[generate]** opening server connection')
            const express = require('express')
            const app = express()

            //dist内でサーバーたてる感じ
            app.use(express.static(this.options.generate.dir))

            const server = app.listen(process.env.PORT || 3000)

            this.nuxt.hook('generate:done', () => {
                console.log('**[generate]** closing server connection')
                server.close()
            })
        })
    })
}