import styled from 'styled-components';
import triangle from '../assets/triangle.svg';
import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';

const Container = styled.section`
  width: min(254px, calc(100% - 64px));
  height: clamp(188px, 287px, 50vw);
  display: flex;
  background-image: url(${triangle});
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
`;

const Image = styled.img`
  width: clamp(100px, 200px, 50vw);
  height: clamp(100px, 200px, 50vw);
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
  const onClickNavigation = (e) => {
    onImagePick({ id: e.target.id });
  };
  return (
    <>
      <Container>
        <Image id="ROCK" src={rock} position="relative" top="-90px" left="-50%" onClick={onClickNavigation} />
        <Image id="SCISSORS" src={scissors} position="relative" top="-90px" left="0%" onClick={onClickNavigation} />
        <Image src={paper} position="relative" top="130px" left="-360px" onClick={onClickNavigation} />
      </Container>
      {/* <svg>
        <defs>
          <pattern
            id="imgpattern"
            x="0"
            y="0"
            width="1"	
            height="1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice">
            <image width="100" height="100" href={rock} />
          </pattern>
        </defs>
        <circle cx={350} cy={50} r={100} fill="url(#imgpattern)" />
      </svg> */}
    </>
  );
};

export default PickScreen;
