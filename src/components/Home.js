import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <h1 className="display-2 fw-bolder text-white">
                Hi, I'm Varadaraju N Y
              </h1>
              <TypeAnimation
                sequence={[
                  'A Java Full Stack Developer', 2000,
                  'An AI & Cloud Enthusiast', 2000,
                    'A Data Enginner', 2000,
                    'A Data Analyst', 2000,
                  'A Problem Solver', 2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-primary display-6"
                repeat={Infinity}
              />
              <p2 className="lead text-light mt-3">
I'm a passionate Software Engineer with a strong foundation in Java Full Stack Development, AI, Cloud Computing, and Data Engineering. I build scalable applications using Java, Spring Boot, React.js, Python, and REST APIs, with solid experience in MySQL, PostgreSQL, Snowflake, and AWS.
Through the HPE Software Engineering Job Simulation and IBM SkillsBuild x Edunet Internship, I’ve worked on cloud-native apps, applied Agile practices, and explored technologies like Generative AI and Prompt Tuning. I enjoy turning ideas into real-world solutions and aim to grow as a Full Stack or Cloud/Data Engineer
</p2>
              <div className="mt-4">
                <Button href="https://linkedin.com/in/varadarajuny" target="_blank" variant="outline-primary" className="me-3 social-btn-glow">
                  <FaLinkedin /> LinkedIn
                </Button>
                <Button href="https://github.com/varadaraju17" target="_blank" variant="outline-primary" className="me-3 social-btn-glow">
                  <FaGithub /> GitHub
                </Button>
                <Button 
  href={process.env.PUBLIC_URL + "/VARADARAJU_NY_Software_Engg_RESUME.pdf"} 
  target="_blank" 
  variant="outline-primary" 
  className="social-btn-glow"
>
  <FaFilePdf /> Resume
</Button>
              </div>
            </motion.div>
          </Col>
          <Col md={5} className="text-center d-none d-md-block">
             <motion.div 
                className="home-graphic"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Image 
  src={process.env.PUBLIC_URL + "/profile-pic.jpg"} 
  alt="Varadaraju NY" 
  className="profile-pic-glow"
  onError={(e) => { 
    e.target.onerror = null; 
    e.target.src='https://placehold.co/400x400/000000/00FF00?text=VNY'; 
  }}
/>
             </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Home;
