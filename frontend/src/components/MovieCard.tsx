'use client';

import { useState } from 'react';

interface MovieCardProps {
  title: string;
  rating: number;
  genre: string;
  image: string;
}

export default function MovieCard({ title, rating, genre, image }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div
        className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-red-600 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <span>★</span>
          <span>{rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <h3 className="font-bold text-lg truncate group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-1">{genre}</p>
      </div>

      {/* Hover overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg">
          <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
            ▶ Смотреть
          </button>
        </div>
      )}
    </div>
  );
}