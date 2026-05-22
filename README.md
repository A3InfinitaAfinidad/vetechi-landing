# VETECHI - Hospital Veterinario 🐾

Landing page bilingüe y premium desarrollada para el **Hospital Veterinario VETECHI** en Chiriquí, Panamá. 

## 🚀 Tecnologías Principales

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion (Glassmorphism 3.0, Flip Cards 3D, Latido)
- **Internacionalización (i18n):** `next-intl` (Soporte nativo para Español e Inglés)
- **Rendimiento:** Optimización de imágenes a WebP/AVIF y auditoría de accesibilidad.
- **Iconografía:** Lucide React

## 🌟 Características Destacadas

- **Diseño Institucional Premium:** Interfaz basada en Glassmorphism 3.0 con una paleta de colores de alto contraste (Verde Institucional `#1B3B2F` y Dorado/Beige `#C5A77A`).
- **Soporte Bilingüe (ES/EN):** Sistema de cambio de idioma fluido con enrutamiento automático sin prefijos innecesarios (`as-needed`).
- **Experiencia de Usuario Fluida (UX):** Animaciones suaves de scroll-reveal, tarjetas 3D en servicios y micro-interacciones de hover (ej. el efecto "latido" en emergencias y ubicación).
- **Integración con WhatsApp:** Formulario validado del lado del cliente y CTAs dinámicos con mensajes pre-escritos en ambos idiomas.
- **Rendimiento y Seguridad:** Configuración robusta de Content Security Policy (CSP), Headers de Seguridad estandarizados (HSTS) y etiquetas semánticas SEO.

## 🛠️ Estructura del Proyecto

- `app/`: Contiene la estructura de rutas (`[locale]`) y configuración de Next.js App Router.
- `components/`: Componentes reutilizables de UI (Navbar, Hero, Services, Contact, etc.).
- `public/images/`: Assets y recursos gráficos optimizados (Fotos del equipo, casos, logos, mapa interactivo).
- `utils/`: Constantes y datos estáticos de la clínica (`BUSINESS_DATA`, textos multilingües, parámetros de animación y validaciones).

## 💻 Desarrollo Local

Para correr este proyecto en entorno de desarrollo:

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el servidor:
```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

---

## ☁️ Despliegue en Cloudflare Pages

Este proyecto está optimizado para desplegarse fácilmente en **Cloudflare Pages** aprovechando el Edge Runtime.

### Pasos de Despliegue:

1. Ve a **Workers & Pages** en tu panel de Cloudflare y crea una nueva aplicación de **Pages**.
2. Conecta tu repositorio de GitHub y selecciona este proyecto.
3. Configura el build de la siguiente manera:
   - **Framework preset:** `Next.js`
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
4. **IMPORTANTE - Variables de Entorno:** Expande "Environment variables (advanced)" y añade:
   - `NODE_VERSION` = `20`
5. Haz clic en **Save and Deploy**.

Cloudflare se encargará automáticamente del enrutamiento, la internacionalización (Edge Middleware) y el certificado SSL gratuito.
