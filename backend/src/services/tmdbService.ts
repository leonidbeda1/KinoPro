import axios from 'axios';

const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const tmdbService = {
  // Получить популярные фильмы
  getPopularMovies: async (page = 1) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
        params: {
          api_key: TMDB_API_KEY,
          page,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  },

  // Поиск фильмов
  searchMovies: async (query: string, page = 1) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          query,
          page,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },

  // Получить детали фильма
  getMovieDetails: async (movieId: number) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  // Получить рекомендации для фильма
  getMovieRecommendations: async (movieId: number, page = 1) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/recommendations`, {
        params: {
          api_key: TMDB_API_KEY,
          page,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      throw error;
    }
  },

  // Получить фильмы по жанру
  getMoviesByGenre: async (genreId: number, page = 1) => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
        params: {
          api_key: TMDB_API_KEY,
          with_genres: genreId,
          page,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      throw error;
    }
  },

  // Получить список жанров
  getGenres: async () => {
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
        params: {
          api_key: TMDB_API_KEY,
          language: 'ru-RU'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching genres:', error);
      throw error;
    }
  }
};
