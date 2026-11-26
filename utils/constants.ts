export const BUSINESS_DATA = {
  name: 'VETECHI',
  fullName: 'Hospital Veterinario Chiriquí',
  phone: '+507 6330-3291',
  phoneHref: 'tel:+50763303291',
  whatsapp: 'https://wa.me/50763303291',
  whatsappMessages: {
    appointment: {
      es: 'Hola VETECHI, me gustaría agendar una cita para mi mascota.',
      en: 'Hello VETECHI, I would like to book an appointment for my pet.',
    },
    info: {
      es: 'Hola VETECHI, necesito información sobre sus servicios.',
      en: 'Hello VETECHI, I need information about your services.',
    },
  },
  address: {
    es: 'Antigua Vía a Boquete, diagonal a Farmacia Liz, antes de llegar a Game Park, David, Chiriquí, Panamá',
    en: 'Old Boquete Road, diagonal to Farmacia Liz, before Game Park, David, Chiriquí, Panama',
  },
  googleMaps: 'https://maps.app.goo.gl/S9VeaqRXJSKkZZrR8',
  geoReference: 'FH5H+CQ David, Panamá',
  social: {
    instagram: 'https://www.instagram.com/vetechic4?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    facebook: 'https://facebook.com/vetechipa',
  },
  hours: {
    es: [
      'Lunes a sábado: 8:00 a.m. – 10:00 p.m.',
      'Domingos: 10:00 a.m. – 3:00 p.m.',
    ],
    en: [
      'Monday to Saturday: 8:00 AM – 10:00 PM.',
      'Sunday: 10:00 AM – 3:00 PM.',
    ],
  },
  afterHoursEmergency: {
    es: 'Fuera del horario presencial, llama al +507 6330-3291 por una urgencia.',
    en: 'After in-person hours, call +507 6330-3291 for emergencies.',
  },
  googleRating: {
    stars: 4.8,
    reviews: 42,
  },
};

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://vetechi-landing.pages.dev').replace(/\/+$/, '');

export const SHOW_GOOGLE_RATING = true;

export const HOURS_ROWS = {
  es: [
    { day: 'Lunes a sábado', time: '8:00 a.m. – 10:00 p.m.' },
    { day: 'Domingos', time: '10:00 a.m. – 3:00 p.m.' },
  ],
  en: [
    { day: 'Monday to Saturday', time: '8:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 3:00 PM' },
  ],
};

export const HERO_COPY = {
  es: {
    headline: 'Atención veterinaria extendida en David, Chiriquí.',
    subheadline: 'En VETECHI brindamos atención veterinaria presencial durante horarios extendidos para cuidar la salud y el bienestar de tus mascotas.',
    cta1: 'Contactar por WhatsApp',
    cta2: 'Llamar por urgencia',
  },
  en: {
    headline: 'Extended veterinary care in David, Chiriquí.',
    subheadline: 'At VETECHI, we provide extended in-person veterinary care to support the health and well-being of your pets.',
    cta1: 'Contact us on WhatsApp',
    cta2: 'Call for an emergency',
  },
};

export const STATS = {
  es: [
    { icon: 'Stethoscope', label: '4+ Especialistas', value: '4+' },
    { icon: 'Star', label: 'Valoración Google', value: '4.8' },
    { icon: 'PawPrint', label: 'Todas las Especies', value: 'Todas' },
  ],
  en: [
    { icon: 'Stethoscope', label: '4+ Specialists', value: '4+' },
    { icon: 'Star', label: 'Google Rating', value: '4.8' },
    { icon: 'PawPrint', label: 'All Species', value: 'All' },
  ],
};


