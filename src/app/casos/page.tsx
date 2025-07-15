"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaChartLine, FaUsers, FaRocket, FaHeart } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

// Array con 19 empresas reales - Reemplaza los nombres y rutas de logos según tus archivos
const empresas = [
  { nombre: "Empresa 1", logo: "/logos/empresa1.png", resultado: "+45% productividad" },
  { nombre: "Empresa 2", logo: "/logos/empresa2.png", resultado: "+38% retención" },
  { nombre: "Empresa 3", logo: "/logos/empresa3.png", resultado: "+52% innovación" },
  { nombre: "Empresa 4", logo: "/logos/empresa4.png", resultado: "+41% satisfacción" },
  { nombre: "Empresa 5", logo: "/logos/empresa5.png", resultado: "+35% eficiencia" },
  { nombre: "Empresa 6", logo: "/logos/empresa6.png", resultado: "+48% calidad" },
  { nombre: "Empresa 7", logo: "/logos/empresa7.png", resultado: "+44% aprendizaje" },
  { nombre: "Empresa 8", logo: "/logos/empresa8.png", resultado: "+39% ventas" },
  { nombre: "Empresa 9", logo: "/logos/empresa9.png", resultado: "+42% producción" },
  { nombre: "Empresa 10", logo: "/logos/empresa10.png", resultado: "+46% resultados" },
  { nombre: "Empresa 11", logo: "/logos/empresa11.png", resultado: "+50% crecimiento" },
  { nombre: "Empresa 12", logo: "/logos/empresa12.png", resultado: "+37% liderazgo" },
  { nombre: "Empresa 13", logo: "/logos/empresa13.png", resultado: "+43% creatividad" },
  { nombre: "Empresa 14", logo: "/logos/empresa14.png", resultado: "+40% eficiencia" },
  { nombre: "Empresa 15", logo: "/logos/empresa15.png", resultado: "+47% engagement" },
  { nombre: "Empresa 16", logo: "/logos/empresa16.png", resultado: "+36% precisión" },
  { nombre: "Empresa 17", logo: "/logos/empresa17.png", resultado: "+49% satisfacción" },
  { nombre: "Empresa 18", logo: "/logos/empresa18.png", resultado: "+41% calidad" },
  { nombre: "Empresa 19", logo: "/logos/empresa19.png", resultado: "+45% experiencia" },
  { nombre: "Empresa 20", logo: "/logos/empresa20.png", resultado: "" },
  { nombre: "Empresa 21", logo: "/logos/empresa21.png", resultado: "" },
  { nombre: "Empresa 22", logo: "/logos/empresa22.png", resultado: "" },
];

