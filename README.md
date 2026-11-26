# VETECHI - Hospital Veterinario

Atención veterinaria extendida en David, Chiriquí. La atención presencial es de lunes a sábado, de 8:00 a.m. a 10:00 p.m., y los domingos, de 10:00 a.m. a 3:00 p.m. Después del cierre, las urgencias se atienden únicamente mediante llamada al +507 6330-3291.

## Installation

```bash
npm install
npm run build
npm run preview
```

## Deployment

```bash
npm run build
# El output va a ./out — subir a Cloudflare Pages
```

## i18n

- `/es` — Español
- `/en` — English

## SEO

- Metadatos completos en `app/[locale]/layout.tsx`
- Schema.org JSON-LD (VeterinaryCare + LocalBusiness + Person)
- Sitemap en `/sitemap.xml`
- Robots.txt configurado
