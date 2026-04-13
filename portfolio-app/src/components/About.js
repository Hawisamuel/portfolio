import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  // Navigation functions
  const nextTab = () => {
    if (activeTab === 'story') setActiveTab('skills');
    if (activeTab === 'skills') setActiveTab('hobbies');
    if (activeTab === 'hobbies') setActiveTab('story');
  };

  const prevTab = () => {
    if (activeTab === 'story') setActiveTab('hobbies');
    if (activeTab === 'skills') setActiveTab('story');
    if (activeTab === 'hobbies') setActiveTab('skills');
  };

  // Categorized Skills with Logos (Added Spring Boot)
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
      ]
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'jQuery', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
        { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      title: 'Dev Tools',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' }
      ]
    }
  ];

  const interests = [
    { icon: '🎨', name: 'Design' },
    { icon: '📚', name: 'Reading & Writing' },
    { icon: '🏋️', name: 'Fitness & Sports' },
    { icon: '✈️', name: 'Travel' },
    { icon: '🎵', name: 'Music' }
  ];

  // Get current tab icon for display
  const getTabIcon = () => {
    if (activeTab === 'story') return '📖';
    if (activeTab === 'skills') return '💻';
    return '🎯';
  };

  return (
    <section 
      id="about"
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
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(248, 187, 217, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite 2s'
        }}
      ></div>

      <Container>
        {/* Section Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h6 
              className="text-uppercase fw-bold mb-3"
              style={{ 
                color: '#F8BBD9',
                letterSpacing: '3px'
              }}
            >
              About Me
            </h6>
            <h2 
              className="display-4 fw-bold mb-4"
              style={{ 
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Get to Know Me
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
          </Col>
        </Row>

        {/* Tab Navigation */}
        <Row className="mb-4">
          <Col className="text-center">
            <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center">
              {/* Previous Button */}
              <Button
                onClick={prevTab}
                className="px-3 py-3 fw-semibold"
                style={{
                  background: 'rgba(248, 187, 217, 0.2)',
                  border: '2px solid #F8BBD9',
                  color: '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(248, 187, 217, 0.4)';
                  e.target.style.transform = 'translateX(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                ←
              </Button>

              {/* Tab Buttons */}
              <Button
                onClick={() => setActiveTab('story')}
                className="px-4 py-3 fw-semibold"
                style={{
                  background: activeTab === 'story' 
                    ? 'linear-gradient(45deg, #F8BBD9, #FF80AB)' 
                    : 'rgba(248, 187, 217, 0.1)',
                  border: '2px solid #F8BBD9',
                  color: activeTab === 'story' ? '#0D47A1' : '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'story') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'story') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                📖 My Story
              </Button>

              <Button
                onClick={() => setActiveTab('skills')}
                className="px-4 py-3 fw-semibold"
                style={{
                  background: activeTab === 'skills' 
                    ? 'linear-gradient(45deg, #F8BBD9, #FF80AB)' 
                    : 'rgba(248, 187, 217, 0.1)',
                  border: '2px solid #F8BBD9',
                  color: activeTab === 'skills' ? '#0D47A1' : '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'skills') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'skills') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                💻 Technical Skills
              </Button>

              <Button
                onClick={() => setActiveTab('hobbies')}
                className="px-4 py-3 fw-semibold"
                style={{
                  background: activeTab === 'hobbies' 
                    ? 'linear-gradient(45deg, #F8BBD9, #FF80AB)' 
                    : 'rgba(248, 187, 217, 0.1)',
                  border: '2px solid #F8BBD9',
                  color: activeTab === 'hobbies' ? '#0D47A1' : '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'hobbies') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'hobbies') {
                    e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                🎯 Hobbies & Interests
              </Button>

              {/* Next Button */}
              <Button
                onClick={nextTab}
                className="px-3 py-3 fw-semibold"
                style={{
                  background: 'rgba(248, 187, 217, 0.2)',
                  border: '2px solid #F8BBD9',
                  color: '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(248, 187, 217, 0.4)';
                  e.target.style.transform = 'translateX(3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                →
              </Button>
            </div>
            
            {/* Current Tab Indicator */}
            <div className="mt-3">
              <small style={{ color: '#F8BBD9', opacity: 0.7 }}>
                Currently viewing: {getTabIcon()} {activeTab === 'story' ? 'My Story' : activeTab === 'skills' ? 'Technical Skills' : 'Hobbies & Interests'}
              </small>
            </div>
          </Col>
        </Row>

        {/* Content Area */}
        <Row>
          <Col>
            {/* My Story Tab - UPDATED WITH YOUR TEXT */}
            {activeTab === 'story' && (
              <Card 
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  animation: 'fadeIn 0.4s ease-out'
                }}
              >
                <Card.Body className="p-5">
                  <Row>
                    <Col lg={12}>
                      <h3 
                        className="fw-bold mb-4"
                        style={{ 
                          color: '#0D47A1',
                          background: 'linear-gradient(45deg, #0D47A1, #880E4F)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        My Journey in Tech
                      </h3>
                      
                      <div style={{ lineHeight: '1.8' }}>
                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          Hello! I'm Hawi Samuel, a <strong style={{ color: '#880E4F' }}>Full Stack Developer, Virtual Assistant, and Cyber Security PKI Engineer</strong> passionate about creating secure, efficient, and user-friendly digital solutions.
                        </p>
                        
                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          I studied at <strong style={{ color: '#880E4F' }}>Arba Minch University</strong>, where I've developed a unique skill set that bridges the gap between frontend aesthetics, backend functionality, and enterprise-grade security.
                        </p>

                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          My journey took an exciting turn during my internship at <strong style={{ color: '#880E4F' }}>INSA (Information Network Security Agency)</strong>, where I worked in the <strong style={{ color: '#880E4F' }}>Cyber Security PKI Operations and Development</strong> domain. This experience deepened my understanding of digital certificates, encryption, and secure identity management while giving me hands-on experience in real-world security infrastructure.
                        </p>

                        <div 
                          className="mb-4 p-4"
                          style={{
                            background: 'rgba(248, 187, 217, 0.1)',
                            borderRadius: '15px',
                            borderLeft: '4px solid #F8BBD9'
                          }}
                        >
                          <p style={{ color: '#455A64', fontSize: '1rem', marginBottom: '0.5rem' }}>
                            <strong style={{ color: '#880E4F' }}>Today, I combine three powerful roles:</strong>
                          </p>
                          <ul style={{ color: '#455A64', fontSize: '1rem', marginBottom: '0' }}>
                            <li>• As a <strong>Full Stack Developer</strong>, I build beautiful, responsive web applications</li>
                            <li>• As a <strong>Virtual Assistant</strong>, I streamline operations and boost productivity</li>
                            <li>• As a <strong>PKI Engineer</strong>, I secure digital identities and protect sensitive data</li>
                          </ul>
                        </div>

                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          <strong style={{ color: '#880E4F' }}>What drives me?</strong> A relentless commitment to learn, adapt, and grow. Technology evolves fast, and I evolve with it — constantly exploring new tools, frameworks, and security practices to stay ahead.
                        </p>

                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          When I'm not coding or securing systems, you'll find me contributing to open-source projects, exploring cybersecurity trends, or finding innovative ways to solve everyday problems with technology. <strong style={{ color: '#880E4F' }}>I also love writing.</strong>
                        </p>

                        <p 
                          className="mb-0"
                          style={{ 
                            color: '#0D47A1',
                            fontSize: '1.1rem',
                            fontStyle: 'italic',
                            fontWeight: '500'
                          }}
                        >
                          I'm always open to new challenges, collaborations, and opportunities where I can make a meaningful impact. Let's build something secure and extraordinary together! ✨
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Technical Skills Tab - UPDATED WITH SPRING BOOT */}
            {activeTab === 'skills' && (
              <Card 
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  animation: 'fadeIn 0.4s ease-out'
                }}
              >
                <Card.Body className="p-4">
                  <h4 
                    className="fw-bold mb-4 text-center"
                    style={{ 
                      color: '#0D47A1',
                      background: 'linear-gradient(45deg, #0D47A1, #880E4F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Technical Skills
                  </h4>
                  
                  <Row className="g-4">
                    {skillCategories.map((category, categoryIndex) => (
                      <Col lg={6} key={categoryIndex}>
                        <div className="h-100">
                          <h6 
                            className="fw-bold mb-3"
                            style={{ 
                              color: '#0D47A1',
                              fontSize: '1rem',
                              borderBottom: '2px solid rgba(248, 187, 217, 0.3)',
                              paddingBottom: '0.5rem'
                            }}
                          >
                            {category.title}
                          </h6>
                          <Row className="g-2">
                            {category.skills.map((skill, skillIndex) => (
                              <Col xs={6} key={skillIndex}>
                                <div 
                                  className="text-center p-2"
                                  style={{
                                    background: 'rgba(248, 187, 217, 0.1)',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(248, 187, 217, 0.2)',
                                    height: '80px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(248, 187, 217, 0.2)';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(248, 187, 217, 0.3)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = 'none';
                                  }}
                                >
                                  <img 
                                    src={skill.logo} 
                                    alt={skill.name}
                                    style={{
                                      width: '28px',
                                      height: '28px',
                                      marginBottom: '0.3rem',
                                      filter: 'grayscale(0.3)',
                                      transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.target.style.filter = 'grayscale(0)';
                                      e.target.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.target.style.filter = 'grayscale(0.3)';
                                      e.target.style.transform = 'scale(1)';
                                    }}
                                  />
                                  <div 
                                    style={{ 
                                      color: '#455A64',
                                      fontSize: '0.75rem',
                                      fontWeight: '500',
                                      lineHeight: '1.2'
                                    }}
                                  >
                                    {skill.name}
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Hobbies Tab */}
            {activeTab === 'hobbies' && (
              <Card 
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  animation: 'fadeIn 0.4s ease-out'
                }}
              >
                <Card.Body className="p-5">
                  <h4 
                    className="fw-bold mb-4 text-center"
                    style={{ 
                      color: '#0D47A1',
                      background: 'linear-gradient(45deg, #0D47A1, #880E4F)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Interests & Hobbies
                  </h4>
                  
                  <Row className="g-4 justify-content-center">
                    {interests.map((interest, index) => (
                      <Col lg={4} md={6} key={index}>
                        <div 
                          className="text-center p-4"
                          style={{
                            background: 'rgba(248, 187, 217, 0.1)',
                            borderRadius: '15px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            border: '1px solid rgba(248, 187, 217, 0.2)',
                            height: '140px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(248, 187, 217, 0.3)';
                            e.target.style.transform = 'translateY(-5px)';
                            e.target.style.boxShadow = '0 8px 20px rgba(248, 187, 217, 0.2)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(248, 187, 217, 0.1)';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }}
                        >
                          <div 
                            style={{ 
                              fontSize: '3rem',
                              marginBottom: '1rem',
                              transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.transform = 'scale(1.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.transform = 'scale(1)';
                            }}
                          >
                            {interest.icon}
                          </div>
                          <span 
                            style={{ 
                              color: '#455A64', 
                              fontSize: '1rem',
                              fontWeight: '600'
                            }}
                          >
                            {interest.name}
                          </span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  
                  {/* Added a fun writing note */}
                  <div className="text-center mt-4">
                    <p style={{ color: '#880E4F', fontSize: '0.9rem', fontStyle: 'italic' }}>
                      ✍️ "I also love writing" — always capturing thoughts and ideas
                    </p>
                  </div>
                </Card.Body>
              </Card>
            )}
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

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;