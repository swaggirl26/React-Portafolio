import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce 3D',
    description: 'Plataforma de comercio electrónico con visualización 3D de productos',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
    tech: ['React', 'Three.js', 'Node.js'],
    color: 'from-blue-500 to-purple-600',
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Panel de control interactivo con visualizaciones de datos en tiempo real',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    tech: ['Vue.js', 'D3.js', 'Python'],
    color: 'from-green-500 to-teal-600',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'App Mobile Fitness',
    description: 'Aplicación móvil para seguimiento de ejercicios con realidad aumentada',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    tech: ['React Native', 'AR Core', 'Firebase'],
    color: 'from-pink-500 to-rose-600',
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'AI Chat Platform',
    description: 'Plataforma de chat inteligente con procesamiento de lenguaje natural',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    tech: ['Next.js', 'OpenAI', 'WebSocket'],
    color: 'from-orange-500 to-red-600',
    link: '#',
    github: '#'
  },
];

const ProjectsSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Mis Proyectos
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
            Una selección de proyectos que demuestran mi pasión por la innovación
            y la excelencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 text-sm font-medium group/btn"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Proyecto</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Código</span>
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;