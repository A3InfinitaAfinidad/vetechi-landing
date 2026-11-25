# Auditoría web de VETECHI

**Fecha de ejecución:** 23 de noviembre de 2026, 17:48–17:53 (America/Panama)  
**Modo:** solo lectura. No se modificó código de producto ni producción.

## 1. Ficha

| Elemento | Resultado |
|---|---|
| Sitio indicado | <https://vetechi-landing.pages.dev/>; rutas `/es/` y `/en/` |
| Repositorio | <https://github.com/A3InfinitaAfinidad/vetechi-landing> |
| Rama y commit local | `main`, `427da262ca0601d0a559352566b4837e4ba46081` |
| Repositorio remoto | GitHub devolvió como commit más reciente el mismo SHA (`Deploy inicial VETECHI`, 14-09-2026) |
| Estado local | `git status --short` vacío al inicio; árbol de trabajo limpio |
| Stack observado | Next.js 16.2.6, React 18.3.1, TypeScript 5.x declarado, next-intl 4.x, exportación estática, Cloudflare Pages indicado por el dominio |
| Herramientas | PowerShell, Git, Node 24.12.0, npm 11.6.2, `npm ls --depth=0`, GitHub connector, lector web |
| Limitaciones | DNS no resolvió `vetechi-landing.pages.dev` ni `registry.npmjs.org`; no se obtuvieron páginas HTTP ni inspección visual en navegador. No se ejecutaron build/lint porque la copia aislada no pudo enlazar `node_modules` (acceso denegado); no se ejecutó Lighthouse actual. No se encontraron en el repo los cinco documentos de referencia citados por el procedimiento (se recibió únicamente el archivo de instrucciones). |

## 2. Resumen ejecutivo

**Dictamen: Auditoría parcial: evidencia insuficiente.** La revisión estática encontró riesgos institucionales y de conversión que conviene resolver antes de presentar el sitio: afirmaciones sensibles sin evidencia vigente visible, una aparente inconsistencia entre horario regular y urgencias que requiere confirmación, y un formulario que anuncia éxito aunque solo intenta abrir WhatsApp y no transmite el teléfono capturado. También hay desalineación entre dominios declarados para producción, sitemap y metadatos. No fue posible verificar si el sitio publicado funciona o si coincide con este commit.

El principal paso previo a cualquier entrega es confirmar con VETECHI horario real, servicio de urgencias, puntuación/reseñas, equipo, servicios y autorización de testimonios; luego comprobar el sitio en línea desde una red con DNS operativo. No se asigna puntuación: faltan mediciones actuales de producción.

## 3. Estado por dimensión

| Dimensión | Estado | Evidencia y comentario |
|---|---|---|
| Disponibilidad / HTTPS | No verificado | Las solicitudes a raíz, `/es/`, `/en/`, `robots.txt` y `sitemap.xml` fallaron por `Host desconocido`; no es prueba de que el sitio esté caído globalmente. |
| UX / conversión | Atención | Hay CTA de teléfono y WhatsApp; el formulario simula un estado de éxito sin confirmación de envío. |
| UI / marca | No verificado | Sin página cargada ni capturas actuales. El código define secciones e imágenes, no permite validar la apariencia final. |
| Responsive | No verificado | No se inspeccionaron los viewports objetivo. |
| Funcionalidad | Atención | Destinos `tel:`, `wa.me` y Google Maps están declarados en código; no se probaron en producción. Navegación móvil y formulario requieren prueba interactiva. |
| Contenido / confianza | Crítico | Hay afirmaciones 24/7, “único”, 4.8/42 reseñas y testimonios identificados sin evidencia institucional vigente disponible. |
| Bilingüismo | Atención | Existen mensajes ES/EN y rutas localizadas; no se pudo comparar el render. Metadatos son compartidos y varias cadenas se codifican aparte de los JSON. |
| SEO técnico / local | Atención | Sitemap, robots, canonical, hreflang y schema están en el repositorio; usan `vetechi.pa`, mientras la URL de despliegue indicada es `pages.dev`. Efectividad no verificable. |
| Rendimiento / Core Web Vitals | No verificado actualmente | Hay informes locales antiguos del 23-05-2026 (localhost); no representan campo ni estado actual publicado. |
| Accesibilidad | No verificado | No se hizo prueba visual/manual o automatizada. Código incluye etiquetas de formulario y controles con nombres accesibles en parte. |
| Seguridad / dependencias | Atención / No verificado | El repositorio declara cabeceras, CSP y dependencias. No se confirmaron cabeceras servidas. `npm audit --omit=dev` no llegó a consultar el registro. |
| Mantenibilidad / build | Atención | `npm ls --depth=0` completó sin paquetes marcados como inválidos; `eslint-config-next` declarado en versión 14 junto con Next 16. Build/lint pendientes por limitación del entorno. |
| Despliegue / paridad | No verificado | SHA local coincide con el commit más reciente devuelto por GitHub; no se obtuvo SHA/artefacto del deployment de Pages. |
| Confianza veterinaria | Crítico | El horario regular y la cobertura de urgencias podrían ser distintos, pero el sitio no los diferencia con claridad; verificar antes de presentar afirmaciones clínicas/comerciales. |

