import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="text-xl font-semibold accent-text mb-4">S3tech</div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Especialistas en soluciones tecnológicas innovadoras. Transformamos empresas 
              a través de IoT, infraestructura TI y sistemas fotovoltaicos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">info@s3tech.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span className="text-muted-foreground">Ciudad de México, México</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} S3tech. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;