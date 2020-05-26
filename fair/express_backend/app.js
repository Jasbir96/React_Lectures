const express = require("express");
const app = express();
// 2009
const { getGenres } = require("./db/fakeGenreService");
const { getMovies } = require("./db/fakeMovieService");
// 2015
// import { getGenres } from "./db/fakeGenreService";
// import { getMovies } from "./db/fakeMovieService";
app.get("/getGenres", function (req, res) {
    let genres = getGenres();
    setTimeout(function () {
        res.status(200).json({
            genres
        })
    }, 3000);

})
app.get("/getMovies", function (req, res) {
    let movies = getMovies();
    res.status(200).json({
        movies
    })
})
app.listen(4000, function () {
    console.log("Backend server is listening at port 4000");
})