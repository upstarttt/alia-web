# Logos de Empresas - Casos de Éxito

## 📁 Estructura de archivos

Coloca aquí los logos de las 19 empresas reales que quieres mostrar en la página de casos de éxito.

### 📋 Formato recomendado:
- **Formato**: PNG o SVG (preferiblemente PNG con fondo transparente)
- **Tamaño**: Mínimo 200x200px, máximo 400x400px
- **Fondo**: Transparente o blanco
- **Nombres**: Usa nombres descriptivos como `empresa1.png`, `empresa2.png`, etc.

### 🔧 Cómo configurar:

1. **Renombra tus logos** siguiendo el patrón: `empresa1.png`, `empresa2.png`, etc.
2. **Colócalos en esta carpeta** (`public/logos/`)
3. **Edita el archivo** `src/app/casos/page.tsx` y actualiza:
   - Los nombres de las empresas
   - Los sectores
   - Los resultados específicos

### 📝 Ejemplo de configuración:

```javascript
const empresas = [
  { 
    nombre: "Microsoft", 
    logo: "/logos/empresa1.png", 
    sector: "Tecnología", 
    resultado: "+45% productividad" 
  },
  { 
    nombre: "Google", 
    logo: "/logos/empresa2.png", 
    sector: "Software", 
    resultado: "+38% retención" 
  },
  // ... más empresas
];
```

### ⚠️ Notas importantes:
- Los logos se mostrarán en blanco y negro por defecto
- Al hacer hover se mostrarán en color original
- Si un logo no carga, se mostrará un emoji como fallback
- Asegúrate de que los logos tengan buena calidad y sean legibles 