import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Server, Sun, ArrowRight } from 'lucide-react';
import iotImage from '@/assets/iot-service.jpg';
import itImage from '@/assets/it-support.jpg';
import solarImage from '@/assets/solar-systems.jpg';

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Tecnologías y Proyectos IoT',
      description: 'Desarrollamos soluciones IoT personalizadas para optimizar procesos, monitorear sistemas y automatizar operaciones empresariales.',
      features: [
        'Sensores inteligentes',
        'Sistemas de monitoreo remoto',
        'Automatización industrial',
        'Análisis de datos en tiempo real'
      ],
      image: iotImage,
      color: 'primary'
    },
    {
      icon: Server,
      title: 'Soporte e Infraestructura TI',
      description: 'Ofrecemos servicios completos de soporte técnico, mantenimiento y optimización de infraestructura tecnológica.',
      features: [
        'Soporte técnico 24/7',
        'Mantenimiento preventivo',
        'Migración a la nube',
        'Seguridad informática'
      ],
      image: itImage,
      color: 'secondary'
    },
    {
      icon: Sun,
      title: 'Sistemas Fotovoltaicos',
      description: 'Diseño, instalación y mantenimiento de sistemas de energía solar para reducir costos energéticos y promover la sostenibilidad.',
      features: [
        'Paneles solares de alta eficiencia',
        'Sistemas de almacenamiento',
        'Monitoreo de rendimiento',
        'Mantenimiento especializado'
      ],
      image: solarImage,
      color: 'accent'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border mb-6">
            <span className="text-sm text-muted-foreground">
              Nuestros Servicios
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Soluciones <span className="accent-text">Especializadas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tres líneas de servicios especializados para cubrir todas las necesidades tecnológicas de tu empresa
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-minimal group hover:-translate-y-1 transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Service image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Icon and title */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between text-sm hover:bg-surface-elevated transition-colors duration-200"
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            className="btn-minimal px-8 py-3"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;