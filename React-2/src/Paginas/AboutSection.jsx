import { Code, Database, Palette, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Code, color: 'from-blue-400 to-blue-600', description: 'React, Vue, Angular' },
  { name: 'Design', icon: Palette, color: 'from-purple-400 to-purple-600', description: 'UI/UX, Figma, Adobe' },
  { name: 'Mobile', icon: Smartphone, color: 'from-pink-400 to-pink-600', description: 'React Native, Flutter' },
];

const AboutSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Sobre Mí
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Soy un desarrollador apasionado por crear experiencias digitales innovadoras. 
            Con más de 5 años de experiencia, combino creatividad y tecnología para 
            construir soluciones que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-white/70 text-sm">{skill.description}</p>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Mi Filosofía</h3>
            <p className="text-white/80 leading-relaxed">
              "La tecnología debe ser hermosa, funcional y accesible para todos. 
              Cada línea de código es una oportunidad para mejorar la vida de las personas."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
