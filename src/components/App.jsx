import styled from 'styled-components';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';

const MainPage = styled.div`
  width: min(938px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <MainPage>
      <Header />
      <Game />
      <Footer />
    </MainPage>
  );
};

export default App;
