import { useEffect, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Youtube } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  const contacts: ContactLink[] = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'faziimughal22@gmail.com',
      href: 'mailto:faziimughal22@gmail.com',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '03445821796',
      href: 'tel:03445821796',
      color: 'from-green-500 to-teal-600',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@Faizan18506',
      href: 'https://github.com/Faizan18506',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Faizan Javed',
      href: 'https://www.linkedin.com/in/faizan-javed-14127627b/',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: <Youtube size={24} />,
      label: 'YouTube',
      value: 'AndroidComposeDev',
      href: 'https://www.youtube.com/@AndroidComposeDev/videos',
      color: 'from-red-600 to-red-800',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Let's discuss your next mobile app project or collaboration opportunity
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm break-words">
                    {contact.value}
                  </p>
                </div>
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
            </a>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-6 bg-gray-900/50 backdrop-blur-sm px-8 py-6 rounded-2xl border border-gray-700">
            {contacts.slice(2).map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:scale-125 transition-transform duration-300`}
                aria-label={contact.label}
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
