import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ImageContext from '../context/ImageContext';
import styled from 'styled-components';
import Header from './Header';
import PickScreen from './PickScreen';
import GambleScreen from './GambleScreen';
import Footer from './Footer';
import Modal from './Modal';

const MainPage = styled.div`
  width: min(900px, 100%);
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const navigate = useNavigate();
  const [imagePick, setImagePick] = useState('rock');
  const [isOpened, setIsOpened] = useState(false);
  const handleImagePick = ({ id }) => {
    setImagePick(id);
    navigate('game');
  };

  const handleModalOpen = ({ visible }) => setIsOpened(visible);

  const handleModalClose = () => setIsOpened(false);

  return (
    <MainPage>
      <Header />
      <ImageContext.Provider value={imagePick}>
        <Routes>
          <Route path="/" element={<PickScreen onImagePick={handleImagePick} />} />
          <Route path="game" element={<GambleScreen imageName={imagePick} />} />
        </Routes>
      </ImageContext.Provider>
      <Footer onModalOpen={handleModalOpen} />
      <Modal isOpened={isOpened} isClosed={handleModalClose} />
    </MainPage>
  );
};

export default App;
