const functions = require('firebase-functions')
const admin = require('firebase-admin')
// const axios = require('axios')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp()

exports.form = functions.https.onCall(async (data, context) => {
    console.log('form sended')
    console.log({ data })
    return { text: "done" }
})