import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hawisamuel631@gmail.com',
      link: 'mailto:hawisamuel631@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+251916495144',
      link: 'tel:+251916495144'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Arba Minch, Ethiopia',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Hawi Samuel',
      link: 'https://www.linkedin.com/in/hawi-samuel-69bb67344'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_2grqkwm',        // Your Service ID
        'template_wdefsp3',       // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'hawisamuel631@gmail.com',
          reply_to: formData.email
        },
        'AOjOYvyxsgwemGRaw'      // Your Public Key
      );

      if (result.text === 'OK') {
        setAlertType('success');
        setAlertMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
        setShowAlert(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setAlertType('danger');
      setAlertMessage('Sorry, there was an error sending your message. Please try again or contact me directly at hawisamuel631@gmail.com');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <section 
      id="contact"
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
          top: '20%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(248, 187, 217, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}
      ></div>
      
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(13, 71, 161, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite 2s'
        }}
      ></div>

      <Container>
        {/* Contact Header */}
        <Row className="mb-5">
          <Col className="text-center">
            <h6 
              className="text-uppercase fw-bold mb-3"
              style={{ 
                color: '#F8BBD9',
                letterSpacing: '3px'
              }}
            >
              Get In Touch
            </h6>
            <h2 
              className="display-4 fw-bold mb-4"
              style={{ 
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Let's Work Together
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
              className="mt-4 mx-auto"
              style={{ 
                color: '#E1F5FE',
                fontSize: '1.1rem',
                maxWidth: '600px',
                lineHeight: '1.6'
              }}
            >
              I'm always interested in new opportunities, whether it's a freelance project, 
              collaboration, or full-time position. Let's discuss how we can bring your ideas to life!
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Contact Information */}
          <Col lg={4}>
            <div className="mb-5">
              <h3 
                className="fw-bold mb-4"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                Contact Information
              </h3>
              <p 
                style={{ 
                  color: '#E1F5FE',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}
              >
                Feel free to reach out through any of these methods. I typically respond 
                within 24 hours and would be happy to discuss your project requirements.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index}
                    className="border-0 mb-3"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-center">
                        <div 
                          style={{
                            fontSize: '1.8rem',
                            marginRight: '1rem'
                          }}
                        >
                          {method.icon}
                        </div>
                        <div>
                          <h6 
                            className="mb-1 fw-bold"
                            style={{ color: '#F8BBD9' }}
                          >
                            {method.title}
                          </h6>
                          <a 
                            href={method.link}
                            className="text-decoration-none"
                            style={{ color: '#E1F5FE' }}
                            onMouseEnter={(e) => {
                              e.target.style.color = '#F8BBD9';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = '#E1F5FE';
                            }}
                          >
                            {method.value}
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={8}>
            <Card 
              className="border-0 shadow-lg"
              style={{
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(248, 187, 217, 0.3)'
              }}
            >
              <Card.Body className="p-4 p-md-5">
                {showAlert && (
                  <Alert 
                    variant={alertType}
                    className="border-0"
                    style={{
                      background: alertType === 'success' 
                        ? 'linear-gradient(45deg, #F8BBD9, #FF80AB)'
                        : 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                      color: alertType === 'success' ? '#0D47A1' : '#FFFFFF',
                      borderRadius: '15px',
                      border: 'none'
                    }}
                  >
                    <i className={`bi bi-${alertType === 'success' ? 'check-circle' : 'exclamation-triangle'}-fill me-2`}></i>
                    {alertMessage}
                  </Alert>
                )}

                <h3 
                  className="fw-bold mb-4"
                  style={{ 
                    color: '#0D47A1',
                    textAlign: 'center'
                  }}
                >
                  Send Me a Message
                </h3>

                <Form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label 
                          className="fw-semibold"
                          style={{ color: '#455A64' }}
                        >
                          Full Name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid rgba(13, 71, 161, 0.2)',
                            padding: '0.75rem 1rem',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#0D47A1';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 71, 161, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13, 71, 161, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="Enter your full name"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label 
                          className="fw-semibold"
                          style={{ color: '#455A64' }}
                        >
                          Email Address *
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid rgba(13, 71, 161, 0.2)',
                            padding: '0.75rem 1rem',
                            fontSize: '1rem'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#0D47A1';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 71, 161, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13, 71, 161, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="Enter your email address"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label 
                          className="fw-semibold"
                          style={{ color: '#455A64' }}
                        >
                          Subject *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid rgba(13, 71, 161, 0.2)',
                            padding: '0.75rem 1rem',
                            fontSize: '1rem'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#0D47A1';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 71, 161, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13, 71, 161, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="What is this regarding?"
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Form.Group className="mb-4">
                        <Form.Label 
                          className="fw-semibold"
                          style={{ color: '#455A64' }}
                        >
                          Message *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          style={{
                            borderRadius: '12px',
                            border: '2px solid rgba(13, 71, 161, 0.2)',
                            padding: '0.75rem 1rem',
                            fontSize: '1rem',
                            resize: 'vertical'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#0D47A1';
                            e.target.style.boxShadow = '0 0 0 0.2rem rgba(13, 71, 161, 0.1)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'rgba(13, 71, 161, 0.2)';
                            e.target.style.boxShadow = 'none';
                          }}
                          placeholder="Tell me about your project or inquiry..."
                        />
                      </Form.Group>
                    </Col>

                    <Col xs={12}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-100 py-3 fw-semibold"
                        style={{
                          background: isSubmitting 
                            ? 'linear-gradient(45deg, #78909C, #B0BEC5)' 
                            : 'linear-gradient(45deg, #0D47A1, #880E4F)',
                          border: 'none',
                          color: 'white',
                          borderRadius: '15px',
                          fontSize: '1.1rem',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 8px 25px rgba(13, 71, 161, 0.4)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                          }
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2"></i>
                            Send Message
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
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

export default Contact;