export const ABOUT_COPY = {
  es: {
    title: 'Sobre Nosotros',
    description:
      'Somos más que una clínica. Somos el aliado de confianza de tu familia y tus animales en Chiriquí. Detrás de cada consulta y tratamiento hay un equipo apasionado que ama profundamente su trabajo. Recientemente dimos un paso histórico: ahora somos Hospital Veterinario, con instalaciones modernas y equipamiento especializado para brindarte un nivel de atención superior.',
    values: [
      { icon: '❤️', title: 'Atención con Amor', subtitle: 'Care with Love' },
      { icon: '🏆', title: 'Excelencia Técnica', subtitle: 'Technical Excellence' },
      { icon: '🕐', title: 'Horario extendido', subtitle: 'Extended hours' },
      { icon: '🔬', title: 'Tecnología Moderna', subtitle: 'Modern Technology' },
      { icon: '🤝', title: 'Transparencia', subtitle: 'Transparency' },
      { icon: '🌱', title: 'Compromiso', subtitle: 'Commitment' },
    ],
  },
  en: {
    title: 'About Us',
    description:
      'We are more than a clinic. We are your family\'s trusted partner for animal health in Chiriquí. Behind every consultation and treatment, there\'s a passionate team that genuinely loves what they do. We recently reached a milestone: we are now a full Veterinary Hospital, with modern facilities and specialized equipment to deliver a higher level of care.',
    values: [
      { icon: '❤️', title: 'Care with Love', subtitle: 'Atención con Amor' },
      { icon: '🏆', title: 'Technical Excellence', subtitle: 'Excelencia Técnica' },
      { icon: '🕐', title: 'Extended hours', subtitle: 'Horario extendido' },
      { icon: '🔬', title: 'Modern Technology', subtitle: 'Tecnología Moderna' },
      { icon: '🤝', title: 'Transparency', subtitle: 'Transparencia' },
      { icon: '🌱', title: 'Commitment', subtitle: 'Compromiso' },
    ],
  },
};

export const SERVICES = {
  es: [
    { icon: '🔍', title: 'Consulta General', description: 'Evaluación completa de tu mascota por nuestros especialistas' },
    { icon: '🚨', title: 'Urgencias', description: 'Atención presencial durante el horario de atención; fuera de horario, llamar al +507 6330-3291' },
    { icon: '🏥', title: 'Cirugía Especializada', description: 'Procedimientos quirúrgicos con tecnología avanzada' },
    { icon: '💉', title: 'Vacunación y Desparasitación', description: 'Protección completa para tu mascota' },
    { icon: '🧪', title: 'Laboratorio Clínico', description: 'Análisis rápidos y precisos in-house' },
    { icon: '🛏️', title: 'Hospitalización', description: 'Cuidados intensivos en ambiente seguro' },
    { icon: '💊', title: 'Farmacia Veterinaria', description: 'Medicamentos de calidad premium' },
    { icon: '❤️', title: 'Cardiología Veterinaria', description: 'Especialistas en salud cardiaca' },
    { icon: '📸', title: 'Diagnóstico por Imagen', description: 'RX digital y ultrasonido de precisión' },
    { icon: '🦷', title: 'Odontología Veterinaria', description: 'Limpieza y tratamientos dentales' },
    { icon: '🏃', title: 'Fisioterapia y Rehabilitación', description: 'Recuperación post-quirúrgica avanzada' },
    { icon: '🦎', title: 'Especies Exóticas', description: 'Atención a reptiles, aves y pequeños mamíferos' },
    { icon: '🐴', title: 'Grandes Especies', description: 'Equinos, bovinos y otros animales de granja' },
    { icon: '✈️', title: 'Permisología Viajes', description: 'Certificados para viajar con tu mascota' },
    { icon: '💻', title: 'Telemedicina Veterinaria', description: 'Consultas online disponibles' },
    { icon: '🎾', title: 'Pasadía y Guardería', description: 'Cuidado y entretenimiento durante el día' },
    { icon: '👁️', title: 'Endoscopía', description: 'Diagnóstico no invasivo de vías digestivas' },
  ],
  en: [
    { icon: '🔍', title: 'General Consultation', description: 'Complete evaluation by our specialists' },
    { icon: '🚨', title: 'Emergencies', description: 'In-person care during regular hours; after hours, call +507 6330-3291' },
    { icon: '🏥', title: 'Specialized Surgery', description: 'Surgical procedures with advanced technology' },
    { icon: '💉', title: 'Vaccination & Deworming', description: 'Complete protection for your pet' },
    { icon: '🧪', title: 'Clinical Laboratory', description: 'Fast and accurate in-house analysis' },
    { icon: '🛏️', title: 'Hospitalization', description: 'Intensive care in a safe environment' },
    { icon: '💊', title: 'Veterinary Pharmacy', description: 'Premium quality medications' },
    { icon: '❤️', title: 'Veterinary Cardiology', description: 'Specialists in cardiac health' },
    { icon: '📸', title: 'Imaging Diagnostics', description: 'Digital X-ray and precision ultrasound' },
    { icon: '🦷', title: 'Veterinary Dentistry', description: 'Teeth cleaning and dental treatments' },
    { icon: '🏃', title: 'Physiotherapy & Rehab', description: 'Advanced post-surgical recovery' },
    { icon: '🦎', title: 'Exotic Species', description: 'Care for reptiles, birds and small mammals' },
    { icon: '🐴', title: 'Large Animals', description: 'Equine, bovine and farm animals' },
    { icon: '✈️', title: 'Pet Travel Permits', description: 'Certificates for traveling with your pet' },
    { icon: '💻', title: 'Veterinary Telemedicine', description: 'Online consultations available' },
    { icon: '🎾', title: 'Pet Day Care', description: 'Daytime care and entertainment' },
    { icon: '👁️', title: 'Endoscopy', description: 'Non-invasive diagnostic of digestive tract' },
  ],
};

