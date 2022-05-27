import styled from 'styled-components';
import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';

const Container = styled.svg`
  width: 100%;
  height: auto;
	transform: translateY(min(5vw, 50px));
`;

const StyledCircle = styled.circle`
  &:hover {
    box-shadow: 0 0 10px 30px #ffffff24;
		filter: drop-shadow(0 0 30px rgb(255 255 255 / 0.4));
    cursor: pointer;
    will-change: opacity;
    transition: filter 0.3s;
  }
  &:active {
    filter: drop-shadow(0 0 20px rgb(187 187 187));
  }
`;

const PickScreen = ({ onImagePick }) => {
  const onClickNavigation = (e) => {
    onImagePick({ id: e.target.id });
  };
  return (
      <Container viewBox="0 0 900 900">
        <defs>
          <pattern
            id="rock"
            x="0"
            y="0"
            width="1"	
            height="1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice">
            <image width="100" height="100" href={rock} />
          </pattern>
          <pattern
            id="scissors"
            x="0"
            y="0"
            width="1"	
            height="1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice">
            <image width="100" height="100" href={scissors} />
          </pattern>
          <pattern
            id="paper"
            x="0"
            y="0"
            width="1"	
            height="1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice">
            <image width="100" height="100" href={paper} />
          </pattern>
        </defs>
				<polyline points="300,200 600,200 450,500 300,200" style={{fill: 'none'}} stroke='#0000003b' strokeWidth='20'/>
        <StyledCircle cx={300} cy={200} r={120} fill="url(#rock)" />
        <StyledCircle cx={600} cy={200} r={120} fill="url(#scissors)" />
        <StyledCircle cx={450} cy={500} r={120} fill="url(#paper)" />	
      </Container>
  );
};

export default PickScreen;
