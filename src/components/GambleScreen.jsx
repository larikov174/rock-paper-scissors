import styled from 'styled-components';
import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';

const Container = styled.section`
  width: 100%;
  height: clamp(188px, 287px, 50vw);
  display: grid;
	justify-items: center;
	padding: 0 32px;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    'playerPickText resultArea housePickText'
    'playerPickImage resultArea housePickImage';
`;

const Image = styled.img`
  grid-area: ${(props) => props.area};
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

const Title = styled.p`
  grid-area: ${(props) => props.area};
	align-self: center;
`;

const GambleScreen = () => {
  return (
    <Container>
      <Title area="playerPickText">Ты выбрал</Title>
      <Image src={rock} area="playerPickImage" />
      <Title area="housePickText">Компьютер выбрал</Title>
      <Image src={paper} area="housePickImage" />
      {/* <Image src={scissors} area="resultArea" /> */}
    </Container>
  );
};

export default GambleScreen;
