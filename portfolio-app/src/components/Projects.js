import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AMU Clinic Management System',
      description: 'A comprehensive clinic management system developed for Arba Minch University. Features patient registration, appointment scheduling, medical records management, and billing system.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      featured: true
    },
    {
      id: 2,
      title: 'Certificate Management System',
      description: 'A secure certificate management system for issuing, verifying, and managing digital certificates. Built with modern web technologies to ensure secure and efficient certificate operations.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'JWT', 'REST API'],
      featured: true
    },
    {
      id: 3,
      title: 'EthioGregor Mobile App',
      description: 'A feature-rich mobile application built for Ethiopian users. Provides seamless user experience with intuitive design and robust functionality.',
      technologies: ['Java', 'Android', 'XML', 'SQLite', 'Firebase'],
      featured: false
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and Bootstrap, featuring smooth animations and a professional design.',
      technologies: ['React', 'Bootstrap', 'CSS3', 'HTML5'],
      featured: false
    },
    {
      id: 5,
      title: 'Event Management Platform',
      description: 'An event management platform that allows users to create, manage, and promote events. Includes ticket booking, payment processing, and attendee management features.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'jQuery', 'CSS3'],
      featured: true
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Online Certification',
      date: '2023',
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript']
    },
    {
      id: 2,
      title: 'UI/UX Design',
      issuer: 'Design Certification',
      date: '2023',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping']
    },
    {
      id: 3,
      title: 'Mobile App Development',
      issuer: 'Development Program',
      date: '2023',
      skills: ['React Native', 'Firebase', 'API Integration', 'Mobile UI']
    }
  ];

  return (
    <section 
      id="projects"
      style={{
        background: 'linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)',
        minHeight: '100vh',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(248, 187, 217, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite 2s'
        }}
      ></div>

      <Container>
        {/* Projects Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h6 
              className="text-uppercase fw-bold mb-3"
              style={{ 
                color: '#F8BBD9',
                letterSpacing: '3px'
              }}
            >
              My Work
            </h6>
            <h2 
              className="display-4 fw-bold mb-4"
              style={{ 
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Featured Projects
            </h2>
            <div 
              style={{
                width: '80px',
                height: '4px',
                background: '#F8BBD9',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            ></div>
            <p 
              className="mt-3"
              style={{ 
                color: '#E1F5FE',
                fontSize: '1rem',
                opacity: 0.9
              }}
            >
              Here are some of my recent works and personal projects
            </p>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4 mb-5 justify-content-center">
          {projects.map((project) => (
            <Col lg={4} md={6} key={project.id}>
              <Card 
                className="h-100 border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                }}
              >
                {/* Project Image Header */}
                <div 
                  style={{
                    height: '200px',
                    background: `linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Project Icon based on title */}
                  <div 
                    style={{
                      fontSize: '3rem',
                      color: '#F8BBD9',
                      opacity: '0.8'
                    }}
                  >
                    {project.title.includes('Certificate') && '📜'}
                    {project.title.includes('Clinic') && '🏥'}
                    {project.title.includes('EthioGregor') && '📱'}
                    {project.title.includes('Portfolio') && '🎨'}
                    {project.title.includes('Event') && '🎉'}
                    {!project.title.includes('Certificate') && 
                     !project.title.includes('Clinic') && 
                     !project.title.includes('EthioGregor') && 
                     !project.title.includes('Portfolio') && 
                     !project.title.includes('Event') && '💼'}
                  </div>
                  
                  {project.featured && (
                    <Badge 
                      bg=""
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'linear-gradient(45deg, #F8BBD9, #FF80AB)',
                        color: '#0D47A1',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        fontWeight: 'bold'
                      }}
                    >
                      ⭐ Featured
                    </Badge>
                  )}
                </div>

                <Card.Body className="p-4">
                  <Card.Title 
                    className="fw-bold mb-3"
                    style={{ 
                      color: '#0D47A1',
                      fontSize: '1.3rem'
                    }}
                  >
                    {project.title}
                  </Card.Title>
                  
                  <Card.Text 
                    style={{ 
                      color: '#455A64',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      minHeight: '80px'
                    }}
                  >
                    {project.description}
                  </Card.Text>

                  {/* Technologies */}
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="me-2 mb-2"
                        style={{
                          background: 'rgba(248, 187, 217, 0.2)',
                          color: '#880E4F',
                          border: '1px solid rgba(248, 187, 217, 0.5)',
                          fontSize: '0.8rem',
                          padding: '0.4rem 0.8rem'
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Certificates Section */}
        <Row className="mt-5">
          <Col className="text-center mb-5">
            <h6 
              className="text-uppercase fw-bold mb-3"
              style={{ 
                color: '#F8BBD9',
                letterSpacing: '3px'
              }}
            >
              Achievements
            </h6>
            <h2 
              className="display-4 fw-bold mb-4"
              style={{ 
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Certificates & Awards
            </h2>
            <div 
              style={{
                width: '80px',
                height: '4px',
                background: '#F8BBD9',
                margin: '0 auto',
                borderRadius: '2px'
              }}
            ></div>
            <p 
              className="mt-3"
              style={{ 
                color: '#E1F5FE',
                fontSize: '1rem',
                opacity: 0.9
              }}
            >
              Professional certifications and recognition
            </p>
          </Col>
        </Row>

        {/* Certificates Grid - UPDATED with Full Stack instead of MERN */}
        <Row className="g-4 justify-content-center">
          {certificates.map((certificate) => (
            <Col lg={4} md={6} key={certificate.id}>
              <Card 
                className="h-100 border-0 shadow"
                style={{
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Card.Body className="p-4">
                  <div className="text-center mb-3">
                    <div 
                      style={{
                        fontSize: '2.5rem',
                        color: '#0D47A1',
                        marginBottom: '1rem'
                      }}
                    >
                      {certificate.title.includes('Full Stack') && '🌟'}
                      {certificate.title.includes('UI/UX') && '🎨'}
                      {certificate.title.includes('Mobile') && '📱'}
                    </div>
                  </div>
                  
                  <Card.Title 
                    className="fw-bold text-center mb-3"
                    style={{ 
                      color: '#0D47A1',
                      fontSize: '1.1rem'
                    }}
                  >
                    {certificate.title}
                  </Card.Title>
                  
                  <div className="text-center mb-3">
                    <Badge
                      style={{
                        background: 'linear-gradient(45deg, #F8BBD9, #FF80AB)',
                        color: '#0D47A1',
                        border: 'none',
                        fontSize: '0.8rem',
                        padding: '0.4rem 1rem'
                      }}
                    >
                      {certificate.issuer}
                    </Badge>
                  </div>

                  <div 
                    className="text-center mb-3"
                    style={{ 
                      color: '#880E4F',
                      fontWeight: '600'
                    }}
                  >
                    {certificate.date}
                  </div>

                  {/* Skills Gained */}
                  <div className="text-center">
                    {certificate.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="me-1 mb-1"
                        style={{
                          background: 'rgba(13, 71, 161, 0.1)',
                          color: '#0D47A1',
                          fontSize: '0.7rem',
                          padding: '0.3rem 0.6rem'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Stats or Call to Action */}
        <Row className="mt-5">
          <Col className="text-center">
            <p style={{ color: '#E1F5FE', fontSize: '0.9rem' }}>
              🚀 Total Projects: {projects.length} • ⭐ Featured Projects: {projects.filter(p => p.featured).length}
            </p>
          </Col>
        </Row>
      </Container>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;