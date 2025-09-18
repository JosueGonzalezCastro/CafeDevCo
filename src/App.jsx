import { useState } from 'react';
import {
  SquareStack,
  BarChart,
  Users,
  MessageCircle,
  Linkedin,
  Github,
  Twitter,
  Menu,
  Mountain,
  Utensils,
  Gamepad2,
  Cloud,
  X
} from 'lucide-react';

const languageData = {
  en: {
    nav: { products: 'Products', about: 'About Us', contact: 'Contact' },
    hero: {
      title: 'Brewing Digital Experiences, One App at a Time.',
      description: 'Based in the heart of Costa Rica, CafeDevCo{ } designs and develops finished software products that are intuitive, robust, and beautiful.',
      button: 'Explore Our Products'
    },
    products: {
      title: 'Our Finished Products',
      items: [
        {
          title: 'FoodHub CR',
          description: 'A local food directory and review platform connecting users to authentic Costa Rican cuisine from local vendors.',
          icon: Utensils,
        },
        {
          title: '1856',
          description: 'An immersive 2D historical platformer game that takes players on a journey through Costa Rica\'s most pivotal moments.',
          icon: Gamepad2,
        },
        {
          title: 'EcoTrek CR',
          description: 'A comprehensive guide to Costa Rica\'s ecotourism trails and parks, with interactive maps and wildlife spotting features.',
          icon: Mountain,
        },
        {
          title: 'C³ (CafeCloudConsulting)',
          description: 'A consulting service that helps customers develop robust, scalable, and secure cloud solutions.',
          icon: Cloud,
        },
      ],
      learnMore: 'Learn More',
      inDevelopment: 'In Development',
    },
    about: {
      title: 'Our Philosophy',
      description: 'CafeDevCo{ } is a software company based in Costa Rica. Our philosophy is rooted in "Pura Vida": we create with purpose, building beautiful and intuitive applications that make life simpler and more enjoyable.'
    },
    contact: {
      title: "Let's Build Something Great.",
      description: "Whether you're interested in one of our products or have an idea for a custom solution, we'd love to hear from you. Get in touch with our team today.",
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      button: 'Send Message'
    },
    footer: '2025 CafeDevCo{ }. All rights reserved.'
  },
  es: {
    nav: { products: 'Productos', about: 'Sobre Nosotros', contact: 'Contacto' },
    hero: {
      title: 'Creando Experiencias Digitales, Una App a la Vez.',
      description: 'Con sede en el corazón de Costa Rica, CafeDevCo{ } diseña y desarrolla productos de software terminados que son intuitivos, robustos y hermosos.',
      button: 'Explora Nuestros Productos'
    },
    products: {
      title: 'Nuestros Productos Terminados',
      items: [
        {
          title: 'FoodHub CR',
          description: 'Una plataforma local de directorio de alimentos y reseñas que conecta a los usuarios con la auténtica cocina costarricense de vendedores locales.',
          icon: Utensils,
        },
        {
          title: '1856',
          description: 'Un inmersivo juego de plataformas histórico en 2D que lleva a los jugadores a un viaje a través de los momentos más importantes de Costa Rica.',
          icon: Gamepad2,
        },
        {
          title: 'EcoTrek CR',
          description: 'Una guía completa de los senderos y parques de ecoturismo de Costa Rica, con mapas interactivos y funciones de avistamiento de vida silvestre de origen comunitario.',
          icon: Mountain,
        },
        {
          title: 'C³ (CafeCloudConsulting)',
          description: 'Un servicio de consultoría que ayuda a los clientes a desarrollar soluciones en la nube robustas, escalables y seguras.',
          icon: Cloud,
        },
      ],
      learnMore: 'Aprende Más',
      inDevelopment: 'En Desarrollo',
    },
    about: {
      title: 'Nuestra Filosofía',
      description: 'CafeDevCo{ } es una compañía de software con sede en Costa Rica. Nuestra filosofía se basa en el "Pura Vida": creamos con propósito, construyendo aplicaciones hermosas e intuitivas que hacen la vida más simple y placentera.'
    },
    contact: {
      title: 'Construyamos Algo Grande.',
      description: 'Si te interesa alguno de nuestros productos o tienes una idea para una solución personalizada, nos encantaría saber de ti. Ponte en contacto con nuestro equipo hoy mismo.',
      name: 'Tu Nombre',
      email: 'Tu Correo Electrónico',
      message: 'Tu Mensaje',
      button: 'Enviar Mensaje'
    },
    footer: '2025 CafeDevCo{ };. Todos los derechos reservados.'
  }
};

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const content = languageData[language];

  // Renders the main content based on the active state
  const renderSection = () => {
    switch (activeSection) {
      case 'products':
        return <ProductsSection content={content.products} />;
      case 'about':
        return <AboutSection content={content.about} />;
      case 'contact':
        return <ContactSection content={content.contact} />;
      default:
        return <HeroSection setActiveSection={setActiveSection} content={content.hero} />;
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans antialiased">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo with a state setter */}
          <a
            href="#"
            onClick={() => { setActiveSection('home'); setIsMobileMenuOpen(false); }}
            className="text-3xl font-bold text-teal-600 transition-colors duration-300"
          >
            CafeDevCo{ }&#123; &#125;
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavItem label={content.nav.products} section="products" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem label={content.nav.about} section="about" activeSection={activeSection} setActiveSection={setActiveSection} />
            <NavItem label={content.nav.contact} section="contact" activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm text-sm"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <MobileNavItem label={content.nav.products} section="products" setActiveSection={setActiveSection} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavItem label={content.nav.about} section="about" setActiveSection={setActiveSection} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavItem label={content.nav.contact} section="contact" setActiveSection={setActiveSection} setIsMobileMenuOpen={setIsMobileMenuOpen} />
          </div>
        )}
      </header>

      {/* Renders the currently active section */}
      <main className="max-w-7xl mx-auto">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="py-10 bg-gray-100 mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {content.footer}</p>
          <div className="flex justify-center space-x-6">
            <SocialIcon icon={Linkedin} />
            <SocialIcon icon={Github} />
          </div>
        </div>
      </footer>
    </div>
  );
}

