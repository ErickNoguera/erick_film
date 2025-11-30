const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required : [true, "titulo es requerido"],
    },
    year: {
        type: Number,
        required : [true, "año es requerido"],
    },
    director: {
        type: String,
        required : [true, "director es requerido"],
    },
    duration: {
        type: String,
        required : [true, "duracion es requerida"],
    },
    genre: {
        type: [String],
        required : [true, "genero es requerido"],
    },
    rate: {
        type: Number,
        required : [true, "rating es requerido"],
    },
    poster: {
        type: String,
        required : [true, "poster es requerido"],
    }
})

const Movie = model("Movie", movieSchema)

module.exports = Movie


