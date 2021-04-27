const numberOfFilms = prompt("How many films have ypu watched?");
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actrots: {},
    genres: [],
    private: false
};

const a = prompt("Last Watched film?");
const b = prompt("Your rating?");
const c = prompt("Last Watched film?");
const d = prompt("Your rating?");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)