import React from 'react';
import { Container, Navbar, Nav, Carousel, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Sun, Cpu, Wrench, Send, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <Sun className="d-inline-block align-top me-2" size={24} />
            TechSolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#services">Servicios</Nav.Link>
              <Nav.Link href="#about">Acerca de</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Carousel */}
      <section id="home">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Paneles solares"
            />
            <Carousel.Caption>
              <h2>Soluciones Fotovoltaicas</h2>
              <p>Energía limpia y renovable para tu hogar o negocio</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Tecnología"
            />
            <Carousel.Caption>
              <h2>Servicios Tecnológicos</h2>
              <p>Soluciones informáticas para optimizar tu productividad</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Soporte técnico"
            />
            <Carousel.Caption>
              <h2>Soporte Técnico</h2>
              <p>Asistencia profesional para tus equipos y sistemas</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Nuestros Servicios</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body className="text-center p-4">
                  <Sun className="service-icon mb-3" size={48} />
                  <Card.Title>Sistemas Fotovoltaicos</Card.Title>
                  <Card.Text>
                    Diseño, instalación y mantenimiento de sistemas solares para hogares y empresas. 
                    Aprovecha la energía del sol y reduce tu factura eléctrica con soluciones a medida.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body className="text-center p-4">
                  <Cpu className="service-icon mb-3" size={48} />
                  <Card.Title>Servicios Informáticos</Card.Title>
                  <Card.Text>
                    Soporte técnico, mantenimiento preventivo y correctivo de equipos informáticos. 
                    Implementación de redes y sistemas de seguridad para tu negocio.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body className="text-center p-4">
                  <Wrench className="service-icon mb-3" size={48} />
                  <Card.Title>Consultoría Tecnológica</Card.Title>
                  <Card.Text>
                    Asesoramiento profesional para la implementación de soluciones tecnológicas 
                    que optimicen los procesos de tu empresa y mejoren su eficiencia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="mb-4">Acerca de Nosotros</h2>
              <p>
                En <strong>TechSolar</strong> somos especialistas en la integración de tecnología y energías renovables. 
                Contamos con más de 10 años de experiencia en el sector, ofreciendo soluciones personalizadas que 
                combinan innovación, calidad y sostenibilidad.
              </p>
              <p>
                Nuestro equipo está formado por profesionales altamente cualificados, comprometidos con la excelencia 
                y la satisfacción del cliente. Trabajamos con las mejores marcas y materiales del mercado para garantizar 
                la durabilidad y eficiencia de nuestras instalaciones.
              </p>
              <p>
                Nuestra misión es facilitar el acceso a la tecnología y a las energías limpias, contribuyendo 
                a un futuro más sostenible y eficiente energéticamente.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Nuestro equipo" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <Container>
          <h2 className="text-center mb-5">Contacto</h2>
          <Row>
            <Col lg={5} className="mb-4">
              <h4>Información de Contacto</h4>
              <p className="mb-4">
                Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución que mejor se adapte a tus necesidades.
              </p>
              <div className="d-flex align-items-center mb-3">
                <Mail size={20} className="me-3 text-primary" />
                <span>info@techsolar.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone size={20} className="me-3 text-primary" />
                <span>+34 912 345 678</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <MapPin size={20} className="me-3 text-primary" />
                <span>Calle Tecnología 123, 28001 Madrid</span>
              </div>
            </Col>
            <Col lg={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h4 className="mb-4">Envíanos un mensaje</h4>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control type="text" placeholder="Tu nombre" required />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="tu@email.com" required />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Label>Asunto</Form.Label>
                      <Form.Control type="text" placeholder="Asunto del mensaje" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mensaje</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Tu mensaje" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="d-flex align-items-center">
                      <Send size={16} className="me-2" />
                      Enviar Mensaje
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 mt-auto">
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-start">
              <p className="mb-0">&copy; 2025 TechSolar. Todos los derechos reservados.</p>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Nav className="justify-content-center justify-content-md-end">
                <Nav.Link href="#home" className="text-white">Inicio</Nav.Link>
                <Nav.Link href="#services" className="text-white">Servicios</Nav.Link>
                <Nav.Link href="#about" className="text-white">Acerca de</Nav.Link>
                <Nav.Link href="#contact" className="text-white">Contacto</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;