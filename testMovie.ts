
import { Movie } from "./Movie";
import { Professional } from "./Professional";

// Creamos una instancia de Movie para la película "Black Panther: Wakanda Forever"
const blackPantherMovie:Movie = new Movie("Black Panther: Wakanda Forever", 2022, "USA", "Action");

const director:Professional = new Professional("Director Name", 45, 75, 180, false, "Nationality", 1, "Director");
const writer:Professional = new Professional("Writer Name", 40, 70, 175, false, "Nationality", 0, "Writer");
const actor:Professional = new Professional("Actor Name", 35, 80, 185, false, "Nationality", 0, "Actor");

// Establecemos los profesionales en la película
blackPantherMovie.director = director;
blackPantherMovie.writer = writer;
blackPantherMovie.actors.push(actor);

// Añadimos algunos datos adicionales a la película
blackPantherMovie.language = "English";
blackPantherMovie.plataforma = "Cinemas";
blackPantherMovie.isMCU = true;
blackPantherMovie.mainCharacterName = "T'Challa";
blackPantherMovie.producer = "Marvel Studios";
blackPantherMovie.distributor = "Walt Disney Studios Motion Pictures";

// Mostramos todos los datos de la película
blackPantherMovie.showMovieDetails();
