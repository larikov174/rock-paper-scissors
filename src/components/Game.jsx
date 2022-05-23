import styled from 'styled-components';
import PickScreen from './PickScreen';

const GameContainer = styled.article`
  width: 100%;
  min-height: 350px;
	margin-top: 164px;
  display: flex;
	justify-content: center;
`;

const Game = () => {
  return (
    <GameContainer>
      <PickScreen />
    </GameContainer>
  );
};

export default Game;