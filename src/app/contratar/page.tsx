"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaArrowRight, FaStar, FaUsers, FaRocket, FaCrown } from "react-icons/fa6";
import Link from "next/link";

export default function Contratar() {
  const planes = [
    {
      nombre: "Starter",
      precio: "$299",
      periodo: "mes",
      descripcion: "Perfecto para empresas pequeñas",
      caracteristicas: [
        "Hasta 50 usuarios",
        "Coaching básico con IA",
        "Reportes mensuales",
        "Soporte por email",
        "Integración básica"
      ],
      icono: <FaUsers className="text-4xl text-blue-300" />,
      destacado: false
    },
    {
      nombre: "Professional",
      precio: "$799",
      periodo: "mes",
      descripcion: "Ideal para empresas en crecimiento",
      caracteristicas: [
        "Hasta 200 usuarios",
        "Coaching avanzado con IA",
        "Mentoring humano + IA",
        "Reportes semanales",
        "Soporte prioritario",
        "Integración completa",
        "Analytics avanzados"
      ],
      icono: <FaRocket className="text-4xl text-blue-300" />,
      destacado: true
    },
    {
      nombre: "Enterprise",
      precio: "Personalizado",
      periodo: "",
      descripcion: "Para grandes organizaciones",
      caracteristicas: [
        "Usuarios ilimitados",
        "Coaching personalizado",
        "Mentoring ejecutivo",
        "Reportes en tiempo real",
        "Soporte 24/7",
        "Integración personalizada",
        "Analytics predictivos",
        "API dedicada",
        "Implementación asistida"
      ],
      icono: <FaCrown className="text-4xl text-blue-300" />,
      destacado: false
    }
  ];

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
          Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Plan</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-blue-200 text-xl sm:text-2xl font-light max-w-3xl mx-auto px-4"
        >
          Transforma el desarrollo de talento en tu empresa con aliA. 
          Escoge el plan que mejor se adapte a tus necesidades.
        </motion.p>
      </motion.div>

      {/* Planes */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative bg-gradient-to-br from-blue-900/80 to-blue-700/80 rounded-3xl p-8 shadow-2xl border ${
                plan.destacado 
                  ? 'border-yellow-400/50 scale-105' 
                  : 'border-blue-500/30'
              } hover:scale-105 transition-transform duration-300`}
            >
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {plan.icono}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
                <p className="text-blue-200 text-sm mb-4">{plan.descripcion}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.precio}</span>
                  {plan.periodo && (
                    <span className="text-blue-200 text-lg">/{plan.periodo}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheck className="text-green-400 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{caracteristica}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#demo"
                className={`w-full block text-center py-3 px-6 rounded-full font-bold transition-all duration-200 ${
                  plan.destacado
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.nombre === "Enterprise" ? "Contactar" : "Comenzar"}
                <FaArrowRight className="inline ml-2" />
              </Link>
            </motion.div>
          ))}
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
          ¿Necesitas algo personalizado?
        </h2>
        <p className="text-blue-200 text-lg mb-8">
          Nuestro equipo está listo para crear una solución a medida para tu organización.
        </p>
        <Link
          href="/#demo"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Solicita una demo personalizada <FaArrowRight />
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