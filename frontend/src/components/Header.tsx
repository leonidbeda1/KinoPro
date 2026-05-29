'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-lg">
              K
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              KinoPro
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Главная
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Фильмы
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Сериалы
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Избранное
            </a>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center">
            <input
              type="text"
              placeholder="Поиск..."
              className="bg-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 w-48"
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg">
              Главная
            </a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg">
              Фильмы
            </a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg">
              Сериалы
            </a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg">
              Избранное
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}