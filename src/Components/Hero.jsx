import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
 
  const [currentImage, setCurrentImage] = useState(0);

 
  const images = [
    'https://i.pinimg.com/564x/a1/1b/e5/a11be5486d821ab70212b0dec5206f42.jpg',
    'https://i.pinimg.com/474x/b0/f0/2a/b0f02ad6e579c8f29ebc3e13379e000b.jpg',
    'https://i.pinimg.com/474x/5c/6f/03/5c6f039477981324d84cc338f93f832d.jpg'
  ];

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container fluid className="hero-section">
      <Row className="align-items-center">
        <Col md={6} className="hero-left order-md-1 order-2">
          <h1>Save Lives, Donate Blood</h1>
          <h3>Your donation can make a difference</h3>
          <Button className="donate-button" href='#appointment'>Donate</Button>
        </Col>
        <Col md={6} className="hero-right order-md-2 order-1 d-flex justify-content-center">
          <img src={images[currentImage]} alt="Blood Donation" className="hero-image"/>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
