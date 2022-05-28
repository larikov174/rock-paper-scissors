import styled from 'styled-components';
import rulesImage from '../assets/rules.svg';
import closeBtn from '../assets/close-btn.svg';

const Overlay = styled.div`
  display: ${(props) => (props.status ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  background-color: #000000b0;
`;

const ImageWrapper = styled.div`
  width: 500px;
  height: auto;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
  z-index: 2;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  position: relative;
  top: 0;
  left: 94%;
  width: 35px;
  height: 35px;
  border: none;
  background-color: transparent;
  background-image: url(${closeBtn});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    will-change: opacity;
    transition: opacity 0.4s;
  }
  &:active {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
`;

const Modal = ({ isOpened, isClosed }) => {
  const handleClick = () => isClosed();
  return (
    <Overlay status={isOpened} onClick={handleClick}>
      <ImageWrapper>
        <StyledButton onClick={handleClick} />
        <StyledImage src={rulesImage} />
      </ImageWrapper>
    </Overlay>
  );
};

export default Modal;
