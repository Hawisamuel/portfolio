import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profileImage from '../assets/pp_2.jpg';

const Hero = () => {
  const [isGlowing, setIsGlowing] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const fullText = "Hi, I'm Hawi Samuel";
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      setDisplayText(prev => {
        if (!isDeleting && prev === fullText) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
          return prev;
        }
        
        if (isDeleting && prev === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          return prev;
        }
        
        if (!isDeleting) {
          return fullText.slice(0, prev.length + 1);
        } else {
          return fullText.slice(0, prev.length - 1);
        }
      });
    };
    
    timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText, loopNum]);

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
                WELCOME TO MY PORTFOLIO
              </h6>
              
              {/* Typing Animation for Name - FIXED: Responsive font size */}
              <h1 
                className="fw-bold mb-4"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
                  minHeight: 'auto'
                }}
              >
                <span 
                  style={{ 
                    color: '#F8BBD9',
                    background: 'linear-gradient(45deg, #F8BBD9, #FF80AB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    borderRight: '3px solid #F8BBD9',
                    paddingRight: '5px'
                  }}
                >
                  {displayText}
                </span>
                <span style={{ opacity: 0.7, fontSize: '0.9em' }}>_</span>
              </h1>
              
              {/* Updated Description */}
              <p 
                className="mb-4"
                style={{ 
                  color: '#E1F5FE',
                  fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                  lineHeight: '1.6'
                }}
              >
                I build beautiful FullStack applications, streamline operations as a Virtual Assistant,
                and secure digital identities with PKI engineering.
              </p>
              
              <p 
                className="mb-4"
                style={{ 
                  color: '#F8BBD9',
                  fontSize: 'clamp(0.95rem, 3.5vw, 1.1rem)',
                  lineHeight: '1.6',
                  fontStyle: 'italic'
                }}
              >
                Three skills. One mission: Creating technology that works seamlessly and securely.
              </p>
              
              {/* Skills List with Checkmarks */}
              <div className="mb-5" style={{ color: '#E1F5FE' }}>
                <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#F8BBD9', fontSize: '1.3rem' }}>✓</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>Modern Web and App Development</span>
                </div>
                <div className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#F8BBD9', fontSize: '1.3rem' }}>✓</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>Professional Virtual Assistance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#F8BBD9', fontSize: '1.3rem' }}>✓</span>
                  <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>Enterprise PKI & Cybersecurity</span>
                </div>
              </div>
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
                  fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
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
                  fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
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

          {/* Hero Image */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div className="position-relative d-inline-block">
              <div 
                className={`rounded-circle overflow-hidden position-relative ${
                  isGlowing ? 'shadow-glow' : 'shadow-lg'
                }`}
                style={{
                  width: 'clamp(250px, 40vw, 420px)',
                  height: 'clamp(250px, 40vw, 420px)',
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
          <span className="mb-2" style={{ fontSize: 'clamp(0.75rem, 3vw, 0.9rem)' }}>Scroll Down</span>
          <div 
            style={{
              width: '2px',
              height: 'clamp(20px, 5vw, 30px)',
              background: '#F8BBD9',
              animation: 'bounce 2s infinite'
            }}
          ></div>
        </div>
      </div>

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

          @keyframes rotateConic {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .pulse-glow {
            animation: rotateConic 3s linear infinite, 
                       glowPulse 2s ease-in-out infinite;
          }

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

          /* Responsive adjustments for image */
          @media (max-width: 992px) {
            .rounded-circle {
              width: 350px !important;
              height: 350px !important;
            }
          }

          @media (max-width: 576px) {
            .rounded-circle {
              width: 250px !important;
              height: 250px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;