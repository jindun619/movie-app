import { API_KEY } from '@env';

const REGION = 'KR';
const BASE_URL = 'https://api.themoviedb.org/3';
const params = `region=${REGION}&api_key=${API_KEY}`;

export const fetchData = {
  movieList: {
    nowPlaying: async () => {
      const response = await fetch(
        `${BASE_URL}/movie/now_playing?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    popular: async () => {
      const response = await fetch(
        `${BASE_URL}/movie/popular?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    topRated: async () => {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  },
  peopleList: {
    popular: async () => {
      const response = await fetch(
        `${BASE_URL}/person/popular?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  },
  movie: {
    detail: async (id: number) => {
      const response = await fetch(
        `${BASE_URL}/movie/${id}?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    credits: async (id: number) => {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/credits?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    videos: async (id: number) => {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/videos?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    recomm: async (id: number) => {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/recommendations?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  },
  person: {
    detail: async (id: number, originalLanguage: boolean = false) => {
      const response = await fetch(
        `${BASE_URL}/person/${id}?${params}&${
          !originalLanguage && 'language=ko-KR'
        }`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    movieCredits: async (id: number) => {
      const response = await fetch(
        `${BASE_URL}/person/${id}/movie_credits?${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  },
  search: {
    movie: async (query: string, page: number = 1) => {
      const response = await fetch(
        `${BASE_URL}/search/movie?query=${query}&page=${page}&${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    person: async (query: string, page: number = 1) => {
      const response = await fetch(
        `${BASE_URL}/search/person?query=${query}&page=${page}&${params}&language=ko-KR`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  },
};
