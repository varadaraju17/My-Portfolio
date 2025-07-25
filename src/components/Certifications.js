import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

const initialCertifications = [
  { name: "Java Full stack Development", issuer: "J Spiders, Bengaluru", image: "/cert1.jpg" },
  { name: "Snowflake Development", issuer: "All Pro Trainings", image: "/cert2.jpg" },
  { name: "Getting Started with AI", issuer: "IBM SkillsBuild", image: "/cert3.jpg" },
  { name: "Journey to Cloud", issuer: "IBM SkillsBuild", image: "/cert4.jpg" },
  { name: "Basic Python Programing", issuer: "upGrad", image: "/cert5.jpg" },
];

const Certifications = () => {
    const [certs, setCerts] = useState(initialCertifications);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
    const [newCert, setNewCert] = useState({ name: '', issuer: '', image: '' });

    const handleShowAdd = () => setShowAddModal(true);
    const handleCloseAdd = () => setShowAddModal(false);

    const handleShowView = (cert) => { setSelectedCert(cert); setShowViewModal(true); };
    const handleCloseView = () => setShowViewModal(false);

    const handleChange = (e) => { const { name, value } = e.target; setNewCert(prev => ({ ...prev, [name]: value })); };

    const handleAddCert = (e) => {
        e.preventDefault();
        const certToAdd = { ...newCert, image: `/new-cert-${Date.now()}.jpg` };
        setCerts(prev => [...prev, certToAdd]);
        setNewCert({ name: '', issuer: '', image: '' });
        handleCloseAdd();
    };

  return (
    <section id="certifications" className="py-5 section-bg">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-white">_Certifications</h2>
        <Row>
          {certs.map((cert, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <motion.div className="skill-card h-100 text-center" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.5}} transition={{delay: index * 0.1}}>
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold text-primary">{cert.name}</h5>
                  <p className="text-light mb-2">{cert.issuer}</p>
                  <Button variant="link" className="text-primary mt-auto" onClick={() => handleShowView(cert)}>View Certificate</Button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
            <Button variant="primary" onClick={handleShowAdd}>Add Certificate</Button>
        </div>
        <Modal show={showViewModal} onHide={handleCloseView} centered size="lg">
            <Modal.Header closeButton className="bg-dark text-light border-primary">
                <Modal.Title>{selectedCert?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center bg-dark p-0">
                <Image src={selectedCert?.image} fluid onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/000000/00FF00?text=Image+Not+Found'; }}/>
            </Modal.Body>
        </Modal>
        <Modal show={showAddModal} onHide={handleCloseAdd}>
            <Modal.Header closeButton><Modal.Title>Add New Certificate</Modal.Title></Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddCert}>
                    <Form.Group className="mb-3"><Form.Label>Certificate Name</Form.Label><Form.Control type="text" name="name" value={newCert.name} onChange={handleChange} required /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Issuer</Form.Label><Form.Control type="text" name="issuer" value={newCert.issuer} onChange={handleChange} required /></Form.Group>
                    <Form.Group className="mb-3"><Form.Label>Certificate Image</Form.Label><Form.Control type="file" name="image" accept="image/*" /><Form.Text className="text-muted">For demo purposes, this won't actually upload.</Form.Text></Form.Group>
                    <Button variant="primary" type="submit">Add Certificate</Button>
                </Form>
            </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Certifications;