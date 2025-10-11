import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Briefcase } from 'lucide-react';

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
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/profile.jpg"
                      alt="Faizan Javed"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                      }}
                    />
                    <span className="hidden text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      FJ
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
              </div>

              <div className="hidden md:block text-left">
                <div className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all">
                  Faizan Javed
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Mobile App Developer
                </div>
              </div>
            </button>

            {showProfileCard && (
              <div className="hidden md:block absolute top-full left-0 mt-2 w-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 p-4 animate-fade-in-up z-50">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-0.5 flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/profile.jpg"
                        alt="Faizan Javed"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        FJ
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-3">Faizan Javed</h3>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <GraduationCap size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400">Education</div>
                          <div className="text-sm text-white font-medium">BS Computer Science</div>
                          <div className="text-xs text-gray-500">GCUF, Faisalabad</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Briefcase size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-xs text-gray-400">Designation</div>
                          <div className="text-sm text-white font-medium">Senior Mobile App Developer</div>
                          <div className="text-xs text-gray-500">Android & Flutter Expert</div>
                        </div>
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