## 4. Hallazgos priorizados

### VET-001 — Aclarar cómo se relacionan el horario regular y la cobertura de urgencias

- **Severidad / confianza:** P1 Alto / Media (los valores y textos están confirmados en el código; su interpretación requiere confirmación institucional).
- **Área:** Contenido institucional, contacto, SEO local, schema.
- **Ubicación:** [utils/constants.ts](C:/Users/aizpr/vetechi-landing/utils/constants.ts:31), [layout.tsx](C:/Users/aizpr/vetechi-landing/app/[locale]/layout.tsx:89), [messages/es.json](C:/Users/aizpr/vetechi-landing/messages/es.json:11).
- **Evidencia:** `BUSINESS_DATA.hours` dice “Cierra a las 10:00 PM”; el mismo objeto separa un campo de urgencias 24 horas/365 días; schema declara apertura 00:00–23:59; hero y emergencias anuncian atención permanente. Puede tratarse de horario regular y guardia de urgencias distintos, pero la página y schema no lo aclaran de forma consistente.
- **Impacto:** Puede confundir a una persona que busca atención urgente y publicar horarios incompatibles en resultados locales.
- **Causa probable (inferencia):** El horario regular, la guardia y el horario estructurado pueden haberse configurado por separado sin explicar la diferencia.
- **Recomendación:** Solicitar a VETECHI horario regular y protocolo de urgencias por separado. Unificar página, traducciones y schema solo después de confirmación.
- **Esfuerzo:** S.
- **Dependencia:** Confirmación institucional de horario, disponibilidad nocturna y canal de emergencia.
- **Aceptación:** Mismo horario confirmado en contacto, schema y fuentes locales; mensajes de emergencia describen con precisión la cobertura confirmada.

### VET-002 — Formulario muestra éxito sin comprobar que se completó el contacto

- **Severidad / confianza:** P1 Alto / Alta (flujo confirmado en código; experiencia real no reproducida).
- **Área:** Conversión, funcionalidad, privacidad.
- **Ubicación:** [Contact.tsx](C:/Users/aizpr/vetechi-landing/components/Contact.tsx:28), [Contact.tsx](C:/Users/aizpr/vetechi-landing/components/Contact.tsx:56).
- **Evidencia:** El handler compone un mensaje y llama `window.open(whatsappUrl, '_blank')` dentro de un `setTimeout`; luego asigna estado `success` y limpia los campos. No se observa un `fetch`/endpoint. El teléfono obligatorio del formulario no se incluye en el mensaje construido.
- **Impacto:** Un bloqueador de ventanas emergentes o fallo al abrir WhatsApp puede dejar al visitante con una confirmación falsa; el negocio no recibe el teléfono proporcionado.
- **Causa probable (inferencia):** El flujo trata el intento de abrir una aplicación externa como envío confirmado.
- **Recomendación:** Cambiar el microcopy para que confirme únicamente que WhatsApp se abrió, conservar una alternativa visible y añadir el teléfono al mensaje si VETECHI lo aprueba. No anunciar “enviado” sin un sistema que confirme recepción.
- **Esfuerzo:** M.
- **Dependencia:** Decidir si el canal esperado es WhatsApp o un endpoint/formulario; revisar el aviso de privacidad por datos de contacto y motivos clínicos.
- **Aceptación:** Prueba manual documenta resultado con WhatsApp disponible y bloqueado; no se pierde el teléfono; la interfaz no declara recepción cuando no puede confirmarla.

