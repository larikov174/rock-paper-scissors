import styled from 'styled-components';
import Header from './Header';

const App = () => {
  const MainPage = styled.div`
    width: min(938px, 100%);
		margin: 0 auto;
  `;

  return (
    <MainPage>
      <Header />
      {/* <Game /> */}
      {/* <Footer /> */}
    </MainPage>
  );
};

export default App;
