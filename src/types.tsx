type MovieType = {
  id: number;
  genres: any[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  production_companies: any[];
};

type MovieType2 = {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

type TvType = {
  backdrop_path: string;
  first_air_date: string;
  genres: any[];
  id: number;
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  tagline: string;
  production_companies: any[];
};

type TvType2 = {
  id: number;
  overview: string;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
};

type PosterType = {
  type: string; //movie or tv
  id: number;
  poster_path: string;
  title: string;
  date: string;
  vote_average: number;
  overview: string;
};

type CastType = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};

type VideoType = {
  key: string;
  name: string;
  official: boolean;
  type: string;
};

type ProdType = {
  logo_path: string;
  name: string;
  origin_country: string;
};

export type {
  MovieType,
  MovieType2,
  TvType,
  TvType2,
  PosterType,
  CastType,
  VideoType,
  ProdType,
};