### VET-003 — Rating, cantidad de reseñas y testimonios necesitan fuente y autorización vigentes

- **Severidad / confianza:** P1 Alto / Media (código confirmado; veracidad y consentimiento no verificables).
- **Área:** Contenido, reputación, privacidad, datos estructurados.
- **Ubicación:** [layout.tsx](C:/Users/aizpr/vetechi-landing/app/[locale]/layout.tsx:95), [constants.ts](C:/Users/aizpr/vetechi-landing/utils/constants.ts:39), [Testimonials.tsx](C:/Users/aizpr/vetechi-landing/components/Testimonials.tsx:38), [constants.ts](C:/Users/aizpr/vetechi-landing/utils/constants.ts:185).
- **Evidencia:** Schema declara rating `4.8` y `42` reseñas; el carrusel las llama “verificadas” y publica nombres, ubicación y textos atribuidos a clientes. No se encontró en el entorno evidencia de Google vigente ni consentimiento.
- **Impacto:** Riesgo de reputación, reclamaciones por citas o atribución personal, y datos estructurados obsoletos o no sustentados.
- **Causa probable (inferencia):** Cifras y textos quedaron incorporados sin un mecanismo visible de fecha/fuente/consentimiento.
- **Recomendación:** Obtener URL o exportación vigente de reseñas, fecha de verificación y autorización de cada testimonio. Si falta evidencia, retirar rating/count y datos de reseñas del schema y mostrar solo contenido autorizado.
- **Esfuerzo:** S.
- **Dependencia:** Evidencia de fuente y consentimiento de cada persona citada.
- **Aceptación:** Cada cita publicada tiene fuente y autorización documentadas; cifra y schema coinciden con la fuente en una fecha anotada.

### VET-004 — Afirmaciones absolutas de exclusividad, urgencia y capacidad sin sustento disponible

- **Severidad / confianza:** P1 Alto / Media.
- **Área:** Confianza institucional y contenido veterinario.
- **Ubicación:** [messages/es.json](C:/Users/aizpr/vetechi-landing/messages/es.json:11), [constants.ts](C:/Users/aizpr/vetechi-landing/utils/constants.ts:47), [Emergencies.tsx](C:/Users/aizpr/vetechi-landing/components/Emergencies.tsx:114), [Footer.tsx](C:/Users/aizpr/vetechi-landing/components/Footer.tsx:141).
- **Evidencia:** “Único hospital”, “atención inmediata garantizada”, “especialistas ... en todo momento” y quirófano/laboratorio disponibles 24/7 aparecen como afirmaciones públicas del código. El documento de auditoría adjunto indica expresamente verificarlas antes de publicar. No se halló respaldo institucional vigente en el workspace.
- **Impacto:** Promesas categóricas pueden inducir a error sobre el tiempo de respuesta, especialidades disponibles o capacidad durante toda la noche.
- **Causa probable (inferencia):** Copy comercial fusiona disponibilidad general con atención clínica inmediata.
- **Recomendación:** Validar cada afirmación y sustituir promesas absolutas por descripción precisa de servicios, horarios y limitaciones aprobada por VETECHI.
- **Esfuerzo:** S.
- **Dependencia:** Confirmación escrita institucional; revisión clínica del texto.
- **Aceptación:** Cada afirmación sensible tiene fuente vigente, responsable y fecha de revisión; lo no confirmado se retira antes de presentar.

