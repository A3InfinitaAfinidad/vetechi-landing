import { useLocale } from 'next-intl';
import { locales } from '@/i18n.config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function PrivacyPolicyPage() {
  const locale = useLocale();
  const isEs = locale === 'es';

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white min-h-screen">
      <h1 className="text-4xl font-display font-bold text-dark-900 mb-8">
        {isEs ? 'Política de Privacidad' : 'Privacy Policy'}
      </h1>

      <div className="prose prose-lg text-text">
        {isEs ? (
          <>
            <p><strong>Última actualización:</strong> Mayo 2026</p>
            <p>
              En VETECHI Hospital Veterinario, valoramos tu privacidad y estamos comprometidos con la protección de tus datos personales y los de tus mascotas. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Información que recopilamos</h2>
            <p>
              Podemos recopilar información personal como tu nombre, número de teléfono, dirección de correo electrónico e historial médico de tus mascotas cuando utilizas nuestros servicios, reservas citas o te comunicas con nosotros mediante WhatsApp o formularios en nuestro sitio web.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Uso de la información</h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Proveer servicios veterinarios de calidad.</li>
              <li>Gestionar citas y recordatorios.</li>
              <li>Responder a tus consultas médicas o emergencias.</li>
              <li>Mejorar la experiencia de usuario en nuestro sitio web.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Protección de datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción. 
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política o deseas ejercer tus derechos sobre tus datos personales, por favor contáctanos en <strong>info@vetechi.pa</strong> o visítanos en nuestras instalaciones en David, Chiriquí.
            </p>
          </>
        ) : (
          <>
            <p><strong>Last updated:</strong> May 2026</p>
            <p>
              At VETECHI Veterinary Hospital, we value your privacy and are committed to protecting your personal data and that of your pets. This Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, phone number, email address, and your pets&apos; medical history when you use our services, book appointments, or contact us via WhatsApp or forms on our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Information</h2>
            <p>
              The collected information is used exclusively to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide high-quality veterinary services.</li>
              <li>Manage appointments and reminders.</li>
              <li>Respond to your medical inquiries or emergencies.</li>
              <li>Improve the user experience on our website.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Protection</h2>
            <p>
              We implement technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions about this policy or wish to exercise your rights regarding your personal data, please contact us at <strong>info@vetechi.pa</strong> or visit our facilities in David, Chiriquí.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
