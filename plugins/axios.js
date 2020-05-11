export default function ({ $axios }) {
    $axios.setBaseURL(
        (process.static && process.server) || process.env.NODE_ENV !== 'production'
            ? 'http://localhost:3000'
            : `https://node-color-ink.studio`
    )
}