### VET-005 — Dominio canónico y sitemap pueden apuntar a un dominio distinto al publicado

- **Severidad / confianza:** P2 Medio / Media (declaraciones de configuración confirmadas; dominio de producción no verificable).
- **Área:** SEO técnico/local y despliegue.
- **Ubicación:** [layout.tsx](C:/Users/aizpr/vetechi-landing/app/[locale]/layout.tsx:19), [sitemap.xml](C:/Users/aizpr/vetechi-landing/public/sitemap.xml:1), [robots.txt](C:/Users/aizpr/vetechi-landing/public/robots.txt:5), [_redirects](C:/Users/aizpr/vetechi-landing/public/_redirects:1).
- **Evidencia:** `metadataBase`, canonical y hreflang usan `https://vetechi.pa`; sitemap y robots también; URL de auditoría configurada en las instrucciones es `https://vetechi-landing.pages.dev/`. Canonical estático en el layout no distingue ES/EN; el sitemap enumera `/es` y `/en` sin slash aunque Next configura `trailingSlash: true`. `_redirects` redirige `/` a `/es` con 302.
- **Impacto:** Si Pages es el dominio público temporal o definitivo, buscadores recibirían URLs canónicas del dominio equivocado. ES/EN podrían declarar el mismo canonical.
- **Causa probable (inferencia):** No se sincronizó configuración de dominio entre preview/despliegue y dominio institucional.
- **Recomendación:** Confirmar dominio público principal y definir canonical distinto por locale; probar redirecciones y rutas exportadas después del build.
- **Esfuerzo:** S.
- **Dependencia:** Confirmar dominio de producción con VETECHI y persona responsable de Cloudflare/DNS.
- **Aceptación:** `canonical`, `hreflang`, sitemap, robots y URLs finales apuntan al dominio acordado y resuelven con código esperado.

### VET-006 — CSP declarada no contempla Google Analytics; cabeceras no verificadas en respuesta

- **Severidad / confianza:** P2 Medio / Media.
- **Área:** Seguridad, analítica, despliegue.
- **Ubicación:** [_headers](C:/Users/aizpr/vetechi-landing/public/_headers:1), [layout.tsx](C:/Users/aizpr/vetechi-landing/app/[locale]/layout.tsx:120).
- **Evidencia:** CSP permite scripts de `'self'` y `'unsafe-inline'`, pero no `www.googletagmanager.com`; la página incluye script `gtag` desde ese host e inline. No se pudo confirmar si Cloudflare aplica el archivo ni qué cabeceras envía producción. La misma config declara `connect-src` sin los hosts habituales de Analytics.
- **Impacto:** Si se aplica la política declarada, Analytics puede ser bloqueado; si se ajusta sin pruebas, se puede debilitar innecesariamente CSP.
- **Causa probable (inferencia):** Las reglas CSP y el script analítico se configuraron en momentos distintos.
- **Recomendación:** Comprobar cabeceras en respuesta desde una red accesible y revisar consola CSP; confirmar necesidad de analítica/consentimiento y ajustar allowlist mínima con el modo de exportación probado.
- **Esfuerzo:** M.
- **Dependencia:** Confirmar herramienta de analítica y necesidades de consentimiento.
- **Aceptación:** Cabeceras observadas coinciden con política aprobada; Analytics funciona solo si está autorizado y no genera violaciones CSP inesperadas.

### VET-007 — Versión declarada de `eslint-config-next` desalineada con Next.js

- **Severidad / confianza:** P2 Medio / Media.
- **Área:** Calidad y dependencias.
- **Ubicación:** [package.json](C:/Users/aizpr/vetechi-landing/package.json:32).
- **Evidencia:** `next` declara `^16.2.6`, pero `eslint-config-next` declara `^14.2.15` (instalado localmente `14.2.35`). `npm ls --depth=0` no reportó paquetes inválidos, pero no prueba compatibilidad de reglas/build. No existe script `typecheck` o `test` declarado.
- **Impacto:** Reglas específicas de Next pueden no cubrir el framework actual o dar resultados inesperados.
- **Causa probable (inferencia):** El framework se actualizó sin alinear la configuración de ESLint.
- **Recomendación:** Confirmar compatibilidad con la versión de Next elegida y alinear major de configuración de lint; después correr lint/build en CI.
- **Esfuerzo:** S.
- **Dependencia:** Ninguna externa; validar compatibilidad antes de cambiar.
- **Aceptación:** Lockfile y paquete de lint compatibles; `npm run lint` y build terminan correctamente en un entorno reproducible.

