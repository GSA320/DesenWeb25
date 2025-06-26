import styled from 'styled-components';

export const Header = styled.header`
  background-color: black;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 50;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: #f59e0b;
  color: black;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d97706;
  }
`;

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1585747860715-ebba7e1a2c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  padding-top: 8rem;
  padding-bottom: 5rem;
  text-align: center;
  color: white;
`;

export const AboutSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  text-align: center;
`;

export const AboutImage = styled.img`
  padding-left: 100px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  width: 1000px;
  max-width:60%;
  height: auto;
`;

export const ServicesSection = styled.section`
  padding: 4rem 0;
  margin-left:12rem;
  background-color: #f3f4f6;
  text-align: left;
`;

export const ServicesContainer = styled.div`
  justify-content: left;
  display: flex;
  text-align: center;
  background-color:white;
`;

export const ServiceCard = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  max-width: 700px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const ServiceIcon = styled.div`
  background-color: #f59e0b;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const ServicePrice = styled.span`
  font-weight: bold;
  color: #f59e0b;
`;

export const GallerySection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  max-width:50%;
  margin-left:25%;
  &:hover {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TestimonialCard = styled.div`
  background-color: #f3f4f6;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export const TestimonialImage = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const TestimonialName = styled.h4`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  color: #f59e0b;
  margin-bottom: 1rem;
`;

export const TestimonialMessage = styled.p`
  font-style: italic;
  color: #4b5563;
  margin-top: 1rem;
`;

export const FooterSection = styled.footer`
  background-color: black;
  color: white;
  padding: 4rem 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-left:3rem;
  margin-right:3rem;
`;

export const FooterLogo = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const FooterLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f59e0b;
  }
`;

export const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.875rem;
  color: #6b7280;
`;
