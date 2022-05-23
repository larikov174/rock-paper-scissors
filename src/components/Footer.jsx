import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  min-height: 100px;
  margin: 0 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
    'credits'
    'rules';
`;
const Credential = styled.p`
  grid-area: credits;
  text-transform: none;
`;
const Rules = styled.button`
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
    transition: opacity 0.15s ease-in;
    transform: scale(1.001);
    will-change: transform;
    transition: 0.3s;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Credential>2022.Андрей Лариков(c)</Credential>
      <Rules>правила</Rules>
    </Container>
  );
};

export default Footer;
