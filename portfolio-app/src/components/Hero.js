import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImage from '../assets/pp_2.jpg';

const Hero = () => {
  const [isGlowing, setIsGlowing] = useState(false);

  const handleImageHover = () => {
    setIsGlowing(!isGlowing);
  };

  return (
    <section 
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(248, 187, 217, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite 2s'
        }}
      ></div>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            {/* Welcome Text */}
            <div className="mb-4">
              <h6 
                className="text-uppercase fw-bold mb-3"
                style={{ color: '#F8BBD9', letterSpacing: '3px' }}
              >
                Welcome to My Portfolio
              </h6>
              
              <h1 
                className="display-3 fw-bold mb-4"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Hi, I'm{' '}
                <span 
                  style={{ 
                    color: '#F8BBD9',
                    background: 'linear-gradient(45deg, #F8BBD9, #FF80AB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Hawi Samuel
                </span>
              </h1>
              
              <p 
                className="lead mb-5"
                style={{ 
                  color: '#E1F5FE',
                  fontSize: '1.25rem',
                  lineHeight: '1.6'
                }}
              >
                I create beautiful, functional web experiences with modern technologies. 
                Passionate about React, responsive design, and user-friendly interfaces.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <Button 
                className="px-4 py-3 fw-semibold"
                style={{
                  background: 'linear-gradient(45deg, #F8BBD9, #FF80AB)',
                  border: 'none',
                  color: '#0D47A1',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(248, 187, 217, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(248, 187, 217, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(248, 187, 217, 0.4)';
                }}
                href="#projects"
              >
                View My Work
              </Button>
              
              <Button 
                variant="outline-light"
                className="px-4 py-3 fw-semibold"
                style={{
                  border: '2px solid #F8BBD9',
                  color: '#F8BBD9',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#F8BBD9';
                  e.target.style.color = '#0D47A1';
                  e.target.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#F8BBD9';
                  e.target.style.transform = 'translateY(0)';
                }}
                href="#contact"
              >
                Get In Touch
              </Button>
            </div>
          </Col>

          {/* Hero Image - Larger Circular Version with Bootstrap Glow */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div className="position-relative d-inline-block">
              {/* Main Image Container with Bootstrap Shadow */}
              <div 
                className={`rounded-circle overflow-hidden position-relative ${
                  isGlowing ? 'shadow-glow' : 'shadow-lg'
                }`}
                style={{
                  width: '420px',
                  height: '420px',
                  border: '6px solid rgba(248, 187, 217, 0.8)',
                  background: 'linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)',
                  cursor: 'pointer',
                  transition: 'all 0.5s ease',
                  zIndex: 2
                }}
                onMouseEnter={() => !isGlowing && setIsGlowing(true)}
                onClick={handleImageHover}
              >
                <img 
                  src={profileImage} 
                  alt="Hawi Samuel" 
                  className="w-100 h-100"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Bootstrap-style Glow Effect */}
              <div 
                className={`rounded-circle position-absolute ${isGlowing ? 'pulse-glow' : ''}`}
                style={{
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'conic-gradient(from 0deg, #F8BBD9, #FF80AB, #0D47A1, #880E4F, #F8BBD9)',
                  zIndex: 1,
                  opacity: isGlowing ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  filter: 'blur(20px)'
                }}
              ></div>

              {/* Instruction Text */}
              <div 
                className="mt-4"
                style={{
                  color: '#E1F5FE',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  opacity: 0.8
                }}
              >
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Scroll Indicator */}
      <div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ color: '#F8BBD9' }}
      >
        <div className="d-flex flex-column align-items-center">
          <span className="mb-2" style={{ fontSize: '0.9rem' }}>Scroll Down</span>
          <div 
            style={{
              width: '2px',
              height: '30px',
              background: '#F8BBD9',
              animation: 'bounce 2s infinite'
            }}
          ></div>
        </div>
      </div>

      {/* Add CSS animations with proper Bootstrap-like styling */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          /* Bootstrap-like Glow Animation */
          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(248, 187, 217, 0.6),
                          0 0 40px rgba(128, 29, 78, 0.4),
                          0 0 60px rgba(248, 187, 217, 0.2);
              transform: scale(1);
            }
            50% {
              box-shadow: 0 0 30px rgba(248, 187, 217, 0.8),
                          0 0 60px rgba(248, 187, 217, 0.6),
                          0 0 90px rgba(248, 187, 217, 0.4);
              transform: scale(1.02);
            }
          }

          /* Conic Gradient Rotation */
          @keyframes rotateConic {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* Pulse Glow for Outer Ring */
          .pulse-glow {
            animation: rotateConic 3s linear infinite, 
                       glowPulse 2s ease-in-out infinite;
          }

          /* Shadow Glow Class */
          .shadow-glow {
            box-shadow: 0 0 25px rgba(248, 187, 217, 0.7),
                        0 0 50px rgba(248, 187, 217, 0.5),
                        0 0 75px rgba(248, 187, 217, 0.3) !important;
            animation: gentlePulse 3s ease-in-out infinite;
          }

          @keyframes gentlePulse {
            0%, 100% {
              box-shadow: 0 0 25px rgba(248, 187, 217, 0.7),
                          0 0 50px rgba(248, 187, 217, 0.5),
                          0 0 75px rgba(248, 187, 217, 0.3);
            }
            50% {
              box-shadow: 0 0 35px rgba(248, 187, 217, 0.8),
                          0 0 70px rgba(248, 187, 217, 0.6),
                          0 0 105px rgba(248, 187, 217, 0.4);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 992px) {
            .rounded-circle {
              width: 350px !important;
              height: 350px !important;
            }
          }

          @media (max-width: 576px) {
            .rounded-circle {
              width: 280px !important;
              height: 280px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;