export const EMERGENCIES_COPY = {
  es: {
    cases: [
      'Accidentes y atropellamientos',
      'Envenenamientos',
      'Convulsiones',
      'Dificultad respiratoria',
      'Partos complicados',
      'Obstrucciones intestinales',
      'Hemorragias',
    ],
  },
  en: {
    cases: [
      'Accidents & hit-by-car',
      'Poisoning & toxic ingestion',
      'Seizures',
      'Breathing difficulties',
      'Complicated labor',
      'Intestinal blockages',
      'External & internal hemorrhage',
    ],
  },
};

export const TESTIMONIALS = [
  {
    temporarilyHidden: true,
    author: 'Quiel Barrios',
    location: 'David, Chiriquí',
    rating: 5,
    es: 'Buen trato al paciente, el Dr. Juan José Gallardo muy profesional. Cubren cualquier emergencia las 24 horas 7 días a la semana. Atendieron a mi chihuahua mini toy Candy en una emergencia. Todo bien, gracias a Dios.',
    en: 'Great patient care, Dr. Juan José Gallardo was very professional. They cover any emergency 24/7. They treated my mini toy chihuahua Candy in an emergency. All good, thank God.',
  },
  {
    author: 'L R',
    location: 'Chiriquí',
    rating: 5,
    es: 'Los veterinarios y el personal son excelentes. Mi perro tenía una grave úlcera ocular y me atendieron incluso el día de Navidad para tratarla.',
    en: 'The vets and staff here are great! My dog had a very bad eye ulcer and they even squeezed me in on Christmas Day to treat it.',
  },
  {
    author: 'Tracey de la Coliniere',
    location: 'Chiriquí',
    rating: 5,
    es: 'Solo he tenido un servicio excelente de los veterinarios. Todos muy serviciales y tienen la mayoría de los medicamentos en stock.',
    en: 'I have only had excellent service from the vets here. Everybody has been very helpful and they stock most medications.',
  },
];

export const TEAM = [
  {
    name: 'Dr. Harmodio Arcia',
    specialtyEs: 'Medicina General y Diagnóstico Clínico',
    specialtyEn: 'General Medicine & Clinical Diagnosis',
    experience: '7 años',
    quote: '¡Vamo\' pa\' encima!',
  },
  {
    name: 'Dra. Kate Hernández',
    specialtyEs: 'Cirugía y Medicina Interna',
    specialtyEn: 'Surgery & Internal Medicine',
    experience: '7+ años',
    quote: 'La vida es movimiento, el movimiento es vida.',
  },
  {
    name: 'Dra. Arantxa Santamaría',
    specialtyEs: 'Medicina General y Endoscopía',
    specialtyEn: 'General Medicine & Endoscopy',
    experience: '7 años',
    quote: 'Para llegar más lejos, debemos estar dispuestos a evolucionar.',
  },
  {
    name: 'Dr. Juan José Gallardo',
    specialtyEs: 'Cardiología y Diagnóstico por Imagen',
    specialtyEn: 'Cardiology & Diagnostic Imaging',
    experience: '9+ años',
    quote: 'Un día a la vez, pero continúa.',
  },
];

