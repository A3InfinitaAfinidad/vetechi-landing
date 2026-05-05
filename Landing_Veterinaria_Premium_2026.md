---
# ============================================================
#  VETECHI — LANDING PREMIUM 2026
#  Skill.md · Guía de Diseño y Construcción Bilingüe
#  Hospital Veterinario Chiriquí · David, Panamá
#  Versión: 2.0 · Mayo 2026
# ============================================================

name: vetechi-landing-premium-2026
description: >
  Skill de construcción para la landing page premium bilingüe (ES/EN) de
  VETECHI Hospital Veterinario Chiriquí. Cubre identidad institucional,
  arquitectura de secciones, sistema de diseño, copywriting bilingüe,
  stack técnico y directrices de accesibilidad y SEO local.
version: "2.0"
language: ["es", "en"]
client: VETECHI Clínica Veterinaria Chiriquí
project_type: landing_page_premium
output_format: ["HTML", "React/Next.js", "TailwindCSS"]
license: Confidencial — Uso exclusivo VETECHI 2026

# ── DATOS INSTITUCIONALES ──────────────────────────────────
business:
  nombre_oficial: "Hospital Veterinario Chiriquí – VETECHI"
  nombre_comercial: "VETECHI"
  slogan_es: "¡Tu mejor amigo merece lo mejor!"
  slogan_en: "Your best friend deserves the best!"
  categoria: "Hospital Veterinario / Veterinary Hospital"
  pais: Panamá
  provincia: Chiriquí
  ciudad: David
  direccion_es: "Diagonal a Farmacia Liz, Antigua Vía a Boquete, David, Chiriquí, Panamá"
  direccion_en: "Diagonal to Farmacia Liz, Old Boquete Road, David, Chiriquí, Panama"
  referencia_geo: "FH5H+CQ David, Panamá"
  google_maps: "https://maps.app.goo.gl/S9VeaqRXJSKkZZrR8"
  telefono: "+507 6330-3291"
  whatsapp: "+507 6330-3291"
  horario_es: "Lunes a Sábado · Cierra a las 10:00 PM | Emergencias 24/7"
  horario_en: "Monday to Saturday · Closes at 10:00 PM | Emergencies 24/7"
  emergencias: "24 horas / 7 días / 365 días"
  instagram: "@VETECHI"
  facebook: "VETECHI – Clínica Veterinaria"
  google_rating: 4.8
  total_reviews: 42

# ── SISTEMA DE COLORES ─────────────────────────────────────
colors:
  verde_institucional: "#2E7D32"   # Primary — CTAs, headers, trust
  verde_oscuro:        "#1B3B2F"   # Dark backgrounds, hero overlay
  beige_calido:        "#C5A77A"   # Warm accent — premium feel
  gris_neutro:         "#4F4F4F"   # Body text
  blanco:              "#FFFFFF"   # Backgrounds, cards
  rojo_urgencia:       "#C0392B"   # Emergency sections ONLY
  verde_claro:         "#E8F5E9"   # Light backgrounds, subtle sections
  sombra_card:         "rgba(30,59,47,0.12)"

# ── TIPOGRAFÍA ─────────────────────────────────────────────
typography:
  display:  "Poppins"          # Bold 700/800 — títulos hero
  heading:  "Montserrat"       # SemiBold 600 — subtítulos
  body:     "Open Sans"        # Regular 400 — texto corrido
  mono:     "JetBrains Mono"   # Datos técnicos / códigos
  fallback: "Calibri, Arial, sans-serif"
  google_fonts_url: >
    https://fonts.googleapis.com/css2?
    family=Poppins:wght@400;600;700;800&
    family=Montserrat:wght@500;600&
    family=Open+Sans:wght@400;500&display=swap

# ── STACK TÉCNICO ──────────────────────────────────────────
stack:
  frontend: ["React 18", "Next.js 14 (App Router)", "TypeScript", "TailwindCSS 3"]
  animations: ["Framer Motion 11", "CSS scroll-timeline", "Intersection Observer API"]
  components: ["shadcn/ui", "Aceternity UI", "Radix UI"]
  seo: ["schema.org LocalBusiness", "OpenGraph", "Twitter Cards", "sitemap.xml"]
  performance: ["Image next/image", "lazy loading", "Core Web Vitals 95+"]
  i18n: ["next-intl", "locale: ['es','en']", "defaultLocale: 'es'"]
  deploy: ["Vercel", "edge functions", "ISR"]
  analytics: ["Google Analytics 4", "Meta Pixel"]

