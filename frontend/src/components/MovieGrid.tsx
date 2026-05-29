"use client";

import { useEffect, useState } from "react";

export default function MovieGrid() {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/movies?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("MOVIES:", data);
        setMovies(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setMovies([]);
      });
  }, [page]);

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      {/* Фильмы */}
      {movies.length === 0 && (
        <div className="text-center opacity-70">Фильмы загружаются...</div>
      )}

      {movies.length > 0 &&
        movies.map((movie) => (
          <a
            key={movie.id}
            href={`/film/${movie.id}`}
            className="flex gap-4 items-center bg-[#111] p-4 rounded-lg hover:bg-[#1a1a1a] transition"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="w-20 h-28 object-cover rounded"
            />

            <div>
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm opacity-70">{movie.release_date}</p>
            </div>
          </a>
        ))}

      {/* Пагинация */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 bg-[#222] rounded hover:bg-[#333]"
        >
          Назад
        </button>

        <span className="opacity-70">Страница {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-[#222] rounded hover:bg-[#333]"
        >
          Вперёд
        </button>
      </div>
    </div>
  );
}
