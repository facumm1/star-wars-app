import {RouteProp} from '@react-navigation/native';

export type FilmTypes = {
  titulo: string;
  episodio: number;
  apertura: string;
  director: string;
  productor: string;
  estreno: string;
  personajes: string[];
  planetas: string[];
  naves: string[];
  vehiculos: string[];
  especies: string[];
  creado: string;
  editado: string;
  url: string;
  tipoContenido?: string;
  poster?: string;
};

export type PlanetTypes = {
  nombre: string;
  periodo_rotacion: number;
  periodo_orbital: string;
  diametro: string;
  clima: string;
  gravedad: string;
  terreno: string;
  agua_superficie: string;
  poblacion: string;
  residentes: string[];
  peliculas: string[];
  created: string;
  edited: string;
  url: string;
  tipoContenido?: string;
  imagen?: string;
};

export type PeopleTypes = {
  nombre: string;
  altura: number;
  peso: string;
  color_pelo: string;
  color_piel: string;
  color_ojos: string;
  estreno: string;
  nacimiento: string;
  genero: string;
  hogar: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves: string[];
  creado: string;
  editado: string;
  url: string;
  tipoContenido?: string;
  imagen?: string;
};

type ContentTypes = FilmTypes | PlanetTypes | PeopleTypes;

export type ContentRouteType = RouteProp<
  StackParamList,
  'ContentDetailsScreen'
>;

type StackParamList = {
  HomeScreen: undefined;
  ContentDetailsScreen: ContentTypes;
};
