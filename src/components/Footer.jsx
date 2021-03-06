import styled from 'styled-components';

const Container = styled.footer`
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 0 32px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: 'credits rules';
`;

const Credential = styled.p`
  grid-area: credits;
  text-transform: none;
`;

const Rules = styled.button`
  grid-area: rules;
  width: 128px;
  height: 40px;
  background-color: transparent;
  box-shadow: none;
  border: 1px solid #ffffff;
  border-radius: 8px;
  justify-self: self-end;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 0.4s;
  }
  &:active {
    text-shadow: 1px -5px 12px #bbbbbb;
    box-shadow: 0 0 12px #bbbbbb;
    transition: box-shadow 0.1s, text-shadow 0.1s;
  }
`;

const Footer = ({ onModalOpen }) => {
  const currentDate = new Date();
  const handleClick = () => onModalOpen({ visible: true });
  return (
    <Container>
      <Credential>&copy; {currentDate.getFullYear()} Андрей Лариков</Credential>
      <Rules onClick={handleClick}>правила</Rules>
    </Container>
  );
};

export default Footer;