export const VISITING_SPECIALISTS = [
  {
    name: 'Dra. Karla Canto',
    specialtyEs: 'Cardiología Veterinaria',
    specialtyEn: 'Veterinary Cardiology',
  },
  {
    name: 'Dra. Danitza Orozco',
    specialtyEs: 'Cardiología Veterinaria',
    specialtyEn: 'Veterinary Cardiology',
  },
  {
    name: 'Dra. Annette Sarsanedas',
    specialtyEs: 'Especies Exóticas',
    specialtyEn: 'Exotic Species',
  },
];

export const TECHNOLOGY = {
  es: [
    { icon: 'Microscope', title: 'Laboratorio In-House', description: 'Resultados express en minutos' },
    { icon: 'HeartPulse', title: 'Cardiología Digital', description: 'ECG + Ecocardiografía especializada' },
    { icon: 'Scan', title: 'Radiografía Digital', description: 'Alta resolución y precisión' },
    { icon: 'Activity', title: 'Ultrasonido Diagnóstico', description: 'Pequeñas y grandes especies' },
    { icon: 'Eye', title: 'Endoscopía Minimamente Invasiva', description: 'Diagnóstico sin dolor' },
    { icon: 'Stethoscope', title: 'Monitoreo Anestésico Digital', description: 'Seguridad quirúrgica total' },
    { icon: 'Zap', title: 'Pruebas Rápidas', description: 'Parvovirus, Distemper, Ehrlichia, FeLV' },
    { icon: 'ClipboardList', title: 'Historia Clínica Digital', description: 'Registro seguro y accesible' },
  ],
  en: [
    { icon: 'Microscope', title: 'In-House Lab', description: 'Express results in minutes' },
    { icon: 'HeartPulse', title: 'Digital Cardiology', description: 'ECG + Specialized Echocardiography' },
    { icon: 'Scan', title: 'Digital X-Ray', description: 'High resolution and precision' },
    { icon: 'Activity', title: 'Diagnostic Ultrasound', description: 'Small and large animals' },
    { icon: 'Eye', title: 'Minimally Invasive Endoscopy', description: 'Pain-free diagnosis' },
    { icon: 'Stethoscope', title: 'Digital Anesthesia Monitoring', description: 'Complete surgical safety' },
    { icon: 'Zap', title: 'Rapid Tests', description: 'Parvovirus, Distemper, Ehrlichia, FeLV' },
    { icon: 'ClipboardList', title: 'Digital Medical Records', description: 'Secure and accessible record' },
  ],
};

export const CONTACT_COPY = {
  es: {
    title: 'Contacto',
    subtitle: '¿Listo para cuidar a tu mascota?',
    description: 'Agenda tu cita o visítanos en David, Chiriquí.',
    form: {
      name: 'Nombre',
      phone: 'Teléfono',
      petName: 'Nombre de tu mascota',
      species: 'Especie',
      reason: 'Motivo de consulta',
      language: 'Idioma preferido',
      submit: 'Enviar Mensaje',
    },
  },
  en: {
    title: 'Contact',
    subtitle: 'Ready to take care of your pet?',
    description: 'Book an appointment or visit us in David, Chiriquí.',
    form: {
      name: 'Name',
      phone: 'Phone',
      petName: 'Pet\'s name',
      species: 'Species',
      reason: 'Reason for visit',
      language: 'Preferred language',
      submit: 'Send Message',
    },
  },
};

export const COLORS = {
  primary: '#2E7D32',
  dark: '#1B3B2F', // Verde oscuro institucional
  accent: '#C5A77A', // Beige institucional
  emergency: '#C0392B',
  text: '#4F4F4F', // Gris neutro
  bg: '#FFFFFF',
  bgSoft: '#F8FAFC',
};


export const SUCCESS_STORIES_DATA = [
  {
    id: 'mickey',
    image: '/images/optimized/casos/caso-mickey.webp',
    tagEs: 'Ortopedia',
    tagEn: 'Orthopedics',
  },
  {
    id: 'hunter',
    image: '/images/optimized/casos/caso-hunter.webp',
    tagEs: 'Hospitalización',
    tagEn: 'Hospitalization',
  },
  {
    id: 'guacamayo',
    image: '/images/optimized/casos/caso-guacamayo.webp',
    tagEs: 'Especies No Tradicionales',
    tagEn: 'Non-Traditional Species',
  },


];

