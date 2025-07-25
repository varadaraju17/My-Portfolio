import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white text-center py-4 mt-5">
      <Container>
        <p className="mb-0">&copy; {new Date().getFullYear()} Varadaraju NY. Crafted with ❤️.</p>
      </Container>
    </footer>
  );
};

export default Footer;