const express = require("express")
const functions = require("firebase-functions")
const bodyParser = require('body-parser')
const { router } = require('./controller/index')

const app = express();

app.use("/slack", router)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

exports.slack_service = functions.https.onRequest(app)