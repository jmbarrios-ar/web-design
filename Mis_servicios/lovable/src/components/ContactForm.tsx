import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface border border-border mb-6">
            <span className="text-sm text-muted-foreground">
              Contacto
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Hablemos de tu <span className="accent-text">Proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para transformar tu empresa con tecnología innovadora? 
            Contáctanos y descubre cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Email</div>
                      <div className="text-muted-foreground text-sm">info@s3tech.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-secondary/10 mr-4">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Teléfono</div>
                      <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-accent/10 mr-4">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Oficina</div>
                      <div className="text-muted-foreground text-sm">Ciudad de México, México</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-minimal p-6">
                <h4 className="font-semibold mb-3 text-sm">¿Por qué elegir S3tech?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-primary mr-3"></div>
                    Experiencia comprobada en el sector
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-primary mr-3"></div>
                    Soluciones personalizadas
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-primary mr-3"></div>
                    Soporte técnico especializado
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 rounded-full bg-primary mr-3"></div>
                    Tecnología de vanguardia
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="card-minimal">
              <CardHeader>
                <CardTitle className="text-xl">Solicitar Información</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-input border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-input border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de interés</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-input border-border">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iot">Tecnologías y Proyectos IoT</SelectItem>
                        <SelectItem value="it-support">Soporte e Infraestructura TI</SelectItem>
                        <SelectItem value="solar">Sistemas Fotovoltaicos</SelectItem>
                        <SelectItem value="all">Todos los servicios</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe tu proyecto o consulta..."
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <Button type="submit" className="btn-minimal w-full py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;