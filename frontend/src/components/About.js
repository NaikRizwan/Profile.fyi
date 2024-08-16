import React from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Mission = styled.div`
  margin-bottom: 2rem;
`;

const Vision = styled.div`
  margin-bottom: 2rem;
`;

const Values = styled.div`
  margin-bottom: 2rem;
`;

const About = () => {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <Description>
        Welcome to Profile.fyi, your trusted e-commerce destination for all your
        needs. We are committed to providing you with the best products and
        services, focusing on reliability, customer service, and uniqueness.
      </Description>
      <Mission>
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality products that combine performance with value
          pricing, while establishing a successful relationship with our
          customers and our suppliers.
        </p>
      </Mission>
      <Vision>
        <h2>Our Vision</h2>
        <p>
          To be the leading e-commerce platform, recognized for our
          customer-centric approach and our innovative solutions that make
          online shopping a delightful experience.
        </p>
      </Vision>
      <Values>
        <h2>Our Values</h2>
        <p>
          We value integrity, customer focus, creativity, and efficient and
          nimble actions. We are committed to continuous improvement in our
          services, products, and ourselves.
        </p>
      </Values>
    </AboutUsContainer>
  );
};

export default About;
