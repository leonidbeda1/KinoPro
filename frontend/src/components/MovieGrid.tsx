'use client';

import MovieCard from './MovieCard';

const movies = [
  {
    id: 1,
    title: 'Дюна: Часть вторая',
    poster: '/poster4.jpg',
  },
  {
    id: 2,
    title: 'Оппенгеймер',
    poster: '/poster1.jpg',
  },
  {
    id: 3,
    title: 'Джокер',
    poster: '/poster2.jpg',
  },
  {
    id: 4,
    title: 'Бэтмен',
    poster: '/poster3.jpg',
  },
];

export default function MovieGrid() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-8">
          Популярные фильмы
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster={movie.poster}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
