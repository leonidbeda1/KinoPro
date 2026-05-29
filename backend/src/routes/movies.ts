import { Router, Request, Response } from 'express';
import { tmdbService } from '../services/tmdbService';

const router = Router();

// GET /api/movies/popular
router.get('/popular', async (req: Request, res: Response) => {
  try {
    const page = req.query.page as string || '1';
    const data = await tmdbService.getPopularMovies(parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch popular movies' });
  }
});

// GET /api/movies/search?q=query
router.get('/search', async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    const data = await tmdbService.searchMovies(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search movies' });
  }
});

// GET /api/movies/genres/list
router.get('/genres/list', async (req: Request, res: Response) => {
  try {
    const data = await tmdbService.getGenres();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch genres' });
  }
});

// GET /api/movies/genre/:genreId
router.get('/genre/:genreId', async (req: Request, res: Response) => {
  try {
    const genreId = parseInt(req.params.genreId);
    const page = req.query.page as string || '1';
    const data = await tmdbService.getMoviesByGenre(genreId, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movies by genre' });
  }
});

// GET /api/movies/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const movieId = parseInt(req.params.id);
    const data = await tmdbService.getMovieDetails(movieId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie details' });
  }
});

// GET /api/movies/:id/recommendations
router.get('/:id/recommendations', async (req: Request, res: Response) => {
  try {
    const movieId = parseInt(req.params.id);
    const page = req.query.page as string || '1';
    const data = await tmdbService.getMovieRecommendations(movieId, parseInt(page));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});

export default router;