// Reusable Navigation Link Component
function NavItem({ label, section, activeSection, setActiveSection }) {
  const isActive = activeSection === section;
  const linkClass = isActive
    ? 'text-teal-600 font-semibold border-b-2 border-teal-600 transition-all duration-300'
    : 'text-gray-500 hover:text-gray-900 transition-colors duration-300';
  return (
    <a href={`#${section}`} onClick={() => setActiveSection(section)} className={linkClass}>
      {label}
    </a>
  );
}

// Mobile Navigation Item Component
function MobileNavItem({ label, section, setActiveSection, setIsMobileMenuOpen }) {
  return (
    <a
      href={`#${section}`}
      onClick={() => {
        setActiveSection(section);
        setIsMobileMenuOpen(false);
      }}
      className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-300"
    >
      {label}
    </a>
  );
}

// Reusable Social Icon Component
function SocialIcon({ icon: Icon }) {
  return (
    <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors duration-300">
      <Icon className="w-6 h-6" />
    </a>
  );
}

// Hero Section Component
function HeroSection({ setActiveSection, content }) {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto py-24">
        {/* Logo added here */}
        <img
          src="https://sacafedevco.blob.core.windows.net/cafedevcontainer/CafeDevCo_logo.png"
          alt="CafeDevCo Logo"
          className="w-64 sm:w-96 mx-auto mb-4"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          {content.title}
        </h1>
        <p className="text-sm sm:text-md text-gray-600 mb-8 max-w-2xl mx-auto">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => setActiveSection('products')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {content.button}
          </button>
        </div>
      </div>
    </section>
  );
}

// Products Section Component
function ProductsSection({ content }) {
  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {content.items.map((product, index) => (
            <ProductCard key={index} {...product} learnMore={content.learnMore} inDevelopment={content.inDevelopment} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Product Card Component
function ProductCard({ title, description, icon: Icon, learnMore, inDevelopment }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center">
        <p className="text-gray-400 font-semibold text-sm">
          {inDevelopment}
        </p>
      </div>
    </div>
  );
}

// About Section Component
function AboutSection({ content }) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{content.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {content.description}
        </p>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection({ content }) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 rounded-xl">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{content.title}</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          {content.description}
        </p>

        <div className="bg-white rounded-xl p-8 sm:p-12 max-w-xl mx-auto shadow-xl">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <input type="text" id="name" name="name" placeholder={content.name} className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder={content.email} className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" />
            </div>
            <div>
              <textarea id="message" name="message" rows="5" placeholder={content.message} className="w-full bg-gray-50 text-gray-900 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              {content.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
