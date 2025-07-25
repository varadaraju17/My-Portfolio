import React, { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const publicKey = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                setAlertVariant('success');
                setAlertMessage('Message sent successfully!');
                setShowAlert(true);
                form.current.reset();
            }, (error) => {
                setAlertVariant('danger');
                setAlertMessage('Failed to send message. Please try again.');
                setShowAlert(true);
            });
    };

  return (
    <section id="contact" className="py-5 section-bg">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-white">_Contact Me</h2>
        <motion.div className="skill-card" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.3}} transition={{duration: 1}}>
            <div className="card-body">
                <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                        <h3 className="mb-4 text-white">Get in Touch</h3>
                        <p className="contact-info"><FaMapMarkerAlt className="me-2 text-primary" /> Bengaluru, Karnataka, India</p>
                        <p className="contact-info"><FaEnvelope className="me-2 text-primary" /> <a href="mailto:varada883@gmail.com">varada883@gmail.com</a></p>
                        <p className="contact-info"><FaWhatsapp className="me-2 text-primary" /> <a href="https://wa.me/919606662332" target="_blank" rel="noopener noreferrer">Message me on WhatsApp</a></p>
                    </Col>
                    <Col md={6}>
                        <h3 className="mb-4 text-white">Send a Message</h3>
                        {showAlert && <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>{alertMessage}</Alert>}
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3"><Form.Control type="text" name="user_name" placeholder="Your Name" required className="form-control-dark" /></Form.Group>
                            <Form.Group className="mb-3"><Form.Control type="email" name="user_email" placeholder="Your Email" required className="form-control-dark" /></Form.Group>
                            <Form.Group className="mb-3"><Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required className="form-control-dark" /></Form.Group>
                            <Button variant="primary" type="submit" className="w-100 social-btn-glow">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
