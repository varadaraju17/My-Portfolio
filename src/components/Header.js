import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
    >
      <Container>
        <Navbar.Brand as={Link} to="home" smooth={true} duration={500} spy={true} className="fw-bold brand-logo">
            {'<VNY />'}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500} spy={true}>_home</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500} spy={true}>_skills</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} spy={true}>_projects</Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={500} spy={true}>_experience</Nav.Link>
            <Nav.Link as={Link} to="certifications" smooth={true} duration={500} spy={true}>_certs</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} spy={true}>_contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
