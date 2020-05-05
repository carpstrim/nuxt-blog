import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
    apiKey: "AIzaSyAfMWrhNCWfk3Zv6qL7CEVNlhiufaulyaM",
    authDomain: "contentful-blog.firebaseapp.com",
    databaseURL: "https://contentful-blog.firebaseio.com",
    projectId: "contentful-blog",
    storageBucket: "contentful-blog.appspot.com",
    messagingSenderId: "1075331697298",
    appId: "1:1075331697298:web:2b24208f715ff433a0344b",
    measurementId: "G-VBPLQ4SV20"
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const auth = firebase.auth()
const functions = firebase.functions()

export default function (app, inject) {
    inject('firestore', firestore) // this.$firestore
    inject('auth', auth) // this.$auth
    inject('functions', functions)
}
