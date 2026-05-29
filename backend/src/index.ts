import express from 'express';
import cors from 'cors';
import moviesRoutes from './routes/movies';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/movies', moviesRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});