import styled from 'styled-components';

const MainContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin: 48px auto 0;
  border: 3px solid rgba(255, 255, 255, 0.28);
  border-radius: 15px;
  width: 100%;
  min-height: 150px;
  @media screen and (max-width: 800px) {
    padding: 0 23px;
  }
  @media screen and (max-width: 375px) {
    border-radius: 5px;
  }
`;

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled.span`
  font-weight: 700;
  font-size: clamp(21px, 40px, 5vw);
  line-height: clamp(16px, 32px, 1em);
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  width: clamp(80px, 150px, 25vw);
  padding: 16px;
  @media screen and (max-width: 375px) {
    margin-left: 10px;
    padding: 10px;
  }
`;

const ScoreTitle = styled.p`
  font-size: clamp(10px, 16px, 5vw);
  line-height: clamp(12px, 19px, 0.5em);
  color: #2a45c2;
`;

const ScoreResult = styled.p`
  font-weight: 700;
  font-size: clamp(40px, 64px, 18vw);
  line-height: clamp(40px, 64px, 1.8em);
  color: #565468;
`;

const Header = ({ score }) => {
  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>камень</MainTitle>
        <MainTitle>ножницы</MainTitle>
        <MainTitle>бумага</MainTitle>
      </TitleContainer>
      <ScoreContainer>
        <ScoreTitle>очки</ScoreTitle>
        <ScoreResult>{score}</ScoreResult>
      </ScoreContainer>
    </MainContainer>
  );
};

export default Header;
