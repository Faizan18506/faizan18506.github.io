import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fade-in-up">
          <div className={`inline-block px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-full text-white font-semibold mb-6`}>
            Mobile App
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {project.name}
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-lg border border-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold`}
            >
              <Github size={20} />
              <span>View on GitHub</span>
            </a>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 font-semibold border border-gray-700">
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
              <img
                src={project.screenshots[selectedImage]}
                alt={`${project.name} screenshot ${selectedImage + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? `border-cyan-500 shadow-lg shadow-cyan-500/50`
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <img
                    src={screenshot}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">About This Project</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.detailedDescription}
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 group-hover:scale-150 transition-transform`}></div>
                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-700 text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in This Project?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Check out the source code on GitHub or get in touch to discuss similar projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold`}
            >
              View Source Code
            </a>
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="px-8 py-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 font-semibold border border-gray-600"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