# ── ARQUITECTURA I18N ──────────────────────────────────────
i18n:
  strategy: "URL prefix — /es/ y /en/"
  default_locale: "es"
  supported: ["es", "en"]
  switcher_position: "navbar top-right"
  switcher_style: "flag + code (🇵🇦 ES | 🇺🇸 EN)"
  note_en: >
    English version targets expats and tourists living in or visiting
    Chiriquí. Tone must be warm, professional, and confidence-inspiring.
    Avoid overly formal British English; use accessible American English.
---

# VETECHI · Landing Premium 2026
## Guía de Diseño y Skill de Construcción Bilingüe / Bilingual Design & Build Skill

> **Propósito de este documento / Purpose of this document:**
> Define la arquitectura completa, sistema visual, copywriting bilingüe
> (ES/EN) y lógica de construcción de la landing premium de VETECHI.
> Úsalo como skill de referencia en cualquier herramienta de IA generativa.

---

## 0 · FILOSOFÍA DE DISEÑO / DESIGN PHILOSOPHY

### Español
La landing de VETECHI no es un sitio web genérico. Es la primera
impresión digital de un hospital veterinario que compite con estándares
internacionales en el corazón de Chiriquí. Cada píxel debe transmitir:

**Confianza médica + Calidez humana + Urgencia disponible + Excelencia**

El diseño es **premium institucional con alma emocional**: limpio,
moderno, con fotografías cálidas de mascotas y médicos, y una jerarquía
visual que guía al visitante — en segundos — a agendar una cita o llamar
en emergencia.

### English
VETECHI's landing is not a generic website. It's the digital first
impression of a veterinary hospital competing with international
standards in the heart of Chiriquí. Every pixel must convey:

**Medical trust + Human warmth + Always-available urgency + Excellence**

The design is **premium institutional with emotional soul**: clean,
modern, with warm photographs of pets and doctors, and a visual
hierarchy that guides visitors — within seconds — to book an appointment
or call in an emergency.

---

## 1 · SISTEMA DE DISEÑO / DESIGN SYSTEM

### 1.1 Variables CSS Globales / Global CSS Variables

```css
:root {
  /* Brand Colors */
  --color-primary:       #2E7D32;  /* Verde institucional */
  --color-primary-dark:  #1B3B2F;  /* Verde oscuro */
  --color-accent:        #C5A77A;  /* Beige cálido */
  --color-text:          #4F4F4F;  /* Gris neutro */
  --color-bg:            #FFFFFF;
  --color-bg-soft:       #F7F9F7;
  --color-emergency:     #C0392B;  /* SOLO sección urgencias */
  --color-green-light:   #E8F5E9;

  /* Typography */
  --font-display: 'Poppins', sans-serif;
  --font-heading: 'Montserrat', sans-serif;
  --font-body:    'Open Sans', sans-serif;

  /* Spacing Scale (4px base) */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  32px;
  --space-xl:  64px;
  --space-2xl: 128px;

  /* Radius */
  --radius-sm:   8px;
  --radius-md:   16px;
  --radius-lg:   24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card:   0 4px 24px rgba(30,59,47,0.10);
  --shadow-hover:  0 8px 40px rgba(30,59,47,0.18);
  --shadow-cta:    0 4px 16px rgba(46,125,50,0.35);

  /* Transitions */
  --transition-fast:   150ms ease;
  --transition-base:   300ms cubic-bezier(.4,0,.2,1);
  --transition-slow:   600ms cubic-bezier(.4,0,.2,1);
}
```

### 1.2 Componentes Clave / Key Components

#### Botón CTA Principal / Primary CTA Button
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.02em;
  box-shadow: var(--shadow-cta);
  transition: var(--transition-base);
}
.btn-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(46,125,50,0.45);
}
```

#### Botón Emergencia / Emergency Button
```css
.btn-emergency {
  background: var(--color-emergency);
  color: white;
  /* Pulso animado para urgencia */
  animation: pulse-emergency 2s infinite;
}
@keyframes pulse-emergency {
  0%, 100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.5); }
  50%       { box-shadow: 0 0 0 12px rgba(192,57,43,0); }
}
```

#### Tarjeta de Servicio / Service Card
```css
.service-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(46,125,50,0.08);
  transition: var(--transition-base);
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
  border-color: var(--color-primary);
}
```

### 1.3 Efectos Visuales / Visual Effects

```css
/* Glassmorphism — para stats bar sobre hero */
.glass-bar {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: var(--radius-md);
}

