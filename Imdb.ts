
import { Movie } from "./Movie";

export class Imdb {
    public pelicula: Movie[];

    constructor(pelicula: Movie[]) {
        this.pelicula = pelicula;
    }
}
