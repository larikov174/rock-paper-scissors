import styled from 'styled-components';
import rulesImage from '../assets/rules.svg';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
	display: flex;
  position: absolute;
  overflow: hidden;
  background-color: #000000;
  opacity: 0.2;
`;

const StyledImage = styled.img`
  width: 20vw;
  height: auto;
  margin: auto;
	background-color: #ffffff;
	border-radius: 15px;
`;

const Modal = () => {
  return (
    <Overlay>
      <StyledImage src={rulesImage} />
    </Overlay>
  );
};

export default Modal;
