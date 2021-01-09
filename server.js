'use strict'
require('dotenv').config()
const connectDb = require('./mongodb')
const { appConfig, dbConfig }= require('./config')// usar destructuring
const app = require('./app')

//connectDb(db)

//app.listen(appConfig.port,() => console.log(`server running on http://localhost:${appConfig.port}`))

async function init (appConfig, dbConfig){
    try {
        await connectDb(dbConfig)
        app.listen(appConfig.port,() => console.log(`server running on http://localhost:${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

init(appConfig,dbConfig)