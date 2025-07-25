import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const initialProjects = [
  {
    title: "PHARMA ASSIST",
    description: "A Spring Boot backend to streamline pharmacy operations, integrating inventory tracking, order processing, and automated billing. Reduced manual data entry by 40% and secured the application with Spring Security.",
    techStack: "Java8, Spring Boot, Spring Security, Thymeleaf, Hibernate, MySQL",
    githubLink: "https://github.com/varadaraju17/Pharma-Assist"
  },
  {
    title: "ONLINE LIBRARY MANAGEMENT SYSTEM",
    description: "Engineered a library system monitoring over 2,000 items, reducing transaction processing time by 25%. Improved SQL queries for a 30% boost in data retrieval speed.",
    techStack: "Java8, Spring Boot, Spring Security, Hibernate, MySQL",
    githubLink: "#"
  }
];

const Projects = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [showModal, setShowModal] = useState(false);
    const [newProject, setNewProject] = useState({ title: '', description: '', techStack: '', githubLink: '' });

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject(prev => ({ ...prev, [name]: value }));
    };

    const handleAddProject = (e) => {
        e.preventDefault();
        setProjects(prev => [...prev, newProject]);
        setNewProject({ title: '', description: '', techStack: '', githubLink: '' });
        handleClose();
    };

  return (
    <section id="projects" className="py-5 section-bg">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-white">_Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <motion.div
                className="skill-card h-100"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title fw-bold text-primary">{project.title}</h4>
                  <p className="text-light">{project.description}</p>
                  <div className="mt-auto">
                    <p className="fw-bold text-light">Tech Stack:</p>
                    <p className="text-primary" style={{fontStyle: "italic"}}>{project.techStack}</p>
                    <Button href={project.githubLink} target="_blank" variant="outline-primary">
                      <FaGithub /> GitHub
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
            <Button variant="primary" onClick={handleShow}>Add Project</Button>
        </div>
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton> <Modal.Title>Add New Project</Modal.Title> </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddProject}>
                    <Form.Group className="mb-3"><Form.Label>Project Title</Form.Label><Form.Control type="text" name="title" value={newProject.title} onChange={handleChange} required /></Form.Group>
                     <Form.Group className="mb-3"><Form.Label>Description</Form.Label><Form.Control as="textarea" rows={3} name="description" value={newProject.description} onChange={handleChange} required /></Form.Group>
                     <Form.Group className="mb-3"><Form.Label>Tech Stack (comma-separated)</Form.Label><Form.Control type="text" name="techStack" value={newProject.techStack} onChange={handleChange} required /></Form.Group>
                     <Form.Group className="mb-3"><Form.Label>GitHub Link</Form.Label><Form.Control type="url" name="githubLink" value={newProject.githubLink} onChange={handleChange} /></Form.Group>
                    <Button variant="primary" type="submit">Add Project</Button>
                </Form>
            </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Projects;