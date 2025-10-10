import { useEffect, useState } from 'react';
import { Smartphone, Code, Database, Layers, TestTube, Rocket } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

  const skills: Skill[] = [
    {
      name: 'Kotlin & Jetpack Compose',
      level: 90,
      icon: <Code size={24} />,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Android Development (XML)',
      level: 85,
      icon: <Smartphone size={24} />,
      color: 'from-blue-500 to-purple-600',
    },
    {
      name: 'Flutter & Dart',
      level: 80,
      icon: <Layers size={24} />,
      color: 'from-purple-500 to-pink-600',
    },
    {
      name: 'Firebase & API Integration',
      level: 85,
      icon: <Database size={24} />,
      color: 'from-orange-500 to-red-600',
    },
    {
      name: 'MVVM Architecture',
      level: 88,
      icon: <Rocket size={24} />,
      color: 'from-green-500 to-teal-600',
    },
    {
      name: 'UI/UX & Testing',
      level: 82,
      icon: <TestTube size={24} />,
      color: 'from-pink-500 to-rose-600',
    },
    {
      name: 'AdMob Integration',
      level: 80,
      icon: <TestTube size={24} />,
      color: 'from-green-500 to-teal-600',
    },
     {
      name: 'Stripe Integration',
      level: 80,
      icon: <TestTube size={24} />,
      color: 'from-orange-500 to-red-600',
    },
    {
      name: 'Coroutines & Flow',
      level: 80,
      icon: <TestTube size={24} />,
      color: 'from-green-500 to-teal-600',
    },
    {
      name: 'SQL & Room Database & Services',
      level: 80,
      icon: <TestTube size={24} />,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setAnimatedLevels((prev) => [...prev, skill.level]);
              }, index * 150);
            });
          }, 300);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-2xl font-bold text-gray-400">
                  {animatedLevels[index] || 0}%
                </span>
              </div>
              <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{
                    width: `${animatedLevels[index] || 0}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
