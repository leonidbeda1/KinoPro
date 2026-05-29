"use client";

import { useEffect, useState } from "react";

export default function MovieGrid({ page }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`/api/movies?page=${page}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [page]);

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden">
      {/* Фильмы */}
      {movies.map((movie) => (
        <a
          key={movie.id}
          href={`/film/${movie.id}`}
          className="flex items-start gap-6 bg-[#111] p-4 rounded-lg hover:bg-[#1a1a1a] transition"
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-32 h-48 object-cover rounded-md"
          />

          <div>
            <h3 className="text-xl font-semibold text-white">{movie.title}</h3>
            <p className="text-gray-400">{movie.release_date?.slice(0, 4)}</p>

            <div className="flex items-center gap-1 mb-2">
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300">
                {movie.vote_average.toFixed(1)}/10
              </span>
            </div>

            <p className="text-gray-300 text-sm max-w-xl">
              {movie.overview}
            </p>
          </div>
        </a>
      ))}

      {/* Пагинация — как на Киного */}
      <div className="flex justify-center items-center gap-1 mt-8 flex-wrap bg-[#0d0d0d] p-3 rounded-md">
        
        {/* Кнопка "Раньше" */}
        <a
          href={`/films?page=${page - 1}`}
          className={`px-3 py-1 rounded ${
            page === 1
              ? "bg-[#333] text-gray-500"
              : "bg-[#222] text-gray-300 hover:bg-[#333]"
          }`}
        >
          Раньше
        </a>

        {/* Номера страниц 1–10 */}
        {[...Array(10)].map((_, i) => (
          <a
            key={i}
            href={`/films?page=${i + 1}`}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-pink-600 text-white"
                : "bg-[#222] text-gray-300 hover:bg-[#333]"
            }`}
          >
            {i + 1}
          </a>
        ))}

        {/* Многоточие */}
        <span className="px-3 py-1 text-gray-400">...</span>

        {/* Последняя страница */}
        <a
          href={`/films?page=8422`}
          className="px-3 py-1 bg-[#222] text-gray-300 rounded hover:bg-[#333]"
        >
          8422
        </a>

        {/* Кнопка "Позже" */}
        <a
          href={`/films?page=${page + 1}`}
          className="px-3 py-1 bg-[#222] text-gray-300 rounded hover:bg-[#333]"
        >
          Позже
        </a>
      </div>
    </div>
  );
}
