import MovieCard from './MovieCard';

interface MovieSectionProps {
  title: string;
  movies: Array<{
    id: string;
    title: string;
    rating: number;
    genre: string;
    image: string;
  }>;
}

export default function MovieSection({ title, movies }: MovieSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            genre={movie.genre}
            image={movie.image}
          />
        ))}
      </div>
    </section>
  );
}