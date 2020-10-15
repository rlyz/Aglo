const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apiSchema = new Schema({
    username: { type: String, required: true },
    youtube: { type: String },
    twitter: { type: String },
}, {
    timestamps: true,
})

const Api = mongoose.model('Api', apiSchema)

module.exports = Api