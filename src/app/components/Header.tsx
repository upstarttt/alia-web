"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-blue-900/95 to-blue-800/95 backdrop-blur-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-white font-bold text-xl">aliA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors duration-200">
              Inicio
            </Link>
            <Link href="/funcionalidades" className="text-blue-200 hover:text-white transition-colors duration-200">
              Funcionalidades
            </Link>
            <Link href="/casos" className="text-blue-200 hover:text-white transition-colors duration-200">
              Casos de Éxito
            </Link>
            <Link href="/contratar" className="text-blue-200 hover:text-white transition-colors duration-200">
              Contratar
            </Link>
            <Link href="/plataforma" className="text-blue-200 hover:text-white transition-colors duration-200">
              Plataforma
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700/50 transition-colors duration-200"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900/95 rounded-b-lg border-b border-blue-500/30">
              <Link
                href="/"
                className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-700/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/funcionalidades"
                className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-700/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </Link>
              <Link
                href="/casos"
                className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-700/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Éxito
              </Link>
              <Link
                href="/contratar"
                className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-700/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contratar
              </Link>
              <Link
                href="/plataforma"
                className="block px-3 py-2 text-blue-200 hover:text-white hover:bg-blue-700/50 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Plataforma
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 