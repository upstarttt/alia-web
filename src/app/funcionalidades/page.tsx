"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaChalkboardUser, FaBrain, FaUserTie, FaChartLine, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Funcionalidades() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1a3a] via-[#1e3a8a] to-[#0a1a3a] p-8 pt-32">
      {/* HERO animado */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Funcionalidades aliA
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-blue-200 text-xl sm:text-2xl font-light mb-4"
        >
          La IA que impulsa el desarrollo humano y el bienestar en tu empresa
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6 mt-6"
        >
          <FaUser className="text-5xl text-blue-300 animate-bounce-slow" />
          <FaBrain className="text-5xl text-blue-200 animate-pulse" />
          <FaChalkboardUser className="text-5xl text-blue-400 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Tarjetas de funcionalidades diferenciadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl mb-20">
        {/* Gestión y medición de procesos humanos */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-2xl border border-blue-500/30 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300"
        >
          <FaChalkboardUser className="text-6xl text-blue-200 mb-2" />
          <h2 className="text-2xl font-bold text-white mb-2">Gestión y Medición de Acompañamiento Humano</h2>
          <p className="text-blue-100 text-lg font-light mb-2">Gestiona, traza y mide todos los procesos de mentoring, coaching y terapia realizados por personas reales en tu empresa. La IA estudia estos procesos, calcula el ROI y predice el desarrollo de cada colaborador.</p>
        </motion.div>
        {/* Acompañamiento con agentes IA */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-2xl border border-blue-500/30 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300"
        >
          <FaUserTie className="text-6xl text-blue-300 mb-2" />
          <h2 className="text-2xl font-bold text-white mb-2">Acompañamiento con Agentes IA</h2>
          <p className="text-blue-100 text-lg font-light mb-2">Mentores, coaches y terapeutas IA entrenados por expertos, siempre actualizados y listos para acompañar a cada colaborador de forma personalizada y automatizada 24/7 desde su celular.</p>
        </motion.div>
      </div>

      {/* Sección visual: IA analiza procesos humanos y predice/da ROI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">¿Cómo potencia aliA el talento humano?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Paso 1 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <FaChalkboardUser className="text-4xl text-blue-300 mb-2" />
            <span className="text-blue-100 font-bold">Acompañamiento Humano</span>
            <span className="text-blue-200 text-sm">Mentoring, coaching y terapia con personas reales.</span>
          </motion.div>
          {/* Paso 2 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <FaUser className="text-4xl text-blue-300 mb-2" />
            <span className="text-blue-100 font-bold">Análisis y Medición IA</span>
            <span className="text-blue-200 text-sm">La IA estudia los procesos, mide el ROI y predice el desarrollo de cada colaborador.</span>
          </motion.div>
          {/* Paso 3 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <FaChartLine className="text-4xl text-blue-300 mb-2" />
            <span className="text-blue-100 font-bold">Predicción y Resultados</span>
            <span className="text-blue-200 text-sm">Obtén predicciones inteligentes y resultados medibles para tu empresa.</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Llamado a la acción visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-col items-center gap-4 mt-8"
      >
        <Link
          href="/#demo"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-500 text-white font-bold text-lg shadow-lg hover:bg-blue-600 transition-all duration-200 mt-4"
        >
          Solicita una demo <FaArrowRight />
        </Link>
        <span className="text-blue-200 text-sm">Descubre cómo aliA puede transformar el desarrollo humano en tu empresa</span>
      </motion.div>
      <style>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite cubic-bezier(.68,-0.55,.27,1.55);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </div>
  );
} 