export default function Casos() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedEmpresa, setSelectedEmpresa] = useState<typeof empresas[0] | null>(null);
  const [autoActive, setAutoActive] = useState<number[]>([]);
  const [particles, setParticles] = useState<{x: number, y: number, duration: number}[]>([]);

  // Animación automática de logos random - Reducida en móvil
  useEffect(() => {
    let prevIndices: number[] = [];
    const interval = setInterval(() => {
      const cantidad = isMobile ? Math.min(8, empresas.length) : Math.min(15, empresas.length);
      let indicesDisponibles = Array.from({length: empresas.length}, (_, i) => i);
      // Intenta excluir los del ciclo anterior si es posible
      if (empresas.length > cantidad && prevIndices.length > 0) {
        indicesDisponibles = indicesDisponibles.filter(i => !prevIndices.includes(i));
      }
      // Si no hay suficientes, permite repeticiones
      if (indicesDisponibles.length < cantidad) {
        indicesDisponibles = Array.from({length: empresas.length}, (_, i) => i);
      }
      // Baraja los índices
      for (let i = indicesDisponibles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indicesDisponibles[i], indicesDisponibles[j]] = [indicesDisponibles[j], indicesDisponibles[i]];
      }
      const indices = indicesDisponibles.slice(0, cantidad);
      setAutoActive(indices);
      prevIndices = indices;
      setTimeout(() => setAutoActive([]), isMobile ? 800 : 1000);
    }, isMobile ? 2000 : 1000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Efecto para rotar automáticamente los logos (optimizado)
  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex(prev => prev === null ? 0 : (prev + 1) % empresas.length);
    }, 5000); // Aumentado a 5 segundos para reducir la frecuencia
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const numParticles = isMobile ? 4 : 8;
    const arr = Array.from({ length: numParticles }, () => ({
      x: Math.random() * 1000,
      y: Math.random() * 1000,
      duration: 15 + Math.random() * 5
    }));
    setParticles(arr);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a3a] via-[#1e3a8a] to-[#0a1a3a] p-8 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="inline-block mb-6"
        >
          <FaTrophy className={`${isMobile ? 'text-5xl' : 'text-6xl'} text-yellow-400 mx-auto mb-4`} />
        </motion.div>
        <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl sm:text-7xl'} font-extrabold text-white mb-6 drop-shadow-2xl`}>
          Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Éxito</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className={`text-blue-200 ${isMobile ? 'text-lg' : 'text-xl sm:text-2xl'} font-light max-w-3xl mx-auto px-4`}
        >
          Descubre cómo empresas líderes transformaron su desarrollo con aliA y nuestro aliado de negocio Vortice.
        </motion.p>
      </motion.div>

      {/* Grid de Logos Animados - Optimizado para móvil */}
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'} max-w-7xl mx-auto mb-16`}>
        {empresas.map((empresa, index) => (
          <motion.div
            key={empresa.nombre}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.05, 
              duration: 0.5
            }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 }
            }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => setSelectedEmpresa(empresa)}
            className="relative group cursor-pointer"
          >
            {/* Logo Container */}
            <div className={`relative bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-2xl ${isMobile ? 'p-4' : 'p-6'} shadow-2xl border border-blue-500/30 hover:border-yellow-400/50 transition-all duration-300 group-hover:shadow-yellow-500/20`}>
              {/* Efecto de brillo simplificado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Logo */}
              <motion.div
                animate={{ 
                  scale: hoveredIndex === index || autoActive.includes(index) ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`mb-3 flex justify-center items-center ${isMobile ? 'w-32 h-16' : 'w-36 h-20'} mx-auto`}
              >
                <img 
                  src={empresa.logo} 
                  alt={`Logo de ${empresa.nombre}`}
                  className={`max-h-full max-w-full object-contain transition-all duration-300 ${hoveredIndex === index || autoActive.includes(index) ? 'opacity-100 filter-none' : 'opacity-80 filter brightness-0 invert'}`}
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback con emoji si la imagen no carga */}
                <span className={`${isMobile ? 'text-3xl' : 'text-4xl'} hidden`}>🏢</span>
              </motion.div>
              
              {/* Espacio para mantener el layout */}
              <div className="h-6"></div>
              
              {/* Sector (solo visible en hover) */}
              
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para detalles de empresa - Optimizado para móvil */}
      <AnimatePresence>
        {selectedEmpresa && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEmpresa(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl ${isMobile ? 'p-6' : 'p-8'} ${isMobile ? 'max-w-sm' : 'max-w-md'} w-full border border-blue-500/30`}
            >
              <div className="text-center">
                <div className={`mb-6 flex justify-center items-center ${isMobile ? 'h-16' : 'h-20'}`}>
                  <img 
                    src={selectedEmpresa.logo} 
                    alt={`Logo de ${selectedEmpresa.nombre}`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className={`${isMobile ? 'text-5xl' : 'text-6xl'} hidden`}>🏢</span>
                </div>
                <p className={`text-blue-200 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                  "Con aliA transformamos completamente nuestro enfoque al desarrollo humano. 
                  Los resultados superaron nuestras expectativas y ahora tenemos una cultura 
                  de crecimiento continuo."
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section - Optimizado para móvil */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-white mb-6`}>
          ¿Quieres ser el próximo caso de éxito?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`bg-gradient-to-r from-yellow-500 to-orange-500 text-black ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200`}
        >
          Solicita tu demo gratuita
        </motion.button>
      </motion.div>

      {/* Efectos de partículas flotantes (reducidas) - Solo en desktop */}
      {!isMobile && particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: p.x,
                y: p.y,
                opacity: 0
              }}
              animate={{ 
                x: p.x,
                y: p.y,
                opacity: [0, 0.3, 0]
              }}
              transition={{ 
                duration: p.duration,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
} 