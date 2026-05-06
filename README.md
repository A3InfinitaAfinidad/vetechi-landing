# VETECHI - Hospital Veterinario 🐾

Landing page bilingüe y premium desarrollada para el **Hospital Veterinario VETECHI** en Chiriquí, Panamá. 

## 🚀 Tecnologías Principales

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion (Glassmorphism 3.0, Flip Cards 3D, Latido)
- **Internacionalización (i18n):** `next-intl` (Soporte nativo para Español e Inglés)
- **Iconografía:** Lucide React

## 🌟 Características Destacadas

- **Diseño Institucional Premium:** Interfaz basada en Glassmorphism 3.0 con una paleta de colores de alto contraste (Verde Institucional `#1B3B2F` y Dorado/Beige `#C5A77A`).
- **Soporte Bilingüe (ES/EN):** Sistema de cambio de idioma fluido con enrutamiento automático sin prefijos innecesarios (`as-needed`).
- **Experiencia de Usuario Fluida (UX):** Animaciones suaves de scroll-reveal, tarjetas 3D en servicios y micro-interacciones de hover (ej. el efecto "latido" en emergencias y ubicación).
- **Integración con WhatsApp:** Llamadas a la acción dinámicas preparadas con mensajes pre-escritos en ambos idiomas.
- **Rendimiento y SEO:** Optimizada para cargar rápidamente y rankear bien en motores de búsqueda a través de etiquetas meta y semántica HTML.

## 🛠️ Estructura del Proyecto

- `app/`: Contiene la estructura de rutas (`[locale]`) y configuración de Next.js App Router.
- `components/`: Componentes reutilizables de UI (Navbar, Hero, Services, Contact, etc.).
- `public/images/`: Assets y recursos gráficos (Fotos del equipo, casos, logos, mapa interactivo).
- `utils/`: Constantes y datos estáticos de la clínica (`BUSINESS_DATA`, textos multilingües, parámetros de animación).

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
