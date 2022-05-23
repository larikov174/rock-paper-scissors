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

const PickScreen = () => {
  return (
    <>
      <Container>
        <Image src={rock} position="relative" top="-90px" left="-50%" />
        <Image src={scissors} position="relative" top="-90px" left="0%" />
        <Image src={paper} position="relative" top="130px" left="-360px" />
      </Container>
      <svg>
        <defs>
          <pattern
            id="imgpattern"
            x="0"
            y="0"
            width="1"
            height="1"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice">
            <image width="100" height="100" href='https://i.pinimg.com/originals/e9/e0/b2/e9e0b2dc797104d5479796e99ee55fcd.jpg' />
          </pattern>
        </defs>
        <circle cx={750} cy={50} r={100} fill="url(#imgpattern)" />
      </svg>
    </>
  );
};

export default PickScreen;
