export interface Heroe {
  id?:               string; //Con el signo ? ponemos que es opcional
  superhero:        string;
  publisher:        Publisher;
  alter_ego:        string;
  first_appearance: string;
  characters:       string;
  alt_img?:         string; //String porque vamos a usar url
}

export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
}
