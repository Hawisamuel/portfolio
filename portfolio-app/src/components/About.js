import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  // Categorized Skills with Logos
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
            <div className="d-flex flex-wrap justify-content-center gap-3">
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
                🎯 Hobbies
              </Button>
            </div>
          </Col>
        </Row>

        {/* Content Area */}
        <Row>
          <Col>
            {/* My Story Tab */}
            {activeTab === 'story' && (
              <Card 
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  animation: 'fadeIn 0.5s ease-in'
                }}
              >
                <Card.Body className="p-5">
                  <Row className="align-items-center">
                    <Col lg={8}>
                      <h3 
                        className="fw-bold mb-4"
                        style={{ 
                          color: '#0D47A1',
                          background: 'linear-gradient(45deg, #0D47A1, #880E4F)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}
                      >
                        Passionate Developer & Creative Thinker
                      </h3>
                      
                      <div style={{ lineHeight: '1.8' }}>
                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          Hello! I'm Hawi Samuel, a passionate web developer with a love for creating 
                          beautiful and functional digital experiences. I'm currently pursuing my 
                          education at <strong style={{ color: '#880E4F' }}>Arba Minch University</strong>, 
                          where I'm honing my skills in modern web technologies.
                        </p>
                        
                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          My journey in web development started 3 years ago, and since then 
                          I've been constantly learning and adapting to new technologies. 
                          I believe in writing clean, efficient code and creating user 
                          experiences that are both intuitive and delightful.
                        </p>

                        <p 
                          className="mb-4"
                          style={{ 
                            color: '#455A64',
                            fontSize: '1.1rem'
                          }}
                        >
                          When I'm not coding or studying, you can find me exploring new design trends, 
                          contributing to open-source projects, or enjoying outdoor activities. 
                          I'm always excited to take on new challenges and collaborate on 
                          innovative projects.
                        </p>
                      </div>
                    </Col>
                    
                    <Col lg={4}>
                      <div className="text-center">
                        {/* Stats */}
                        <div className="mb-4 p-4" style={{
                          background: 'rgba(248, 187, 217, 0.1)',
                          borderRadius: '15px',
                          border: '1px solid rgba(248, 187, 217, 0.3)'
                        }}>
                          <h3 
                            className="fw-bold mb-2"
                            style={{ color: '#880E4F' }}
                          >
                            50+
                          </h3>
                          <p style={{ color: '#455A64', fontWeight: '500' }}>Projects Completed</p>
                        </div>
                        
                        <div className="mb-4 p-4" style={{
                          background: 'rgba(248, 187, 217, 0.1)',
                          borderRadius: '15px',
                          border: '1px solid rgba(248, 187, 217, 0.3)'
                        }}>
                          <h3 
                            className="fw-bold mb-2"
                            style={{ color: '#880E4F' }}
                          >
                            3+
                          </h3>
                          <p style={{ color: '#455A64', fontWeight: '500' }}>Years Experience</p>
                        </div>
                        
                        <div className="p-4" style={{
                          background: 'rgba(248, 187, 217, 0.1)',
                          borderRadius: '15px',
                          border: '1px solid rgba(248, 187, 217, 0.3)'
                        }}>
                          <h3 
                            className="fw-bold mb-2"
                            style={{ color: '#880E4F' }}
                          >
                            100%
                          </h3>
                          <p style={{ color: '#455A64', fontWeight: '500' }}>Client Satisfaction</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}

            {/* Technical Skills Tab */}
            {activeTab === 'skills' && (
              <Card 
                className="border-0 shadow-lg"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(248, 187, 217, 0.3)',
                  animation: 'fadeIn 0.5s ease-in'
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
                                      width: '24px',
                                      height: '24px',
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
                  animation: 'fadeIn 0.5s ease-in'
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