### VET-008 — Menú móvil no expone estado expandido y carrusel no anuncia cambios

- **Severidad / confianza:** P2 Medio / Media (inspección estática; sin prueba de lector de pantalla).
- **Área:** Accesibilidad.
- **Ubicación:** [Navbar.tsx](C:/Users/aizpr/vetechi-landing/components/Navbar.tsx:98), [Testimonials.tsx](C:/Users/aizpr/vetechi-landing/components/Testimonials.tsx:42).
- **Evidencia:** El botón de menú cambia el panel pero solo define `aria-label`; no expone `aria-expanded`/`aria-controls`. El carrusel cambia el contenido por estado sin región viva observada.
- **Impacto:** Usuarios de tecnología asistiva pueden no saber si el menú está abierto o qué testimonio pasó a mostrarse.
- **Causa probable (inferencia):** Interacciones visuales no completaron atributos de estado/nombre accesible.
- **Recomendación:** Añadir estado semántico al botón y evaluar patrón accesible del carrusel con teclado y lector de pantalla.
- **Esfuerzo:** S.
- **Dependencia:** Prueba manual de accesibilidad.
- **Aceptación:** Estado de menú anunciado; navegación completa por teclado; cambio de testimonio comprensible sin depender solo de lo visual.

## 5. UX/UI y responsive

- **Confirmado en código:** Arquitectura con hero, sobre el hospital, servicios, historias, emergencias, testimonios, equipo, tecnología, contacto y footer. La navegación apunta a IDs presentes (`inicio`, `servicios`, `exito`, `equipo`, `emergencias`, `contacto`).
- **No verificable:** Jerarquía visual real, contraste, superposición de menú, recorte de imágenes, overflow, foco visible y controles en tamaños 320×720, 375×812, 390×844, 768×1024, 1024×768, 1366×768 y 1440×900.
- **Siguiente verificación:** Repetir esos viewports cuando la URL resuelva; capturar y revisar teclado, zoom y menú móvil. Ninguno se declara probado en esta ejecución.

## 6. Funcionalidad y conversión

| Elemento | Resultado de código | Estado en producción |
|---|---|---|
| Navegación y anchors | Los enlaces principales coinciden con IDs de secciones. | No probado |
| Idioma | Selector ES/EN cambia prefijo de ruta; existen `messages/es.json` y `messages/en.json`. | No probado; persistencia no observada |
| Teléfono | Se usa `tel:` con `+507 6330-3291`. | Número no confirmado externamente; no se llamó |
| WhatsApp | URL `wa.me/50763303291` con mensajes por idioma y canal. | No probado; no se envió mensaje |
| Formulario | Valida localmente y abre WhatsApp; no hay endpoint visible; omite el teléfono capturado y presenta estado success después del intento. | No se envió formulario |
| Mapa | Botón abre enlace corto de Google Maps; el bloque es una imagen local decorativa, no un iframe interactivo. | No probado |
| Redes y correo | Instagram, Facebook y `info@vetechi.pa` están configurados en constantes. | No probados ni confirmados |

## 7. Contenido e integridad institucional

