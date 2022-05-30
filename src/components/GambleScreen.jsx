import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  margin-top: 50px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    'playerPickText ... housePickText'
    'playerPickImage resultTitle housePickImage'
    'playerPickImage actionButton housePickImage'
    'playerPickImage ... housePickImage';
  @media screen and (max-width: 700px) {
    grid-row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr repeat(3, 1fr);
    grid-template-areas:
      'playerPickImage housePickImage'
      'playerPickText housePickText'
      'resultTitle resultTitle'
      'actionButton actionButton';
  }
`;

const Image = styled.img`
  grid-area: ${(props) => props.area};
  width: clamp(150px, 300px, 30vw);
  height: clamp(150px, 300px, 30vw);
  position: ${(props) => props.position};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  border-radius: 50%;
  &:hover {
    box-shadow: 0 0 10px 30px #ffffff24;
    cursor: pointer;
    will-change: transform;
    transition: box-shadow 0.3s;
  }
  &:active {
    box-shadow: 0 0 20px #bbbbbb;
  }
`;

const Title = styled.p`
  text-align: center;
  align-self: center;
  font-size: clamp(16px, 24px, 5vw);
  grid-area: ${(props) => props.area};
`;

const StyledTitle = styled(Title)`
  font-size: clamp(50px, 56px, 5vw);
  font-weight: 700;
`;

const StyledButton = styled.button`
  grid-area: actionButton;
  color: #3b4262;
  font-size: 16px;
  letter-spacing: 2.5px;
  width: 220px;
  height: 48px;
  &:hover {
    cursor: pointer;
  }
`;

const GambleScreen = ({ playerPick, npcPick, score }) => {
  const navigate = useNavigate();
  const [resultTitle, setResultTitle] = useState('заголовок');
	
  const handleClick = () => navigate('/');
	
  const handleWin = () => {
		setResultTitle('Ты выиграл!');
    score({ value: 1 });
  };
	
  const handleLoose = () => {
    setResultTitle('Ты проиграл!');
    score({ value: -1 });
  };
	
  const handleDraw = () => {
		setResultTitle('Ничья!');
    score({ value: 0 });
  };

  useEffect(() => {
    if (playerPick === npcPick) return handleDraw();
    if ((playerPick = 'rock' && npcPick === 'scissors')) return handleWin();
    if ((playerPick = 'rock' && npcPick === 'paper'))  return handleLoose();
    if ((playerPick = 'scissors' && npcPick === 'paper'))  return handleWin();
    if ((playerPick = 'scissors' && npcPick === 'rock'))  return handleLoose();
    if ((playerPick = 'paper' && npcPick === 'rock'))  return handleWin();
    if ((playerPick = 'paper' && npcPick === 'scissors'))  return handleLoose();
  }, []);

  return (
    <Container>
      <Title area="playerPickText">Ты выбрал</Title>
      <Image src={`src/assets/${playerPick}.svg`} area="playerPickImage" />
      <Title area="housePickText">Компьютер выбрал</Title>
      <Image src={`src/assets/${npcPick}.svg`} area="housePickImage" />
      <StyledTitle area="resultTitle">{resultTitle}</StyledTitle>
      <StyledButton type="button" onClick={handleClick}>
        Играем ещё?
      </StyledButton>
    </Container>
  );
};

export default GambleScreen;