/* Hero overlay — verde oscuro con textura */
.hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(27,59,47,0.88) 0%,
    rgba(46,125,50,0.72) 60%,
    rgba(197,167,122,0.30) 100%
  );
}

/* Sección con patrón de patas — decorativo */
.paw-pattern-bg {
  background-image: url("data:image/svg+xml,..."); /* SVG pata de perro */
  background-repeat: repeat;
  opacity: 0.04;
}
```

---

## 2 · ARQUITECTURA DE SECCIONES / SECTION ARCHITECTURE

La landing tiene **8 secciones** + Navbar sticky + Footer.
Flujo UX: Impacto → Confianza → Servicios → Urgencia → Prueba social → Equipo → Tecnología → Contacto

---

### SECCIÓN 1 · HERO PRINCIPAL / MAIN HERO

**Propósito:** Impacto inmediato. El visitante debe entender en 3 segundos:
quiénes son, qué ofrecen, y cómo contactarlos.

#### Copy Bilingüe / Bilingual Copy

| Elemento | Español | English |
|----------|---------|---------|
| **Headline** | Tu mascota merece atención veterinaria de excelencia | Your pet deserves world-class veterinary care |
| **Subheadline** | Hospital Veterinario con 4 especialistas, disponibles 24/7 en David, Chiriquí | Veterinary Hospital with 4 specialists, available 24/7 in David, Chiriquí |
| **CTA Principal** | 📅 Agendar Cita | 📅 Book Appointment |
| **CTA Emergencia** | 🚨 Emergencia 24/7 | 🚨 Emergency 24/7 |
| **Trust badge** | ⭐ 4.8 · 42 reseñas en Google | ⭐ 4.8 · 42 Google reviews |

#### Stats Bar (glassmorphism sobre hero):
| Ícono | ES | EN |
|-------|----|----|
| 🩺 | 4+ Especialistas | 4+ Specialists |
| ⭐ | 4.8 Google | 4.8 Google |
| 🕐 | Emergencias 24/7 | Emergencies 24/7 |
| 💉 | Pequeñas y Grandes Especies | Small & Large Animals |

#### Directrices visuales:
- Imagen de fondo: fotografía premium de mascota con veterinario sonriente
- Overlay: `hero-overlay` (verde oscuro con gradiente)
- Navbar transparente al inicio, sólida al scroll (sticky)
- Animación de entrada: fade-up staggered (0.1s delay por elemento)
- Selector de idioma visible: `🇵🇦 ES | 🇺🇸 EN`

---

### SECCIÓN 2 · SOBRE NOSOTROS / ABOUT US

**Propósito:** Construir confianza con humanidad y credenciales.

#### Copy Bilingüe

**ES:**
> *"Detrás de cada consulta, tratamiento y caricia a nuestros pacientes
> peludos, hay un equipo apasionado que ama lo que hace. En VETECHI
> somos más que una clínica — somos el aliado de confianza de tu familia
> y tus animales en Chiriquí."*

**EN:**
> *"Behind every consultation, treatment, and gentle touch to our furry
> patients, there's a passionate team that loves what they do. At VETECHI,
> we're more than a clinic — we're your family's trusted partner for
> animal care in Chiriquí."*

#### Pilares Institucionales / Institutional Pillars:

| Ícono | ES | EN |
|-------|----|----|
| ❤️ | Atención con Amor | Care with Love |
| 🏆 | Excelencia Técnica | Technical Excellence |
| 🕐 | Disponibilidad 24/7 | 24/7 Availability |
| 🔬 | Tecnología Moderna | Modern Technology |
| 🤝 | Transparencia Total | Full Transparency |
| 🌱 | Compromiso con la Vida | Commitment to Life |

**Layout:** Split layout — texto izquierda, imagen equipo derecha.
Hito destacado: **"Ahora somos Hospital Veterinario"** / **"Now a full Veterinary Hospital"** (badge especial, color acento beige).

---

### SECCIÓN 3 · SERVICIOS / SERVICES

**Propósito:** Mostrar amplitud y especialización. Grid de tarjetas premium.

#### Servicios Principales (Tarjetas) / Main Services (Cards):

| Ícono | Servicio ES | Service EN |
|-------|-------------|------------|
| 🩺 | Consulta General | General Consultation |
| 🚨 | Emergencias 24/7 | Emergencies 24/7 |
| ✂️ | Cirugía Especializada | Specialized Surgery |
| 💉 | Vacunación y Desparasitación | Vaccination & Deworming |
| 🔬 | Laboratorio Clínico | Clinical Laboratory |
| 🏥 | Hospitalización | Hospitalization |
| 💊 | Farmacia Veterinaria | Veterinary Pharmacy |
| 🫀 | Cardiología Veterinaria | Veterinary Cardiology |
| 📷 | Diagnóstico por Imagen | Imaging Diagnostics |
| 🦷 | Odontología Veterinaria | Veterinary Dentistry |
| 🐇 | Especies Exóticas | Exotic Species |
| 🌐 | Telemedicina | Telemedicine |
| 🐴 | Grandes Especies | Large Animals |
| ✈️ | Permisología de Viaje | Travel Permits |
| 💆 | Fisioterapia | Physiotherapy |
| ☀️ | Pasadía / Guardería | Day Care |

**Layout recomendado:** Grid 4 columnas (desktop) → 2 (tablet) → 1 (mobile).
Cada card: ícono grande + título + descripción corta + hover con color primario.

---

### SECCIÓN 4 · URGENCIAS / EMERGENCIES

**Propósito:** El bloque de mayor urgencia. Debe generar acción inmediata.

**Estilo:** Fondo oscuro (`--color-primary-dark`) o rojo emergencia.
Botón de llamada con animación `pulse-emergency`.

#### Copy Bilingüe

| Elemento | Español | English |
|----------|---------|---------|
| **Título** | ¿Tu mascota tiene una emergencia? | Is your pet having an emergency? |
| **Subtítulo** | Estamos disponibles las 24 horas, los 7 días de la semana, los 365 días del año. No esperes — cada minuto cuenta. | We're available 24 hours a day, 7 days a week, 365 days a year. Don't wait — every minute counts. |
| **CTA** | 📞 Llamar Ahora: +507 6330-3291 | 📞 Call Now: +507 6330-3291 |
| **WhatsApp** | 💬 WhatsApp de Emergencia | 💬 Emergency WhatsApp |
| **Indicadores** | 🔴 EN LÍNEA AHORA | 🔴 ONLINE NOW |

#### Casos de emergencia listados / Emergency cases listed:
- ES: Accidentes · Envenenamientos · Convulsiones · Dificultad respiratoria · Partos complicados
- EN: Accidents · Poisoning · Seizures · Breathing difficulties · Difficult births

---

### SECCIÓN 5 · TESTIMONIOS / TESTIMONIALS

**Propósito:** Prueba social — 4.8⭐ Google con 42 reseñas.

#### Reseñas Verificadas / Verified Reviews:

**Review 1 — Quiel Barrios** ⭐⭐⭐⭐⭐
- ES: *"Buen trato al paciente, el Dr. Juan José Gallardo muy profesional. Cubren cualquier emergencia las 24 horas 7 días a la semana. Atendieron a mi chihuahua mini toy Candy en una emergencia. Todo bien, gracias a Dios."*
- EN: *"Great care for the patient, Dr. Juan José Gallardo very professional. They cover any emergency 24 hours, 7 days a week. They treated my mini toy chihuahua Candy in an emergency. All good, thank God."*

**Review 2 — L R** ⭐⭐⭐⭐⭐
- ES: *"Los veterinarios y el personal son excelentes. Mi perro tuvo una grave úlcera ocular y hasta me atendieron el día de Navidad para tratarla."*
- EN: *"The vets and staff here are great! My dog had a very bad eye ulcer and they even squeezed me in on Christmas Day to treat it."*

**Review 3 — Tracey de la Coliniere** ⭐⭐⭐⭐⭐
- ES: *"Solo he tenido un servicio excelente de los veterinarios aquí. Todos han sido muy serviciales y tienen la mayoría de los medicamentos en stock."*
- EN: *"I have only had excellent service from the vets here. Everybody has been very helpful and they stock most medications."*

**Layout:** Carrusel premium con autoplay suave, estrellas visuales, foto avatar placeholder, badge de verificación Google.

---

### SECCIÓN 6 · EQUIPO MÉDICO / MEDICAL TEAM

**Propósito:** Humanizar la clínica. Los médicos son el diferenciador.

#### Perfiles del Equipo / Team Profiles:

| Doctor/a | Especialidad ES | Specialty EN | Frase |
|----------|-----------------|--------------|-------|
| **Dr. Harmodio Arcia** | Medicina General y Equinos | General Medicine & Equine | *"¡Vamo' pa' encima!"* / *"Let's get it done!"* |
| **Dra. Kate Hernández** | Ortopedia y Cirugía | Orthopedics & Surgery | *"La vida es movimiento, el movimiento es vida."* / *"Life is movement, movement is life."* |
| **Dra. Arantxa Santamaría** | Medicina General y Endoscopía | General Medicine & Endoscopy | *"Para llegar más lejos, debemos estar dispuestos a evolucionar."* / *"To go further, we must be willing to evolve."* |
| **Dr. Juan José Gallardo** | Grandes Especies | Large Animal Medicine | *"Un día a la vez, pero continúa."* / *"One day at a time, but keep going."* |

#### Especialistas Visitantes / Visiting Specialists:
- **Dra. Karla Canto** — Cardiología / Cardiology
- **Dra. Danitza Orozco** — Cardiología / Cardiology
- **Dra. Annette Sarsanedas** — Especies Exóticas / Exotic Species

**Layout:** Grid 4 tarjetas en desktop (foto + nombre + especialidad + frase).
Badge "Especialista Visitante" / "Visiting Specialist" para las jornadas.

---

### SECCIÓN 7 · TECNOLOGÍA / TECHNOLOGY

**Propósito:** Demostrar que VETECHI tiene equipamiento de nivel hospital.

#### Módulos Tecnológicos / Technology Modules:

| Ícono | ES | EN |
|-------|----|----|
| 🔬 | Laboratorio in-house — Resultados Express | In-house Lab — Express Results |
| 🫀 | Cardiología Digital — ECG + Ecocardiografía | Digital Cardiology — ECG + Echocardiography |
| 📷 | Radiografía Digital Alta Resolución | High-Resolution Digital X-Ray |
| 🔭 | Endoscopía Minimamente Invasiva | Minimally Invasive Endoscopy |
| 💻 | Monitoreo Anestésico Digital | Digital Anesthesia Monitoring |
| 📋 | Historia Clínica Digital | Digital Medical Records |
| 📊 | Ultrasonido Diagnóstico | Diagnostic Ultrasound |
| ⚡ | Pruebas Rápidas: Parvovirus, Distemper, Ehrlichia, FeLV | Rapid Tests: Parvovirus, Distemper, Ehrlichia, FeLV |

**Layout:** Grid de módulos con iconografía lineal verde, fondo suave (`--color-green-light`).

---

### SECCIÓN 8 · CONTACTO Y UBICACIÓN / CONTACT & LOCATION

**Propósito:** Eliminar fricción. El visitante debe poder contactar en 1 clic.

#### Elementos Requeridos / Required Elements:

- Google Maps embed (iframe responsivo)
- Formulario bilingüe de contacto:
  - Nombre / Name
  - Teléfono / Phone
  - Nombre de mascota / Pet's name
  - Especie / Species (perro/gato/exótico/grande / dog/cat/exotic/large)
  - Motivo de consulta / Reason for visit
  - Idioma preferido / Preferred language (ES/EN)
  - Botón: "Enviar / Send"
- Botón WhatsApp flotante (fijo en pantalla)
- Botón de llamada rápida móvil (`tel:+50763303291`)
- Dirección con enlace a Maps
- Horario completo

#### Copy de Contacto / Contact Copy:

| Elemento | ES | EN |
|----------|----|----|
| Título | ¿Listo para cuidar a tu mascota? | Ready to care for your pet? |
| Subtítulo | Agenda tu cita o visítanos. Siempre habrá alguien esperándote. | Book your appointment or visit us. Someone will always be here for you. |
| Dirección label | 📍 Cómo llegarnos | 📍 How to find us |
| Horario label | 🕐 Horario de Atención | 🕐 Opening Hours |

---

## 3 · NAVBAR Y FOOTER

### Navbar — Bilingüe / Bilingual
```
Logo VETECHI | [Inicio/Home] [Servicios/Services] [Equipo/Team]
              [Urgencias/Emergencies] [Contacto/Contact]
              [🇵🇦 ES | 🇺🇸 EN]  [📞 +507 6330-3291]
