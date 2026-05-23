# VETECHI - Hospital Veterinario 🐾

Landing page bilingüe y premium desarrollada para el **Hospital Veterinario VETECHI** en Chiriquí, Panamá. Diseño "Pro Max 2026" con tipografía premium, prueba social integrada y seguridad endurecida.

## 🚀 Tecnologías Principales

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS
- **Tipografía:** Outfit (headings) + Inter (body) — premium, moderna y legible
- **Animaciones:** Framer Motion (Glassmorphism 3.0, Flip Cards 3D, Latido)
- **Internacionalización (i18n):** `next-intl` (Soporte nativo para Español e Inglés)
- **Rendimiento:** Optimización de imágenes a WebP/AVIF y auditoría de accesibilidad.
- **Iconografía:** Lucide React

## 🌟 Características Destacadas

- **Diseño Institucional Premium:** Interfaz basada en Glassmorphism 3.0 con una paleta de colores de alto contraste (Verde Institucional `#1B3B2F` y Dorado/Beige `#C5A77A`).
- **Prueba Social en el Hero:** Rating de Google (⭐ 4.8/5, 42 reseñas) visible above the fold junto al CTA principal.
- **CTAs Diferenciados:** Botón principal "Agendar Cita" con efecto shine premium y botón secundario "Emergencia 24/7" en estilo ghost con icono pulsante.
- **Soporte Bilingüe (ES/EN):** Sistema de cambio de idioma fluido con enrutamiento automático sin prefijos innecesarios (`as-needed`).
- **Experiencia de Usuario Fluida (UX):** Animaciones suaves de scroll-reveal, tarjetas 3D en servicios y micro-interacciones de hover (ej. el efecto "latido" en emergencias y ubicación).
- **Agendador (Booking Preview):** Formulario de contacto avanzado con selección de "Fecha Preferida" y "Hora (Aprox)", que pre-formatea mensajes intencionales listos para WhatsApp.
- **Accesibilidad (A11y) y Rendimiento:** LCP optimizado con imágenes AVIF y `fetchPriority="high"`. Formularios semánticos y botones del carrusel ampliados para cumplir con métricas AAA y Mobile Tap Targets.
- **Rendimiento y Seguridad:** CSP estricto (`frame-ancestors 'none'`, sin `unsafe-eval`), HSTS, etiquetas semánticas SEO y sitemap con rutas i18n válidas. `npm audit` con 0 vulnerabilidades.

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
