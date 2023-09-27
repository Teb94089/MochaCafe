import React from 'react';
import styled from 'styled-components';
import serviceBackground from '../assets/summer.jpg';
import service1Icon from '../assets/history.png';
import service2Icon from '../assets/coffee.png';
import service3Icon from '../assets/coffee-maker.png';
import service4Icon from '../assets/philosophy.png';
import service5Icon from '../assets/cloud-connection.png';
import service6Icon from '../assets/sustainability.png';
import { TitleStyles, ButtonStyles } from './ReusableStyles';

const Service = ({ icon, title, description, buttonText }) => (
  <ServiceContainer>
    <ServiceIcon src={icon} alt={`${title} Icon`} />
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
    <ServiceButton>{buttonText}</ServiceButton>
  </ServiceContainer>
);

const Services = () => (
  <Section id="services">
    <BackgroundImage src={serviceBackground} alt="Background Image" />
    <ServiceSection>
      <ServiceTitle className="yellow">About Mocha Cafe</ServiceTitle>
      <ServiceDescription>
        Welcome to Mocha Cafe, where the passion for coffee and the love of community come together to create an exceptional experience. Inspired by the vibrant coffee culture of places, we set out on a journey to craft a unique space that not only serves exceptional coffee but also fosters meaningful connections.
      </ServiceDescription>
    </ServiceSection>
    <ServiceSection>
      <ServiceTitle className="yellow">Our Story</ServiceTitle>
      <ServiceDescription>
        Mocha Cafe's story begins with a deep-rooted love for the art of coffee-making. Our founder, Yolanda Tebeni, embarked on a mission to create a cafe that captures the essence of great coffee and the warmth of human connections. Drawing inspiration from the rich coffee traditions found across the globe, we set out to bring a taste of the world to your neighborhood.
      </ServiceDescription>
    </ServiceSection>
    <ServicesGrid>
      <Service icon={service1Icon} title="Our Story" description="Mocha Cafe's story begins with a deep-rooted love for the art of coffee-making. Our founder, Yolanda Tebeni, embarked on a mission to create a cafe that captures the essence of great coffee and the warmth of human connections." buttonText="Read More" />
      <Service icon={service2Icon} title="The Mocha Experience" description="Step into Mocha Cafe, and you'll instantly feel the inviting ambiance that sets us apart. Our cafe is designed to be your sanctuary—a place where you can savor a meticulously brewed cup of coffee while immersing yourself in a community of like-minded individuals." buttonText="Discover" />
      <Service icon={service3Icon} title="Coffee Culture" description="At the heart of our cafe is an unwavering commitment to the art and science of coffee. We source the finest beans from around the world, carefully roast them to perfection, and skillfully prepare each cup with dedication. Our baristas are passionate about their craft, ensuring that every sip of our coffee is a journey in itself." buttonText="Explore" />
      <Service icon={service4Icon} title="Our Menu Philosophy" description="Our menu is a testament to our dedication to quality and variety. From our handcrafted espresso beverages to our delectable pastries and artisanal sandwiches, we take pride in offering an array of choices that cater to every palate. Be sure to explore our signature Mocha creations that are sure to tantalize your taste buds." buttonText="View Menu" />
      <Service icon={service5Icon} title="Community Connection" description="Our menu is a testament to our dedication to quality and variety. From our handcrafted espresso beverages to our delectable pastries and artisanal sandwiches, we take pride in offering an array of choices that cater to every palate. Be sure to explore our signature Mocha creations that are sure to tantalize your taste buds." buttonText="Join Us" />
      <Service icon={service6Icon} title="Sustainability" description="Our menu is a testament to our dedication to quality and variety. From our handcrafted espresso beverages to our delectable pastries and artisanal sandwiches, we take pride in offering an array of choices that cater to every palate. Be sure to explore our signature Mocha creations that are sure to tantalize your taste buds." buttonText="Learn More" />
    </ServicesGrid>
  </Section>
);

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: brightness(60%);
`;

const ServiceSection = styled.div`
  margin-top: 4rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ServiceIcon = styled.img`
  height: 100px;
`;

const ServiceTitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const ServiceDescription = styled.p`
  margin-top: 1rem;
`;

const ServiceButton = styled.button`
  ${ButtonStyles};
  margin-top: 1rem;
`;

export default Services;
