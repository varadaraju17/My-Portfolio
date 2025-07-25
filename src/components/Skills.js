import React, { useState } from 'react';
import { Container, Row, Col, Badge, Button, Modal, Form } from 'react-bootstrap';
import { FaJava, FaPython, FaReact, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const initialSkills = {
  "Programming Languages": ["Java", "Python", "Snowflake", "SQL", "JavaScript"],
  "Frameworks/Libraries": ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "React.js", "Thymeleaf", "Bootstrap"],
  "Web/Backend": ["HTML5", "CSS3", "JSP", "Servlets", "JPA", "JSON", "XML", "RESTful APIs", "JWT", "Microservices"],
  "Databases/Tools": ["MySQL", "PostgreSQL", "GitHub", "Maven", "Docker", "Kubernetes", "Apache Tomcat", "Postman", "Eclipse", "VS Code"],
  "Cloud & DevOps": ["AWS (S3)", "IBM Cloud", "IBM Code Engine", "CI/CD", "API Testing", "Version Control"],
  "AI/ML Technologies": ["Machine Learning", "Generative AI", "RAG", "Prompt Tuning", "ChatGPT", "Supervised & Unsupervised Learning"]
};

const iconMap = {
  "Programming Languages": <FaJava className="me-2" />,
  "Frameworks/Libraries": <FaReact className="me-2" />,
  "Web/Backend": <FaTools className="me-2" />,
  "Databases/Tools": <FaDatabase className="me-2" />,
  "Cloud & DevOps": <FaCloud className="me-2" />,
  "AI/ML Technologies": <FaPython className="me-2" />
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const Skills = () => {
    const [skills, setSkills] = useState(initialSkills);
    const [showModal, setShowModal] = useState(false);
    const [newSkill, setNewSkill] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(initialSkills)[0]);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (newSkill.trim() !== '') {
            const updatedSkills = { ...skills };
            updatedSkills[selectedCategory] = [...updatedSkills[selectedCategory], newSkill.trim()];
            setSkills(updatedSkills);
            setNewSkill('');
            handleClose();
        }
    };

  return (
    <section id="skills" className="py-5 section-bg">
      <Container>
        <h2 className="text-center mb-5 display-4 fw-bold text-white">_Skills</h2>
        <Row>
          {Object.entries(skills).map(([category, skillList]) => (
            <Col md={6} lg={4} className="mb-4" key={category}>
              <motion.div
                className="skill-card h-100"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <div className="card-body">
                  <h4 className="card-title d-flex align-items-center text-primary">{iconMap[category]} {category}</h4>
                  <hr className="border-secondary"/>
                  <div>
                    {skillList.map(skill => (
                      <Badge pill bg="dark" className="m-1 p-2 fs-6 skill-badge" key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
            <Button variant="outline-primary" onClick={handleShow}>Add Skill</Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton> <Modal.Title>Add New Skill</Modal.Title> </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleAddSkill}>
                    <Form.Group className="mb-3"><Form.Label>Category</Form.Label><Form.Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>{Object.keys(skills).map(cat => <option key={cat} value={cat}>{cat}</option>)}</Form.Select></Form.Group>
                     <Form.Group className="mb-3"><Form.Label>Skill Name</Form.Label><Form.Control type="text" placeholder="e.g., GraphQL" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} required /></Form.Group>
                    <Button variant="primary" type="submit">Add Skill</Button>
                </Form>
            </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default Skills;