| Afirmación | Ubicación | Evidencia disponible | Estado | Acción |
|---|---|---|---|---|
| 24/7 y atención 365 días | Hero, emergencias, footer, mensajes, schema | `BUSINESS_DATA.hours` dice “Cierra a las 10:00 PM”; también hay un campo separado de emergencias 24h. Puede ser horario regular más guardia | Pendiente | Confirmar horario regular y cobertura de urgencias; diferenciar ambos |
| “Único” hospital 24 horas de Chiriquí | Hero, emergencia, footer | Solo texto del sitio | No verificable | Confirmar con fuente y autorización; si no, retirar |
| 4+ especialistas / especialistas disponibles siempre | Hero/stats y contenido | Nombres de equipo en constantes, sin credenciales actuales comprobadas | Pendiente | Confirmar profesionales, roles, credenciales y disponibilidad |
| Google 4.8 / 42 reseñas | constants, hero, testimonios, schema | Valor estático, sin enlace/fuente/fecha de extracción | Pendiente | Verificar y fechar o retirar cifra/schema |
| Testimonios con nombres e historias de animales | `constants.ts` | Textos y nombres codificados | Consentimiento no verificable | Obtener consentimiento y fuente; quitar identificadores si no hay autorización |
| Servicios y capacidades (cirugía, laboratorio, cardiología, exóticos, etc.) | `messages/es.json`, `messages/en.json`, componentes | Declaraciones del proyecto, no evidencia clínica | Pendiente | Confirmar cartera real, alcance y disponibilidad por horario |
| “Atención inmediata garantizada” | `Emergencies.tsx` | Copy declarado | No verificable | Sustituir por promesa verificable aprobada |

## 8. Bilingüismo ES/EN

- **Confirmado:** `locales = ['es', 'en']`; hay JSON separado con claves principales paralelas y rutas bajo `[locale]`.
- **Atención:** Metadatos de título, descripción, Open Graph, canonical e idioma están definidos estáticamente en un único layout; `openGraph.locale` queda `es_PA` para ambas versiones. Muchas etiquetas de componentes se escriben con ternarios en TSX, así que no se validan en conjunto por estructura de mensajes.
- **No verificable:** Resultado visual, selector en página anidada, persistencia, idioma final de todos los metadatos y paridad de copy renderizado.
- **Acción:** Generar metadatos por locale, comparar llaves y strings usados, revisar inglés idiomático y probar cambio ES↔EN desde `/privacy` y desde cada landing.

## 9. SEO técnico/local

- `robots.txt` permite todo y anuncia sitemap en `vetechi.pa`.
- Sitemap enumera ES, EN y privacidad; sus rutas no llevan slash final, pese a `trailingSlash: true`.
- Canonical/hreflang del layout están fijos y comparten canonical root para páginas localizadas. Verificar el HTML exportado y el dominio acordado antes de concluir el efecto real.
- JSON-LD incluye dirección, teléfono, horarios 00:00–23:59 y rating/reviews estáticos. Horas/reseñas necesitan confirmación; no se debe mantener structured data no sustentada.
- No se verificaron indexabilidad HTTP, títulos/descripciones renderizados, OG, respuestas de sitemap/robots ni redirecciones.

## 10. Rendimiento / Core Web Vitals

**No hay medición actual del sitio publicado.** El workspace contiene archivos Lighthouse con fecha de obtención local `2026-05-23` y destino `http://localhost:3001/es`:

| Informe histórico | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| móvil | 0.77 | 0.96 | 0.96 | 1.00 | 5.5 s | 0 | 110 ms |
| desktop | 0.98 | 0.96 | 0.96 | 1.00 | 1.0 s | 0 | 0 ms |

Son datos de laboratorio locales y antiguos, no CrUX ni estado actual de producción. No se midieron INP, TTFB, transferencia ni carga actual.

## 11. Accesibilidad

- **Inspección estática:** labels vinculados a los campos principales; botones del carrusel tienen `aria-label`; varias áreas interactivas usan controles nativos.
- **Atención:** falta estado `aria-expanded` en menú móvil; no se observó anuncio de estado para resultados/éxito/error del formulario o cambios del carrusel. Esto requiere confirmación manual.
- **No verificado:** contraste WCAG, orden/foco, teclado, lector de pantalla, movimiento reducido, zoom/reflow, idioma y auditoría automatizada. No se declara conformidad WCAG.

## 12. Seguridad y dependencias

