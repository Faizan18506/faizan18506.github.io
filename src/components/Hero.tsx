import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Building fast, modern, and user-friendly mobile experiences';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Faizan Javed
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
            Android & Flutter Developer
          </h2>
        </div>

        <div className="animate-fade-in-up opacity-0 min-h-[60px] sm:min-h-[70px]" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            {displayText}
            <span className="inline-block w-0.5 h-5 sm:h-6 bg-cyan-400 ml-1 animate-pulse"></span>
          </p>
        </div>

        <div className="animate-fade-in-up opacity-0 mt-8 sm:mt-12" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button
            onClick={scrollToAbout}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span className="relative z-10">Explore My Work</span>
            <ChevronDown className="relative z-10 group-hover:translate-y-1 transition-transform" size={20} />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-cyan-400 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
