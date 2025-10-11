import { useEffect, useState } from 'react';
import { GraduationCap, Briefcase, Code2 } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
{/*           
          <div className="mt-8">
            <a
              href="/resume/v0Resume_mobile_engineer.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-semibold"
            >
              Download CV
            </a>
          </div> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
            <p className="text-gray-300 leading-relaxed">
              Bachelor's degree in <span className="text-cyan-400 font-semibold">Software Engineering</span> from University Of Haripur. Also studied <span className="text-cyan-400 font-semibold">Internet of Things (IoT)</span> from International University PAF IAST, building a strong foundation in emerging technologies.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Briefcase size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">2 years of hands-on experience</span> as an Android Developer at <a href="https://zigron.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Zigron Inc</a>, a product-based company. Contributed to multiple Android applications, focusing on performance optimization and real-time features.
            </p>
          </div>

          <div
            className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Code2 size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate about building <span className="text-purple-400 font-semibold">mobile apps with elegant user experiences</span>. Committed to writing clean, maintainable code and staying updated with the latest mobile development trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
