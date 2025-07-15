"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaChalkboardUser, FaRobot, FaChartBar, FaPalette } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";


export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  // Estados para partículas y burbujas
  const [particulas, setParticulas] = useState<Array<{
    size: number;
    left: number;
    top: number;
    color: string;
    xMove: number;
    delay: number;
    duration: number;
  }>>([]);
  
  const [burbujas, setBurbujas] = useState<Array<{
    width: number;
    height: number;
    left: number;
    bottom: number;
    duration: number;
    delay: number;
  }>>([]);



  const logos = Array.from({length: 22}).map((_, i) => ({
    src: `/logos/empresa${i+1}.png`,
    alt: `Empresa ${i+1}`
  }));
  const logosCarrusel = [...logos, ...logos];

  // Efecto para partículas
  useEffect(() => {
    if (!isMobile) {
      const arr = Array.from({ length: 16 }, (_, i) => {
        const size = i % 4 === 0 ? 32 + Math.random() * 24 : 16 + Math.random() * 16;
        const left = Math.random() * 100;
        const top = Math.random() * 60;
        const color = 'bg-white/80';
        const xMove = (Math.random() - 0.5) * 60;
        return { size, left, top, color, xMove, delay: i * 0.5, duration: 5 + Math.random() * 2.5 };
      });
      setParticulas(arr);
    }
  }, [isMobile]);

  // Efecto para burbujas
  useEffect(() => {
    if (!isMobile) {
      const arr = Array.from({ length: 18 }, () => ({
        width: 60 + Math.random() * 80,
        height: 60 + Math.random() * 80,
        left: Math.random() * 100,
        bottom: Math.random() * 80,
        duration: 8 + Math.random() * 4,
        delay: Math.random() * 9
      }));
      setBurbujas(arr);
    }
  }, [isMobile]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a1a3a] via-[#1e3a8a] to-[#0a1a3a] overflow-x-hidden">
      {/* Fondo animado - solo en desktop */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 60% 40%, #60a5fa 0%, transparent 70%)" }}
        />
      )}

      {/* Partículas flotantes HERO - solo en desktop */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {particulas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: 0, opacity: 0.7 }}
              animate={{ y: [0, -60, 0], x: [0, p.xMove, 0], opacity: [0.9, 0.7, 0.9] }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
              className={`absolute rounded-full ${p.color} blur-lg`}
              style={{
                width: p.size,
                height: p.size,
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* HERO optimizado para móvil */}
      <section className={`relative z-10 flex flex-col items-center justify-center ${isMobile ? 'min-h-[70vh]' : 'min-h-[80vh]'} text-center gap-8 pt-32`}>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Image 
            src="/alia-logo.png" 
            alt="aliA logo" 
            width={isMobile ? 180 : 220} 
            height={isMobile ? 65 : 80} 
            priority 
            className="mx-auto drop-shadow-xl" 
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`${isMobile ? 'text-3xl' : 'text-4xl sm:text-6xl'} font-extrabold text-white tracking-tight drop-shadow-lg`}
        >
          {isMobile ? (
            <>
              Lo que antes era <span className="text-blue-300">intangible</span>,<br />
              <span className="text-blue-400">ahora es gestionable.</span>
            </>
          ) : (
            <>
              Lo que antes era <span className="text-blue-300">intangible</span>,<br />
              <span className="text-blue-400">ahora con la IA es gestionable.</span>
            </>
          )}
        </motion.h1>

        {/* One-liner visual - solo en desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-2xl sm:text-3xl font-bold text-blue-200 bg-blue-900/60 rounded-2xl px-8 py-4 shadow-lg mt-2"
          >
            Transforma el talento en resultados medibles
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className={`max-w-xl mx-auto ${isMobile ? 'text-base' : 'text-lg sm:text-2xl'} text-blue-100 font-light px-4`}
        >
          {isMobile ? (
            "aliA es la plataforma de IA que estructura, escala y mide el desarrollo de talento en tu organización."
          ) : (
            "aliA es la plataforma de inteligencia artificial que estructura, escala y mide el desarrollo de talento en tu organización."
          )}
        </motion.p>

        <motion.a
          href="#demo"
          whileHover={{ scale: isMobile ? 1.05 : 1.08 }}
          whileTap={{ scale: 0.97 }}
          className={`inline-flex items-center gap-3 ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-full bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600 transition-all duration-200 mt-4 mx-auto`}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          Solicita una demo <FaArrowRight />
        </motion.a>
      </section>

      {/* ¿Qué es aliA? - Simplificado en móvil */}
      {!isMobile && (
        <section className="relative z-10 py-24 px-4 flex justify-center items-center w-full">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full max-w-4xl bg-gradient-to-br from-blue-900/80 to-blue-700/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-blue-500/30 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-4">
              <FaRobot className="text-7xl text-blue-300 mb-2 drop-shadow-lg" />
              <div className="flex flex-col gap-2 mt-2">
                <span className="bg-blue-800/60 text-blue-200 font-bold rounded-full px-4 py-1 text-lg">IA Empresarial</span>
                <span className="bg-blue-800/60 text-blue-200 font-bold rounded-full px-4 py-1 text-lg">Desarrollo de Talento</span>
                <span className="bg-blue-800/60 text-blue-200 font-bold rounded-full px-4 py-1 text-lg">Medición de Impacto</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 drop-shadow-lg">
                ¿Qué es aliA?
              </h2>
              <p className="text-blue-100 text-xl mb-6 font-light">
                aliA es una plataforma de IA entrenada por líderes, diseñada para estructurar, escalar y medir el desarrollo de talento interno en las organizaciones.
              </p>
              <ul className="text-blue-200 space-y-4 text-lg pl-0">
                <li className="flex items-center gap-3"><span className="text-blue-400 text-2xl">•</span> Profesionaliza el coaching y mentoring con trazabilidad y data.</li>
                <li className="flex items-center gap-3"><span className="text-blue-400 text-2xl">•</span> Integra desarrollo humano con objetivos de negocio.</li>
                <li className="flex items-center gap-3"><span className="text-blue-400 text-2xl">•</span> Convierte el talento en un sistema estratégico, no en una promesa.</li>
              </ul>
            </div>
          </motion.div>
        </section>
      )}

      {/* Beneficios - Simplificado en móvil */}
      <section className={`relative z-10 ${isMobile ? 'py-16' : 'py-24'} px-4 max-w-6xl mx-auto`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl'} font-bold text-white text-center mb-12`}
        >
          ¿Qué hace aliA por tu organización?
        </motion.h2>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}`}>
          {[
            { icon: <FaChartBar className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "Datos accionables" },
            { icon: <FaChalkboardUser className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "Escala de líderes" },
            { icon: <FaRobot className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "IA aplicada" },
            { icon: <FaPalette className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "Personalización" },
            { icon: <FaArrowRight className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "Conexión con negocio" },
            { icon: <FaChartBar className={`${isMobile ? 'text-3xl' : 'text-4xl'} text-blue-200 mb-2`} />, label: "Visibilidad ejecutiva" },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className={`bg-gradient-to-br from-blue-800/80 to-blue-600/80 rounded-2xl ${isMobile ? 'p-4' : 'p-8'} shadow-lg text-white ${isMobile ? 'text-sm' : 'text-xl'} font-semibold flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 border border-blue-400/20`}
            >
              {b.icon}
              <span className={isMobile ? 'text-center' : ''}>{b.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funcionalidades - Solo en desktop */}
      {!isMobile && (
        <section className="relative z-10 py-24 px-4 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Funcionalidades Principales
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Gestión de Capacitación",
                desc: "Acompañamiento y seguimiento en tiempo real.",
                icon: <FaChalkboardUser className="text-5xl text-blue-300 mb-4" />,
                tag: "Seguimiento"
              },
              {
                title: "Machine Learning",
                desc: "Mentores, coaches y terapeutas de IA.",
                icon: <FaRobot className="text-5xl text-blue-300 mb-4" />,
                tag: "IA Personalizada"
              },
              {
                title: "Reportes y Analytics",
                desc: "Dashboard, efectividad y ROI.",
                icon: <FaChartBar className="text-5xl text-blue-300 mb-4" />,
                tag: "Resultados"
              },
              {
                title: "Personalización",
                desc: "Branding y agentes de IA configurables.",
                icon: <FaPalette className="text-5xl text-blue-300 mb-4" />,
                tag: "A tu medida"
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.7 }}
                className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-blue-500/30 gap-2"
              >
                {f.icon}
                <span className="bg-blue-800/60 text-blue-200 font-bold rounded-full px-3 py-1 text-sm mb-2">{f.tag}</span>
                <h3 className="text-xl font-bold text-white mb-1">{f.title}</h3>
                <p className="text-blue-200 text-base mb-2">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Demo / Contacto - Optimizado para móvil */}
      <section id="demo" className={`relative z-10 ${isMobile ? 'py-16' : 'py-24'} px-4 max-w-3xl mx-auto flex flex-col items-center text-center gap-8`}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`${isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl'} font-bold text-white mb-4`}
        >
          Solicita una demo personalizada
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`text-blue-100 ${isMobile ? 'text-base' : 'text-lg'} mb-6 px-4`}
        >
          Descubre cómo aliA puede transformar el desarrollo de talento en tu empresa. Déjanos tus datos y te contactamos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-full flex flex-col gap-4 max-w-md mx-auto"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const nombre = formData.get('nombre') as string;
              const email = formData.get('email') as string;
              const mensaje = formData.get('mensaje') as string;

              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ nombre, email, mensaje }),
                });

                if (response.ok) {
                  alert('¡Gracias! Te contactaremos pronto.');
                  e.currentTarget.reset();
                } else {
                  alert('Hubo un error. Por favor intenta de nuevo.');
                }
              } catch {
                alert('Hubo un error. Por favor intenta de nuevo.');
              }
            }}
            className="flex flex-col gap-4"
          >
            <input 
              type="text" 
              name="nombre"
              required 
              placeholder="Nombre" 
              className={`rounded-lg px-4 ${isMobile ? 'py-4 text-base' : 'py-3'} bg-blue-950/60 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400`} 
            />
            <input 
              type="email" 
              name="email"
              required 
              placeholder="Correo electrónico" 
              className={`rounded-lg px-4 ${isMobile ? 'py-4 text-base' : 'py-3'} bg-blue-950/60 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400`} 
            />
            <textarea 
              name="mensaje"
              required 
              placeholder="¿En qué te podemos ayudar?" 
              className={`rounded-lg px-4 ${isMobile ? 'py-4 text-base' : 'py-3'} bg-blue-950/60 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400`} 
              rows={isMobile ? 4 : 3} 
            />
            <button 
              type="submit" 
              className={`mt-2 px-8 ${isMobile ? 'py-4 text-base' : 'py-3 text-lg'} rounded-full bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600 transition-all duration-200 flex items-center justify-center gap-2`}
            >
              Enviar <FaArrowRight />
            </button>
          </form>
        </motion.div>
      </section>

      {/* Empresas que ya trabajan con nosotros - Optimizado para móvil */}
      <section className={`relative z-10 ${isMobile ? 'py-16' : 'py-24'} px-4 max-w-6xl mx-auto flex flex-col items-center text-center gap-8`}>
        <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl'} font-bold text-white mb-8`}>
          Empresas que ya trabajan con nosotros
        </h2>
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, -logos.length*160] }}
            transition={{ repeat: Infinity, duration: isMobile ? 30 : 40, ease: "linear" }}
          >
            {logosCarrusel.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={isMobile ? 100 : 120}
                height={isMobile ? 50 : 60}
                className="transition-all duration-300 drop-shadow-xl opacity-90"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-blue-200 text-sm px-4">
        aliA © {new Date().getFullYear()} — Plataforma de IA para el desarrollo de talento empresarial.
      </footer>

      {/* Animación personalizada: burbujas - solo en desktop */}
      {!isMobile && (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {burbujas.map((b, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0.2 }}
              animate={{ y: [0, -100, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: b.duration,
                repeat: Infinity,
                delay: b.delay,
                ease: "easeInOut",
              }}
              className="absolute rounded-full bg-blue-400/20 blur-2xl"
              style={{
                width: b.width,
                height: b.height,
                left: `${b.left}%`,
                bottom: `${b.bottom}%`,
              }}
            />
          ))}
        </div>
      )}
      
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