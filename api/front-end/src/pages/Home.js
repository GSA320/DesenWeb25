import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  HeaderContainer,
  Logo,
  Navbar,
  Button,
  HeroSection,
  AboutSection,
  AboutContainer,
  AboutImage,
  ServicesSection,
  ServicesContainer,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServicePrice,
  GallerySection,
  GalleryContainer,
  GalleryItem,
  GalleryImage,
  TestimonialsSection,
  TestimonialsContainer,
  TestimonialCard,
  TestimonialImage,
  TestimonialName,
  TestimonialRating,
  TestimonialMessage,
  FooterSection,
  FooterContainer,
  FooterLogo,
  FooterSocialLinks,
  FooterLink,
  FooterCopyright,
} from '../styles/homeStyle';


const Home = () => {
  return (
    <div>
      <Header>
        <HeaderContainer>
          <div className="flex items-center">
            <i className="fas fa-cut text-amber-500 text-3xl mr-2"></i>
            <Logo>BARBER<span className="text-amber-500">STUDIO</span></Logo>
          </div>
          
          <Navbar>
            <Link to="/Home" className="text-amber-500 font-semibold">Clientes</Link>
            <Link to="/" className="hover:text-amber-500 transition">Serviços</Link>
            <Link to="/CadastroBarbeiro" className="hover:text-amber-500 transition">Barbeiros</Link>
            <Link to="#" className="hover:text-amber-500 transition">Galeria</Link>
            <Link to="/Agendamento" className="hover:text-amber-500 transition">Contato</Link>
          </Navbar>
          <a href='/Agendamento'>
          <Button className="hidden md:block">Agendar Horário</Button>
          </a>
        </HeaderContainer>
      </Header>

      <HeroSection>
  <h2 className="text-4xl md:text-6xl font-bold mb-6">ESTILO E TRADIÇÃO</h2>
  <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
    Corte de cabelo e barba com a qualidade que você merece
  </p>
  <div className="flex flex-col md:flex-row justify-center gap-4">
    <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition">
      Agendar Agora
    </button>
    <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition">
      Nossos Serviços
    </button>
  </div>
</HeroSection>

<AboutSection>
  <div className="container mx-auto px-6">
    <AboutContainer>
      <AboutImage src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Barbearia" />
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">SOBRE NOSSA BARBEARIA</h2>
        <p className="text-gray-600 mb-6">
          Na BarberStudio, combinamos técnicas tradicionais com os últimos estilos para oferecer a você um serviço de qualidade superior. Nossos barbeiros são altamente qualificados e apaixonados pelo que fazem.
        </p>
        <p className="text-gray-600 mb-8">
          Fundada em 2010, nos tornamos referência em cortes masculinos e cuidados com a barba. Nosso ambiente foi projetado para proporcionar conforto e uma experiência única.
        </p>
      </div>
    </AboutContainer>
  </div>
</AboutSection>


    <ServicesSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">NOSSOS SERVIÇOS </h2>

      <ServicesContainer>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-cut text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Corte de Cabelo</ServiceTitle>
            <ServiceDescription>
              Corte moderno ou clássico, feito por nossos especialistas com técnicas precisas.
            </ServiceDescription>
            <ServicePrice>A partir de R$ 50,00</ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-male text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Barba</ServiceTitle>
            <ServiceDescription>
              Modelagem completa da barba com toalha quente e finalização com produtos premium.
            </ServiceDescription>
            <ServicePrice>A partir de R$ 40,00</ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-spa text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Tratamento Capilar</ServiceTitle>
            <ServiceDescription>
              Hidratação e tratamento para cabelo e couro cabeludo com produtos profissionais.
            </ServiceDescription>
            <ServicePrice>A partir de R$ 80,00</ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-paint-brush text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Coloração</ServiceTitle>
            <ServiceDescription>
              Coloração profissional para cobrir fios brancos ou mudar seu visual.
            </ServiceDescription>
            <ServicePrice>A partir de R$ 120,00</ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-child text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Corte Infantil</ServiceTitle>
            <ServiceDescription>
              Ambiente especializado para crianças com profissionais pacientes e experientes.
            </ServiceDescription>
            <ServicePrice>A partir de R$ 35,00</ServicePrice>
          </ServiceCard>

          <ServiceCard>
            <ServiceIcon>
              <i className="fas fa-gem text-white text-3xl"></i>
            </ServiceIcon>
            <ServiceTitle>Pacote Completo</ServiceTitle>
            <ServiceDescription>
              Corte, barba, hidratação e massagem relaxante em um único pacote.
            </ServiceDescription>
            <ServicePrice>R$ 150,00</ServicePrice>
          </ServiceCard>
        </div>
      </ServicesContainer>
    </ServicesSection>



    <GallerySection>
      <GalleryContainer>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">GALERIA</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <GalleryItem>
            <GalleryImage
              src="https://images.unsplash.com/photo-1520338661084-680395057c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Trabalho 1"
            />
          </GalleryItem>

          {/* Item 2 */}
          <GalleryItem>
            <GalleryImage
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Trabalho 2"
            />
          </GalleryItem>

          {/* Item 3 */}
          <GalleryItem>
            <GalleryImage
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Trabalho 3"
            />
          </GalleryItem>
        </div>
      </GalleryContainer>
    </GallerySection>


    <TestimonialsSection>
      <TestimonialsContainer>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">DEPOIMENTOS</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard>
            <TestimonialImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente 1" />
            <TestimonialName>Roberto Almeida</TestimonialName>
            <TestimonialRating>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </TestimonialRating>
            <TestimonialMessage>
              "Melhor barbearia da cidade! O Carlos corta meu cabelo há anos e nunca decepcionou. Ambiente limpo e profissional."
            </TestimonialMessage>
          </TestimonialCard>

          {/* Testimonial 2 */}
          <TestimonialCard>
            <TestimonialImage src="https://randomuser.me/api/portraits/men/22.jpg" alt="Cliente 2" />
            <TestimonialName>Pedro Costa</TestimonialName>
            <TestimonialRating>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </TestimonialRating>
            <TestimonialMessage>
              "O Marcos é um artista com a barba! Sempre saio de lá renovado. Recomendo o pacote completo, vale cada centavo."
            </TestimonialMessage>
          </TestimonialCard>

          {/* Testimonial 3 */}
          <TestimonialCard>
            <TestimonialImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 3" />
            <TestimonialName>Ana Beatriz</TestimonialName>
            <TestimonialRating>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </TestimonialRating>
            <TestimonialMessage>
              "Levo meu filho desde pequeno e ele adora! O João tem uma paciência incrível com crianças. Ambiente super acolhedor."
            </TestimonialMessage>
          </TestimonialCard>
        </div>
      </TestimonialsContainer>
    </TestimonialsSection>


    <FooterSection>
      <FooterContainer>
        <div className="flex items-center">
          <i className="fas fa-cut text-amber-500 text-3xl mr-2"></i>
          <FooterLogo>
            BARBER<span className="text-amber-500">STUDIO</span>
          </FooterLogo>
        </div>

        <FooterSocialLinks>
          <FooterLink href="#" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </FooterLink>
          <FooterLink href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </FooterLink>
          <FooterLink href="#" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </FooterLink>
        </FooterSocialLinks>
      </FooterContainer>

      <FooterCopyright>
        <p>&copy; 2023 BarberStudio. Todos os direitos reservados.</p>
        <p>Desenvolvido com paixão por cortes perfeitos.</p>
      </FooterCopyright>
    </FooterSection>

    </div>

    
  );
};

export default Home;