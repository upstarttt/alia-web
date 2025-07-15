"use client";

import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { FaBars, FaTimes } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Casos de Éxito", href: "/casos" },
  { label: "Contacto", href: "/#demo" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [open, setOpen] = useState(false);

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Menú animado */}
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a1a3a]/90 via-[#1e3a8a]/90 to-[#0a1a3a]/90 shadow-lg backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.12, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <img
                  src="/alia-logo.png"
                  alt="aliA logo"
                  width={60}
                  height={24}
                  className="drop-shadow-xl cursor-pointer"
                />
              </motion.div>
            </Link>
            {/* Menú hamburguesa solo en móvil */}
            {isMobile ? (
              <>
                <button
                  className="text-white text-3xl p-2 focus:outline-none"
                  onClick={() => setOpen(true)}
                  aria-label="Abrir menú"
                >
                  <FaBars />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-gradient-to-br from-[#0a1a3a] via-[#1e3a8a] to-[#0a1a3a] shadow-2xl z-50 flex flex-col p-6 gap-8"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <img src="/alia-logo.png" alt="aliA logo" width={48} height={20} />
                        <button
                          className="text-white text-3xl p-2 focus:outline-none"
                          onClick={() => setOpen(false)}
                          aria-label="Cerrar menú"
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <ul className="flex flex-col gap-6 mt-4">
                        {menuItems.map((item, i) => (
                          <motion.li
                            key={item.href}
                            initial={{ x: 40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * i, duration: 0.4, type: "spring" }}
                          >
                            <Link
                              href={item.href}
                              className="text-white text-lg font-bold block py-2 px-2 rounded hover:bg-blue-600/40 hover:text-blue-200 transition-colors duration-200"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Fondo oscuro al abrir menú */}
                {open && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black z-40"
                    onClick={() => setOpen(false)}
                  />
                )}
              </>
            ) : (
              <ul className="flex gap-2 sm:gap-4 md:gap-8">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.18, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      className="text-white font-bold text-base sm:text-lg px-3 py-2 rounded transition-colors duration-200 group-hover:bg-blue-600/40 group-hover:text-blue-200"
                    >
                      {item.label}
                    </Link>
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-1 bg-blue-400 rounded-b-lg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                    />
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.nav>
        <div className="pt-12">{children}</div>
      </body>
    </html>
  );
}
