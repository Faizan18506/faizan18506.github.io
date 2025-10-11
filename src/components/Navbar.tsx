import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Briefcase } from 'lucide-react';
import profileImage from '../images/profile.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="relative"
            onMouseEnter={() => setShowProfileCard(true)}
            onMouseLeave={() => setShowProfileCard(false)}
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-4 group"
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[3px] group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Faizan Javed"
                      className="w-full h-full object-cover object-[center_15%]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      FJ
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-[3px] border-gray-900 animate-pulse"></div>
              </div>

              <div className="hidden md:flex items-center gap-6">
                <div className="text-left">
                  <div className="text-base font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                    Faizan Javed
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    Mobile App Developer
                  </div>
                </div>
                <a
                  href="/resume/v0Resume_mobile_engineer.pdf"
                  download
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
                >
                  Download CV
                </a>
              </div>
            </button>

            {showProfileCard && (
              <div className="hidden md:block absolute top-full left-0 mt-3 w-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden animate-fade-in-up z-50">
                <div className="relative h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative px-5 pb-5">
                  <div className="flex items-start gap-4 -mt-12">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[3px] flex-shrink-0 shadow-xl">
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={profileImage}
                          alt="Faizan Javed"
                          className="w-full h-full object-cover object-[center_15%]"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling!.classList.remove('hidden');
                          }}
                        />
                        <span className="hidden text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          FJ
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0 mt-14">
                      <h3 className="text-xl font-bold text-white mb-1">Faizan Javed</h3>
                      <p className="text-sm text-cyan-400">ndrdcmpsdev@gmail.com</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                      <GraduationCap size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Education</div>
                        <div className="text-sm text-white font-medium">BS in Software Engineering</div>
                        <div className="text-xs text-gray-500">University of Haripur</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                      <Briefcase size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-gray-400 mb-1">Designation</div>
                        <div className="text-sm text-white font-medium">Mid level Mobile App Developer</div>
                        <div className="text-xs text-gray-500">Android & Flutter Expert</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-md transition-all"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
