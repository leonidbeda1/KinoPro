import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MovieSection from '@/components/MovieSection';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  // Примеры фильмов
  const popularMovies = [
    {
      id: '1',
      title: 'Интерстеллар',
      rating: 8.6,
      genre: 'Научная фантастика',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    },
    {
      id: '2',
      title: 'Начало',
      rating: 8.8,
      genre: 'Триллер',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
    },
    {
      id: '3',
      title: 'Матрица',
      rating: 8.7,
      genre: 'Боевик',
      image: 'https://images.unsplash.com/photo-1489599849228-ed4dc9ee6131?w=400&h=600&fit=crop',
    },
    {
      id: '4',
      title: 'Тёмный рыцарь',
      rating: 9.0,
      genre: 'Боевик',
      image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=600&fit=crop',
    },
  ];

  const newReleases = [
    {
      id: '5',
      title: 'Дюна 2',
      rating: 8.5,
      genre: 'Фантастика',
      image: 'https://images.unsplash.com/photo-1516573191022-7bccad2d25c5?w=400&h=600&fit=crop',
    },
    {
      id: '6',
      title: 'Барби',
      rating: 7.9,
      genre: 'Комедия',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop',
    },
    {
      id: '7',
      title: 'Опенгеймер',
      rating: 8.3,
      genre: 'Драма',
      image: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=600&fit=crop',
    },
    {
      id: '8',
      title: 'Килlers',
      rating: 8.1,
      genre: 'Боевик',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
    },
  ];

  return (
    <main>
      <Header />
      <Hero />
      <MovieSection title="Популярные фильмы" movies={popularMovies} />
      <MovieSection title="Новые релизы" movies={newReleases} />
      <Features />
      <Footer />
    </main>
  );
}
