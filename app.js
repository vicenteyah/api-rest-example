'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productRoutes = require('./routes/product.route')
const morgan = require('mongoose-morgan')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan({
    connectionString: 'mongodb://localhost:27017/store'
}));


app.use('/public', express.static(`${__dirname}/storage/imgs`))
app.use('/v1', productRoutes)

module.exports = app