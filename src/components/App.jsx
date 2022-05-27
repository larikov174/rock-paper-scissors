import React, {useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ImageContext from '../context/ImageContext';
import styled from 'styled-components';
import Header from './Header';
import PickScreen from './PickScreen';
import GambleScreen from './GambleScreen';
import Footer from './Footer';

const MainPage = styled.div`
  width: min(900px, 100%);
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GameContainer = styled.article`
  width: 100%;
  min-height: 350px;
  margin-top: 164px;
  display: flex;
  justify-content: center;
`;

const App = () => {
	const navigate = useNavigate();
	const [imagePick, setImagePick] = useState(null);
	const handleImagePick = ({id}) => {
		setImagePick(id);
		navigate('game')
	}

  return (
    <MainPage>
      <Header />
			<ImageContext.Provider value={imagePick}>
      <Routes>
        <Route path="/" element={<PickScreen onImagePick={handleImagePick}/>} />
        <Route path="game" element={<GambleScreen image={imagePick}/>} />
      </Routes>
			</ImageContext.Provider>
      <Footer />
    </MainPage>
  );
};

export default App;