```
- Sticky con scroll
- Transparente en hero → sólida verde oscuro al bajar
- CTA de teléfono siempre visible en desktop

### Footer
```
Logo + Isotipo VETECHI
[Ícono Instagram] [Ícono Facebook] [Ícono WhatsApp]
Dirección | Teléfono | Horario
Slogan bilingüe: "¡Tu mejor amigo merece lo mejor!" / "Your best friend deserves the best!"
© 2026 VETECHI Hospital Veterinario Chiriquí · Todos los derechos reservados
```

---

## 4 · SEO LOCAL / LOCAL SEO

### Schema.org LocalBusiness (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "VETECHI Hospital Veterinario Chiriquí",
  "alternateName": "VETECHI Clínica Veterinaria",
  "url": "https://vetechi.pa",
  "telephone": "+50763303291",
  "openingHours": "Mo-Sa 08:00-22:00",
  "availableLanguage": ["Spanish", "English"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Antigua Vía a Boquete, diagonal a Farmacia Liz",
    "addressLocality": "David",
    "addressRegion": "Chiriquí",
    "addressCountry": "PA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "8.427",
    "longitude": "-82.431"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "42"
  },
  "specialOpeningHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "description": "Emergency 24/7",
    "opens": "00:00",
    "closes": "23:59"
  }
}
```

