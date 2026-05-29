import MovieGrid from "@/components/MovieGrid";

export default function FilmsPage({ searchParams }) {
  const page = Number(searchParams.page) || 1;

  return (
    <main className="flex overflow-x-hidden">
      {/* ЛЕВАЯ ПАНЕЛЬ */}
      <aside className="w-64 bg-[#0d0d0d] h-screen sticky top-0 border-r border-white/10 overflow-y-auto">
        <nav className="flex flex-col p-4 text-gray-300 gap-3">
          <a href="/" className="hover:text-white">Главная</a>
          <a href="/films?page=1" className="hover:text-white">Фильмы</a>
          <a href="/series" className="hover:text-white">Сериалы</a>
          <a href="/favorites" className="hover:text-white">Избранное</a>
        </nav>
      </aside>

      {/* ПРАВАЯ ЧАСТЬ — НЕ РАСТЯГИВАЕТСЯ ВПРАВО */}
      <div className="flex-1 px-6 py-8 overflow-x-hidden">
        <h1 className="text-3xl font-bold text-white mb-6">
          Фильмы — страница {page}
        </h1>

        <MovieGrid page={page} />
      </div>
    </main>
  );
}
