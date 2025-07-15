# Configuración de Email - aliA

## 🚀 Configurar Resend (Gratuito)

### 1. Crear cuenta en Resend
1. Ve a [https://resend.com](https://resend.com)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Obtener API Key
1. Ve a la sección "API Keys"
2. Crea una nueva API key
3. Copia la key (empieza con `re_`)

### 3. Configurar en Vercel
1. Ve a tu proyecto en Vercel
2. Ve a Settings > Environment Variables
3. Agrega:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Tu API key de Resend
   - **Environment**: Production, Preview, Development

### 4. Configurar dominio (Opcional)
Para usar un dominio personalizado:
1. Ve a "Domains" en Resend
2. Agrega tu dominio
3. Configura los registros DNS
4. Cambia el `from` en `/api/contact/route.ts`

## 📧 Funcionamiento

Cuando alguien llene el formulario:
- Se envía un email a `jorgefloresrv@gmail.com`
- El email incluye: nombre, email, mensaje y fecha
- Diseño profesional con el branding de aliA

## 💰 Plan Gratuito
- **1,000 emails/mes gratis**
- **Sin tarjeta de crédito requerida**
- **Excelente deliverability**

## 🔧 Alternativas Gratuitas

Si prefieres otras opciones:

### SendGrid
- 100 emails/día gratis
- Más complejo de configurar

### EmailJS
- 200 emails/mes gratis
- Solo frontend

### Formspree
- 50 submissions/mes gratis
- Muy simple de configurar 