import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'PKI Solutions',
    'Responsive Design',
    'React Applications',
    'Mobile Application Development'
    
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'bi-github',
      url: 'https://github.com/Hawisamuel',
      color: '#F8BBD9'
    },
    {
      name: 'LinkedIn',
      icon: 'bi-linkedin',
      url: 'https://www.linkedin.com/in/hawi-samuel-69bb67344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#F8BBD9'
    },
    {
      name: 'Twitter',
      icon: 'bi-twitter',
      url: 'https://x.com/HawiRoyalty?t=AA38tEcvc6qlQ4kH4anDqw&s=09',
      color: '#F8BBD9'
    },
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://www.instagram.com/hawi_samuel_?igsh=MWc2bnc0NWdvMnRlMw==',
      color: '#F8BBD9'
    },
    {
      name: 'Email',
      icon: 'bi-envelope-fill',
      url: 'mailto:hawisamuel631@gmail.com',
      color: '#F8BBD9'
    }
  ];

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)',
        color: '#E1F5FE',
        padding: '60px 0 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(248, 187, 217, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(13, 71, 161, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(136, 14, 79, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }}
      ></div>

      <Container>
        <Row className="g-4">
          {/* Brand Column */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h3
                className="fw-bold mb-3"
                style={{
                  color: '#F8BBD9',
                  fontSize: '1.8rem'
                }}
              >
                Hawi Samuel
              </h3>
              <p
                style={{
                  color: '#E1F5FE',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}
              >
                Passionate Full stack developer, VA and PKI specialist creating beautiful, functional, 
                and user-friendly digital experiences. Let's build something 
                amazing together!
              </p>
            </div>

            {/* Social Links */}
            <div className="mb-4">
              <h5
                className="fw-semibold mb-3"
                style={{ color: '#F8BBD9' }}
              >
                Connect With Me
              </h5>
              <div className="d-flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-decoration-none d-flex align-items-center justify-content-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(248, 187, 217, 0.1)',
                      borderRadius: '50%',
                      color: social.color,
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(248, 187, 217, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#F8BBD9';
                      e.target.style.color = '#0D47A1';
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                      e.target.style.color = '#F8BBD9';
                      e.target.style.transform = 'translateY(0)';
                    }}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5
              className="fw-semibold mb-3"
              style={{ color: '#F8BBD9' }}
            >
              Quick Links
            </h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.href}
                    className="text-decoration-none"
                    style={{
                      color: '#E1F5FE',
                      transition: 'all 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#F8BBD9';
                      e.target.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#E1F5FE';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5
              className="fw-semibold mb-3"
              style={{ color: '#F8BBD9' }}
            >
              Services
            </h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-2">
                  <span
                    style={{
                      color: '#E1F5FE',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span
                      style={{
                        color: '#F8BBD9',
                        marginRight: '8px',
                        fontSize: '0.7rem'
                      }}
                    >
                      ▸
                    </span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5
              className="fw-semibold mb-3"
              style={{ color: '#F8BBD9' }}
            >
              Get In Touch
            </h5>
            <div className="mb-3">
              <div
                style={{
                  color: '#E1F5FE',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}
              >
                <i className="bi bi-envelope-fill me-2" style={{ color: '#F8BBD9' }}></i>
                <a
                  href="mailto:your.email@example.com"
                  style={{
                    color: '#E1F5FE',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#F8BBD9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#E1F5FE';
                  }}
                >
                  hawisamuel631@gmail.com
                </a>
              </div>
              <div
                style={{
                  color: '#E1F5FE',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}
              >
                <i className="bi bi-telephone-fill me-2" style={{ color: '#F8BBD9' }}></i>
                <a
                  href="tel:+15551234567"
                  style={{
                    color: '#E1F5FE',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#F8BBD9';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#E1F5FE';
                  }}
                >
                  +2519-16495144
                </a>
              </div>
              <div
                style={{
                  color: '#E1F5FE',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <i className="bi bi-geo-alt-fill me-2" style={{ color: '#F8BBD9' }}></i>
                <span>Addis Ababa, ETHIOPIA</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn btn-sm fw-semibold mt-3"
              style={{
                background: 'rgba(248, 187, 217, 0.1)',
                border: '1px solid rgba(248, 187, 217, 0.3)',
                color: '#F8BBD9',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#F8BBD9';
                e.target.style.color = '#0D47A1';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                e.target.style.color = '#F8BBD9';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="bi bi-arrow-up me-1"></i>
              Back to Top
            </button>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="mt-5 pt-4">
          <Col>
            <div
              style={{
                borderTop: '1px solid rgba(248, 187, 217, 0.3)',
                paddingTop: '20px'
              }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div
                  style={{
                    color: '#E1F5FE',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                    
                  }}
                >
                  © {currentYear} Hawi Samuel. All rights reserved.
                </div>
                <div
                  style={{
                    color: '#E1F5FE',
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}
                >
                  Made with <span style={{ color: '#F8BBD9' }}>♥</span> using React & Bootstrap
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;