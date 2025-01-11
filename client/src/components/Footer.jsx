import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

// Wrapper for the entire layout


// Main content area


// Footer container
const FooterContainer = styled.footer`
  background-color: #4CAF50;
  color: #ffffff;
  text-align: center;
  padding: 2rem 0;
`;

// Footer content styling
const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Social media icons container
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

// Social media icon styling
const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #E8F5E9;
  }
`;

const Footer = () => {
  return (


      <FooterContainer>
        <FooterContent>
          <SocialIcons>
            <SocialIcon href="#"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#"><FaTwitter /></SocialIcon>
            <SocialIcon href="#"><FaInstagram /></SocialIcon>
          </SocialIcons>
          <p>&copy; 2025 Centre for Nutritional Healthcare</p>
          <p>centre4nutritionalhealth@gmail.com</p>
        </FooterContent>
      </FooterContainer>

  );
};

export default Footer;
