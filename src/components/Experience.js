import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';

const initialExperience = [
    {
        role: "AI & Cloud Technologies Intern",
        company: "IBM SkillsBuild x Edunet Foundation",
        duration: "July 2025 - August 2025",
        description: "Learned core concepts of AI and Cloud Computing. Built and deployed cloud-based applications using IBM Code Engine and applied Agile methodologies."
    },
    {
        role: "Software Engineering Job Simulation",
        company: "Hewlett Packard Enterprise (Forage)",
        duration: "September 2024",
        description: "Designed and implemented a RESTful web service in Java Spring Boot to manage employee data. Developed a web server to handle HTTP requests and created unit tests."
    }
];

const Experience = () => {
    const [experience, setExperience] = useState(initialExperience);
    const [showModal, setShowModal] = useState(false);
    const [newExperience, setNewExperience] = useState({ role: '', company: '', duration: '', description: '' });

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewExperience(prev => ({ ...prev, [name]: value }));
    };

    const handleAddExperience = (e) => {
        e.preventDefault();
        setExperience(prev => [newExperience, ...prev]);
        setNewExperience({ role: '', company: '', duration: '', description: '' });
        handleClose();
    };

  return (
    <section id="experience" className="py-5 section-bg">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-white">_Experience</h2>
        <Row>
          {experience.map((exp, index) => (
            <Col md={10} lg={8} className="mx-auto mb-4" key={index}>
                <motion.div
                    className="skill-card"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.6}}
                >
                    <div className="card-body">
                        <div className="d-flex justify-content-between flex-wrap">
                            <h5 className="fw-bold text-primary">{exp.role}</h5>
                            <span className="text-light">{exp.duration}</span>
                        </div>
                        <h6 className="mb-2 text-light">{exp.company}</h6>
                        <p>{exp.description}</p>
                    </div>
                </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
            <Button variant="outline-primary" onClick={handleShow}>Add Experience</Button>
        </div>
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton><Modal.Title>Add New Experience</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddExperience}>
                    <Form.Group className="mb-3"><Form.Label>Role</Form.Label><Form.Control type="text" name="role" value={newExperience.role} onChange={handleChange} required /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Company</Form.Label><Form.Control type="text" name="company" value={newExperience.company} onChange={handleChange} required /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Duration</Form.Label><Form.Control type="text" name="duration" value={newExperience.duration} onChange={handleChange} required /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Description</Form.Label><Form.Control as="textarea" rows={3} name="description" value={newExperience.description} onChange={handleChange} required /></Form.Group>
                    <Button variant="primary" type="submit">Add Experience</Button>
                </Form>
            </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Experience;