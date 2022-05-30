import styled from 'styled-components';
import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas: 
	'rock scissors'
	'paper paper';
	justify-items: center;
	width: 100%;
	min-height: 500px;
	margin-top: 20px;
`;

const Image = styled.img`
  grid-area: ${(props) => props.area};
  width: clamp(150px, 200px, 30vw);
  height: clamp(150px, 200px, 30vw);
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

const PickScreen = ({ onImagePick }) => {
	const imageArray = ['rock', 'scissors', 'paper'];
	const npcPick = imageArray[Math.floor(Math.random() * 3)];

  const handleClick = (e) => {
		const playerPick = e.target.id;
    onImagePick({ playerPick, npcPick });
  };
	
  return (
		<StyledContainer>
			<Image id='rock' src={rock} area="rock" onClick={handleClick}/>
			<Image id='scissors' src={scissors} area="scissors" onClick={handleClick}/>
			<Image id='paper' src={paper} area="paper" onClick={handleClick}/>
		</StyledContainer>
  );
};

export default PickScreen;