### Meta Tags Bilingües / Bilingual Meta Tags
```html
<!-- Español -->
<title>VETECHI | Hospital Veterinario Chiriquí — Emergencias 24/7 · David, Panamá</title>
<meta name="description" content="Hospital Veterinario en David, Chiriquí. Emergencias 24/7, cirugía especializada, cardiología, laboratorio y más. ⭐ 4.8 en Google · +507 6330-3291">

<!-- English -->
<title>VETECHI | Veterinary Hospital Chiriquí — 24/7 Emergencies · David, Panama</title>
<meta name="description" content="Veterinary Hospital in David, Chiriquí, Panama. 24/7 emergencies, specialized surgery, cardiology, lab & more. ⭐ 4.8 on Google · +507 6330-3291">

<!-- Hreflang -->
<link rel="alternate" hreflang="es" href="https://vetechi.pa/es/" />
<link rel="alternate" hreflang="en" href="https://vetechi.pa/en/" />
<link rel="alternate" hreflang="x-default" href="https://vetechi.pa/" />
```

---

## 5 · ACCESIBILIDAD / ACCESSIBILITY

- Contraste mínimo WCAG 2.1 AA en todos los textos
- `aria-label` en todos los botones de acción
- Skip-to-content link para lectores de pantalla
- `alt` descriptivo bilingüe en todas las imágenes
- `lang="es"` / `lang="en"` en el elemento `<html>` según locale
- Focus visible en todos los elementos interactivos
- Tamaño mínimo de tap target: 44×44px (mobile)

