const numberOfFilms = prompt("How many films have ypu watched?");
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actrots: {},
    genres: [],
    private: false
};
for (let i = 0; i < 2; i++){
    const a = prompt("Last Watched film?");
    const b = prompt("Your rating?");
    personalMovieDB.movies[a] = b;
    if (a != null && b != null && a != ''&& b !== '' && a.length < 50){
        console.log("Well done!");
    } else{
        console.log("Error");
        i--;
    }

}
if (personalMovieDB.count < 10) {
    console.log("Watched not to many films")
} else if (personalMovieDB > 30){
    console.log("Watched many films")
} else console.log("Norm")


console.log(personalMovieDB)