import React, { useState } from 'react';
import { Globe, MapPin, Calendar, Users, ChevronDown } from 'lucide-react';
import './App.css';

// Import images
import logo from './assets/sodeps_.png';
import img1 from './assets/IMG_9703.jpg';
import img2 from './assets/IMG_9710.jpg';
import img3 from './assets/IMG_9674.jpg';
import img4 from './assets/IMG_9714.jpg';
import img5 from './assets/IMG_9879.jpg';
import img6 from './assets/IMG_9892.jpg';
import img7 from './assets/IMG_9900.jpg';
import img8 from './assets/IMG_9901.jpg';
import img9 from './assets/IMG_9918.jpg';

const translations = {
  ar: {
    home: 'الرئيسية',
    about: 'حول الشركة',
    services: 'الخدمات',
    projects: 'المشاريع',
    contact: 'اتصل بنا',
    welcome: 'مرحباً بكم في سوديبس',
    subtitle: 'شركة تونسية للنفط في شراكة مع إيني والمؤسسة التونسية للأنشطة البترولية',
    description: 'سوديبس (SODEPS)، أو شركة تنمية واستغلال رخصة الجنوب، هي شركة تونسية متخصصة في استكشاف وإنتاج النفط. وهي شراكة بين إيني (شركة المحروقات الإيطالية) والمؤسسة التونسية للأنشطة البترولية (ETAP). تقوم سوديبس بإنتاج امتيازات رخصة الجنوب.',
    activities: 'الأنشطة',
    activitiesDesc: 'تركز سوديبس على تطوير واستغلال النفط.',
    partnership: 'الشراكة',
    partnershipDesc: 'الشركة هي نتاج تعاون بين إيني والمؤسسة التونسية للأنشطة البترولية (ETAP)، بمشاركة متساوية.',
    concession: 'الامتياز',
    concessionDesc: 'تستغل سوديبس امتيازات رخصة الجنوب، الواقعة في MLD (مالحروقة لاريش دباش) في تطاوين.',
    history: 'التاريخ',
    historyDesc: 'تأسست سوديبس عام 1983.',
    location: 'الموقع',
    locationDesc: 'يقع مقرها الرئيسي في تونس، 10 شارع الطاهر بن عاشور، حي التعاونية.',
    productionSites: 'مواقع الإنتاج',
    viewGallery: 'عرض المعرض'
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    projects: 'Projets',
    contact: 'Contact',
    welcome: 'Bienvenue chez SODEPS',
    subtitle: 'Une entreprise tunisienne pétrolière en partenariat avec ENI et ETAP',
    description: 'SODEPS, ou Société de Développement et d\'Exploitation du Permis du Sud, est une entreprise tunisienne spécialisée dans l\'exploration et la production pétrolière. Elle est un partenariat entre Eni (compagnie italienne d\'hydrocarbures) et ETAP (Entreprise Tunisienne d\'Activités Pétrolières). SODEPS met en production les concessions du Permis du Sud.',
    activities: 'Activités',
    activitiesDesc: 'SODEPS se concentre sur le Développement et l\'exploitation pétrolière.',
    partnership: 'Partenariat',
    partnershipDesc: 'La société est le fruit d\'une collaboration entre Eni et ETAP, avec une participation paritaire.',
    concession: 'Concession',
    concessionDesc: 'SODEPS exploite les concessions du Permis du Sud, situé à MLD (MALHROUGHA LARICH DEBBECH) à Tataouine.',
    history: 'Historique',
    historyDesc: 'SODEPS a été fondée en 1983.',
    location: 'Implantation',
    locationDesc: 'Son siège social est à Tunis, au 10 Avenue Tahar Ben Achour, Mutuelle Ville.',
    productionSites: 'Sites de Production',
    viewGallery: 'Voir la Galerie'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    welcome: 'Welcome to SODEPS',
    subtitle: 'A Tunisian oil company in partnership with ENI and ETAP',
    description: 'SODEPS, or Société de Développement et d\'Exploitation du Permis du Sud (Company for the Development and Exploitation of the Southern Permit), is a Tunisian company specializing in oil exploration and production. It is a partnership between Eni (Italian hydrocarbon company) and ETAP (Tunisian Enterprise of Petroleum Activities). SODEPS is responsible for the production of the Southern Permit concessions.',
    activities: 'Activities',
    activitiesDesc: 'SODEPS focuses on oil development and exploitation.',
    partnership: 'Partnership',
    partnershipDesc: 'The company is the result of a collaboration between Eni and ETAP, with equal participation.',
    concession: 'Concession',
    concessionDesc: 'SODEPS operates the Southern Permit concessions, located in MLD (MALHROUGHA LARICH DEBBECH) in Tataouine.',
    history: 'History',
    historyDesc: 'SODEPS was founded in 1983.',
    location: 'Location',
    locationDesc: 'Its headquarters are in Tunis, at 10 Avenue Tahar Ben Achour, Mutuelle Ville.',
    productionSites: 'Production Sites',
    viewGallery: 'View Gallery'
  }
};

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function App() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const t = translations[currentLang];

  const LanguageSelector = () => (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        <Globe size={16} />
        <span>{currentLang.toUpperCase()}</span>
        <ChevronDown size={16} />
      </button>
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {Object.keys(translations).map((lang) => (
          <button
            key={lang}
            onClick={() => setCurrentLang(lang)}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg ${
              currentLang === lang ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );

  const ImageGallery = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-2xl font-bold">{t.productionSites}</h3>
          <button
            onClick={() => setShowGallery(false)}
            className="text-white hover:text-gray-300 text-3xl"
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Production site ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const ImageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-95 z-60 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="text-white hover:text-gray-300 text-3xl"
          >
            ×
          </button>
        </div>
        <img
          src={selectedImage}
          alt="Production site"
          className="w-full h-auto max-h-screen object-contain rounded-lg"
        />
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="SODEPS Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-blue-900">SODEPSTEST</h1>
                <p className="text-sm text-gray-600">Since 1983</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t.home}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t.about}</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{t.services}</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">{t.projects}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t.contact}</a>
            </nav>
            
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {t.welcome}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            {t.subtitle}
          </p>
          <button
            onClick={() => setShowGallery(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
          >
            {t.viewGallery}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">{t.about}</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={img3} alt="Oil field" className="w-full h-48 object-cover rounded-lg shadow-lg" />
                <img src={img5} alt="Production facility" className="w-full h-48 object-cover rounded-lg shadow-lg" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{t.activities}</h3>
                </div>
                <p className="text-gray-700">{t.activitiesDesc}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{t.partnership}</h3>
                </div>
                <p className="text-gray-700">{t.partnershipDesc}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{t.concession}</h3>
                </div>
                <p className="text-gray-700">{t.concessionDesc}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{t.history}</h3>
                </div>
                <p className="text-gray-700">{t.historyDesc}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg md:col-span-2">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-blue-900">{t.location}</h3>
                </div>
                <p className="text-gray-700">{t.locationDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Sites Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">{t.productionSites}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.slice(0, 6).map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={img} 
                  alt={`Production site ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(img)}
                    className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowGallery(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.viewGallery}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={logo} alt="SODEPS Logo" className="h-10 w-auto" />
              <div>
                <h3 className="text-xl font-bold">SODEPSTEST</h3>
                <p className="text-blue-200">Since 1983</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-blue-200">10 Avenue Tahar Ben Achour, Mutuelle Ville</p>
              <p className="text-blue-200">Tunis, Tunisia</p>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-200">© 2024 SODEPSTEST. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showGallery && <ImageGallery />}
      {selectedImage && <ImageModal />}
    </div>
  );
}

export default App;

