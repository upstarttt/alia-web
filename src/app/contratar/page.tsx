"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaStar, FaUsers, FaRocket, FaCrown } from "react-icons/fa6";
import Link from "next/link";

export default function Contratar() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1a3a] via-[#1e3a8a] to-[#0a1a3a] p-8 pt-32">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
          Contrata <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">aliA</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-blue-200 text-xl sm:text-2xl font-light max-w-3xl mx-auto px-4"
        >
          Cada empresa es única. Te hacemos una cotización personalizada 
          basada en tus necesidades específicas.
        </motion.p>
      </motion.div>

      {/* Información de servicios */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-2xl border border-blue-500/30"
          >
            <FaUsers className="text-5xl text-blue-300 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Servicios Incluidos</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span>Coaching y mentoring con IA</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span>Análisis y medición de ROI</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span>Reportes personalizados</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span>Soporte técnico dedicado</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheck className="text-green-400 flex-shrink-0" />
                <span>Integración con tus sistemas</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-2xl border border-blue-500/30"
          >
            <FaRocket className="text-5xl text-blue-300 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Proceso Simple</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</span>
                <div>
                  <h4 className="text-white font-semibold">Contacto inicial</h4>
                  <p className="text-blue-200 text-sm">Cuéntanos sobre tu empresa y necesidades</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</span>
                <div>
                  <h4 className="text-white font-semibold">Demo personalizada</h4>
                  <p className="text-blue-200 text-sm">Te mostramos aliA adaptado a tu contexto</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</span>
                <div>
                  <h4 className="text-white font-semibold">Cotización a medida</h4>
                  <p className="text-blue-200 text-sm">Recibes una propuesta personalizada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          ¿Listo para transformar tu empresa?
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Contáctanos y te haremos una cotización personalizada basada en tus necesidades específicas.
        </p>
        <Link
          href="/#demo"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Solicita tu cotización personalizada <FaArrowRight />
        </Link>
      </motion.div>

      {/* Testimonios */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-8">Lo que dicen nuestros clientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              texto: "aliA transformó completamente nuestro enfoque al desarrollo de talento. Los resultados superaron nuestras expectativas.",
              autor: "María González",
              cargo: "Directora de RRHH",
              empresa: "TechCorp"
            },
            {
              texto: "La combinación de IA y mentoring humano nos permitió escalar el desarrollo de líderes de manera eficiente.",
              autor: "Carlos Rodríguez",
              cargo: "CEO",
              empresa: "InnovateLab"
            },
            {
              texto: "Los analytics predictivos nos ayudaron a identificar y desarrollar el potencial de nuestros colaboradores.",
              autor: "Ana Martínez",
              cargo: "VP de Operaciones",
              empresa: "GrowthCo"
            }
          ].map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-blue-900/60 rounded-2xl p-6 border border-blue-500/30"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-blue-100 text-sm mb-4 italic">"{testimonio.texto}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{testimonio.autor}</p>
                <p className="text-blue-300 text-xs">{testimonio.cargo}, {testimonio.empresa}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 