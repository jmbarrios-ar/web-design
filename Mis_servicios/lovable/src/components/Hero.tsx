import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Minimal geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-border mb-8">
            <span className="text-sm text-muted-foreground">
              🚀 Innovación Tecnológica
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Soluciones 
            <span className="accent-text"> Tecnológicas</span>
            <br />
            del Futuro
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Especialistas en IoT, infraestructura TI y sistemas fotovoltaicos. 
            Transformamos empresas con tecnología de vanguardia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button 
              className="btn-minimal text-base px-8 py-3"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Consulta
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              className="text-base px-8 py-3 border-border hover:bg-surface transition-colors duration-200"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold accent-text mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold accent-text mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold accent-text mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;