- `_headers` declara `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, CSP, HSTS, `Permissions-Policy` y `Access-Control-Allow-Origin`. Son valores del repositorio, no cabeceras observadas en respuesta.
- CSP tiene `unsafe-inline`; el procedimiento del proyecto advierte no retirarlo sin probar exportación y dependencias. La carga de Analytics no está permitida por la lista `script-src` mostrada.
- `npm ls --depth=0` terminó correctamente con Next 16.2.6, React 18.3.1 y paquetes instalados según el árbol local; no es análisis CVE.
- `npm audit --omit=dev` falló antes de obtener resultados porque `registry.npmjs.org` no resolvió (`ENOTFOUND`). No se ejecutó `npm audit fix`.
- No se encontraron claves/tokens expuestos por búsqueda dirigida a los archivos de aplicación; alcance estático limitado, sin escaneo del historial completo ni del deployment.

## 13. Código y despliegue

- `next.config.js`: exportación estática, `trailingSlash: true`, `images.unoptimized: true`, `next-intl`.
- `package.json` tiene scripts `build`, `lint` y un `audit:full` que combina build, auditoría, Lighthouse local y optimización de imágenes. **No se ejecutó `audit:full`**, pues incluye escritura de imágenes y exige servidor local.
- No hay scripts `test` ni `typecheck` declarados; no se identificó suite automatizada en los manifiestos inspeccionados.
- Build y lint no se ejecutaron: el intento en copia temporal falló al crear junction de `node_modules` (`Acceso denegado`), y la copia sin dependencias no reconoce `next`/`eslint`. No se reporta como fallo del producto.
- GitHub devolvió el mismo SHA que el workspace, pero no se pudo confirmar si Pages está sirviendo ese commit.

## 14. Matriz de cumplimiento de documentos

| Requisito / referencia | Estado | Evidencia |
|---|---|---|
| Landing bilingüe ES/EN | Implementado parcialmente; render no verificable | Configuración locales y mensajes presentes |
| Hero, servicios, urgencias, testimonios, equipo, tecnología, contacto y footer | Implementado en código | `app/[locale]/page.tsx` monta esos componentes |
| Contacto telefónico/WhatsApp/mapa | Implementado en código; no probado | `BUSINESS_DATA` y `Contact.tsx` |
| Formularios funcionales con recepción confirmada | No implementado/verificable | Solo se abre WhatsApp; no hay endpoint visible |
| SEO técnico por idioma | Implementado parcialmente | Sitemap/robots/schema existen; metadatos son compartidos y el dominio necesita confirmación |
| Rendimiento medido actual | No verificable | Informes locales de mayo 2026 no son actuales |
| Seguridad efectiva en hosting | No verificable | Solo se vio configuración `_headers` |
| Datos institucionales confirmados | Requiere confirmación | No se recibió fuente vigente de horarios, reseñas, equipo o consentimiento |
| Contraste con guía, planes y chats históricos citados | No verificable | Esos documentos no se encontraron en el repositorio; no se inventa comparación |

## 15. Plan de acción

| Prioridad | Tarea | Impacto | Esfuerzo | Dependencia | Criterio de aceptación |
|---|---|---|---|---|---|
| P1 | Confirmar horario normal, urgencias, exclusividad y servicios | Seguridad/confianza | S | VETECHI | Evidencia vigente; mensajes y schema consistentes |
| P1 | Corregir el flujo de formulario y mensaje de éxito | Conversión | M | Definir canal de recepción | Sin éxito falso; teléfono transmitido si autorizado; alternativa accesible |
| P1 | Confirmar rating y testimonios; revisar autorizaciones | Reputación/privacidad | S | VETECHI y autores | Fuente fechada y permisos documentados o contenido retirado |
| P1 | Reabrir revisión de producción cuando DNS resuelva | Alcance completo | M | Acceso de red al dominio | HTTP/TLS, HTML, enlaces y siete viewports documentados |
| P2 | Alinear dominio, canonical, hreflang y sitemap | Indexación | S | Dominio primario confirmado | URLs HTTP finales coherentes por idioma |
| P2 | Verificar CSP y cabeceras reales con Analytics | Seguridad/analítica | M | Consentimiento/Analytics definidos | Sin violaciones CSP inesperadas; políticas verificadas en respuesta |
| P2 | Alinear `eslint-config-next` y ejecutar build/lint | Mantenibilidad | S | Entorno reproducible | CI pasa con versiones compatibles |
| P2 | Pruebas manuales de teclado/lector de pantalla | Accesibilidad | M | Sitio accesible | Estado del menú y mensajes/carrusel comprensibles |
| P3 | Añadir automatización reproducible para paridad de traducciones y links internos | Mantenibilidad | M | Ninguna | CI detecta llaves divergentes y anchors rotos |

## 16. Confirmaciones requeridas a VETECHI

1. ¿Cuál es el dominio público canónico: `vetechi.pa` o `vetechi-landing.pages.dev`?
2. ¿El horario general cierra a las 10 PM mientras las emergencias sí se atienden 24/7? ¿Qué número/canal opera en cada franja?
3. ¿Son exactos y actuales “único hospital”, “4+ especialistas”, atención inmediata garantizada, quirófano/laboratorio 24/7 y lista de servicios/especies?
4. ¿Cuál es la fuente y fecha actual de rating 4.8 / 42 reseñas? ¿Existe autorización para publicar reseñas y nombres de clientes?
5. ¿Analytics está autorizado y existe aviso/consentimiento aplicable? ¿El ID `G-VETECHI2026` es el ID activo de propiedad?
6. ¿El formulario debe abrir WhatsApp o enviar a un sistema de recepción? ¿Se autoriza incluir teléfono y motivo en el mensaje externo?

## 17. Dictamen

**Auditoría parcial: evidencia insuficiente.** No hay base para declarar el sitio listo para presentar/entregar porque la URL publicada no resolvió desde este entorno y las confirmaciones institucionales no están disponibles. Hay un flujo P1 de formulario que puede mostrar éxito aunque no confirme recepción, además de una ambigüedad P1 sobre horarios/guardia y afirmaciones de reputación y disponibilidad que deben verificarse. Este dictamen no afirma caída global ni evalúa visualmente la página publicada.

## 18. Anexo: comandos, salidas y referencias

**Comandos ejecutados (lectura o verificación):**

- `git status --short` → vacío; `git branch --show-current` → `main`; `git rev-parse HEAD` → `427da262ca0601d0a559352566b4837e4ba46081`.
- `npm ls --depth=0` → terminó 0; árbol local listado en la ficha. Paquetes instalados localmente, no análisis de vulnerabilidades.
- `npm audit --omit=dev` → error de conectividad: `getaddrinfo ENOTFOUND registry.npmjs.org`; no hubo informe de advisories.
- Solicitudes `Invoke-WebRequest` a raíz, `/es/`, `/en/`, `robots.txt`, `sitemap.xml` de Pages → `Host desconocido. (vetechi-landing.pages.dev:443)`.
- Lector web abrió esas tres rutas → “URL ... is not accessible via this tool”.
- Intento de build/lint desde copia aislada → creación de junction denegada; sin `node_modules` en copia: `next`/`eslint` no reconocidos. Build/lint quedan sin ejecutar.
- Lectura de JSON Lighthouse históricos: `lighthouse-mobile-audit-now.json`, `lighthouse-desktop-audit-now.json`; ambos indican `finalUrl=http://localhost:3001/es` y fecha 23-05-2026.
- Búsqueda de documentos `Landing_Veterinaria_Premium_2026.md`, `implementation_plan.md`, `implementation_2026plan.md`, `implementation23--5-2026_plan.md`, `VETECHI-CHATS.md` y `AGENTS.md` en archivos listados del repo → sin coincidencias.

**Alcance excluido por falta de evidencia:** pruebas reales de enlaces externos, llamada, WhatsApp, formulario, consentimiento, mapa, navegación por teclado, tamaños responsive, cabeceras/TLS servidas, indexación, CrUX y diferencia del deployment respecto al commit.
