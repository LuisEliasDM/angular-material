export class Endpoints{
    static GENERAL_URL: string = "https://api.themoviedb.org/3";
    static TRENDING_URL: string = "/trending/all/week";
    static GENRE_URL: string = "/genre/movie/list"

    static getMoviesByGenre(genre: string, page: number = 1){
        return `/discover/movie?with_genres=${genre}&page=${page}`
    }

}