---

## 6 · ANIMACIONES RECOMENDADAS / RECOMMENDED ANIMATIONS

```
1. Hero entrance: fade-up + stagger (título → subtítulo → CTAs → stats)
2. Stats bar: contador numérico animado (0 → 4.8, 0 → 42, etc.)
3. Service cards: fade-in on scroll con Intersection Observer
4. Emergency button: pulse animation permanente
5. Testimonials carousel: smooth autoplay, pausa en hover
6. Team cards: flip al hover (frente: foto · reverso: frase)
7. Tech modules: línea de progreso animada al entrar en viewport
8. WhatsApp button: bounce de entrada + shake suave cada 8s
9. Navbar: cambio de opacidad y color al scroll (framer motion)
10. Language switcher: fade crossfade entre idiomas
```

---

## 7 · CHECKLIST DE PRODUCCIÓN / PRODUCTION CHECKLIST

### Pre-lanzamiento / Pre-launch
- [ ] Textos revisados en ambos idiomas (ES/EN)
- [ ] Imágenes optimizadas (WebP, max 200KB hero)
- [ ] Google Maps embed funcional
- [ ] WhatsApp link activo: `https://wa.me/50763303291`
- [ ] Formulario conectado (Formspree / EmailJS / API)
- [ ] Schema.org validado con Google Rich Results Test
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Responsive en: 320px / 768px / 1024px / 1440px
- [ ] Prueba en Chrome, Safari, Firefox, Edge
- [ ] Prueba en iOS Safari y Android Chrome
- [ ] Analytics activado (GA4 + Meta Pixel)

### Datos pendientes del cliente / Pending client data
- [ ] Fotografías profesionales equipo médico
- [ ] Fotos instalaciones interior y exterior
- [ ] Galería antes/después de casos clínicos
- [ ] Testimonios en video (opcional)
- [ ] Logo vectorial en SVG/AI
- [ ] Horario exacto de atención general confirmado
- [ ] Lista de precios / paquetes (si se desea publicar)

---

*Documento generado para uso exclusivo de VETECHI Hospital Veterinario Chiriquí.*
*© 2026 VETECHI · David, Chiriquí, Panamá · +507 6330-3291*
