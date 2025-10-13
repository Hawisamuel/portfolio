import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top" 
      style={{ 
        backgroundColor: 'rgba(13, 71, 161, 0.95)',
        background: 'linear-gradient(135deg, #0D47A1 0%, #880E4F 100%)',
        boxShadow: '0 4px 18px rgba(136, 14, 79, 0.3)',
        padding: '0.4rem 1rem',
        transition: 'all 0.3s ease',
        minHeight: '60px'
      }}
    >
      <div className="container">
        {/* Brand/Logo with Computer Icon + HS */}
        <a 
          className="navbar-brand fw-bold d-flex align-items-center" 
          href="#home"
          style={{ 
            color: '#F8BBD9',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            padding: '0.2rem 0',
            textDecoration: 'none'
          }}
        >
          {/* Computer Logo Container */}
          <div 
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #F8BBD9, #FF80AB)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              boxShadow: '0 4px 12px rgba(248, 187, 217, 0.3)',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            {/* Computer Screen */}
            <div 
              style={{
                width: '28px',
                height: '20px',
                paddingLeft:'0px',
                background: 'linear-gradient(135deg, #0D47A1, #880E4F)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* HS Letters */}
              <span 
                style={{
                  color: '#F8BBD9',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif',
                  letterSpacing: '-1px'
                }}
              >
                HS
              </span>
              
              {/* Screen Glare Effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '6px',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.4)',
                  borderRadius: '1px',
                  transform: 'rotate(45deg)'
                }}
              ></div>
            </div>
            
            {/* Computer Base */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '3px',
                background: 'linear-gradient(135deg, #FF80AB, #F8BBD9)',
                borderRadius: '2px'
              }}
            ></div>
          </div>
          
          {/* Brand Text */}
          <span 
            style={{
              fontSize: '1.4rem',
              background: 'linear-gradient(45deg, #F8BBD9, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '700'
            }}
          >
           Hawi Sam
          </span>
        </a>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
          style={{
            border: '1px solid #F8BBD9',
            padding: '0.2rem 0.4rem',
            width: '38px',
            height: '38px'
          }}
        >
          <span 
            className="navbar-toggler-icon"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28248, 187, 217, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
              width: '20px',
              height: '20px'
            }}
          ></span>
        </button>

        {/* Navbar Links */}
        <div 
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className="nav-link active fw-semibold mx-2" 
                aria-current="page" 
                href="#home"
                style={{
                  color: '#F8BBD9',
                  transition: 'all 0.3s ease',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0D47A1';
                  e.target.style.backgroundColor = '#F8BBD9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#F8BBD9';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold mx-2" 
                href="#about"
                style={{
                  color: '#F8BBD9',
                  transition: 'all 0.3s ease',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0D47A1';
                  e.target.style.backgroundColor = '#F8BBD9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#F8BBD9';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold mx-2" 
                href="#projects"
                style={{
                  color: '#F8BBD9',
                  transition: 'all 0.3s ease',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0D47A1';
                  e.target.style.backgroundColor = '#F8BBD9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#F8BBD9';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold mx-2" 
                href="#contact"
                style={{
                  color: '#F8BBD9',
                  transition: 'all 0.3s ease',
                  borderRadius: '20px',
                  padding: '0.3rem 0.8rem',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0D47A1';
                  e.target.style.backgroundColor = '#F8BBD9';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#F8BBD9';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;