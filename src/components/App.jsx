import { useState, useEffect } from 'react';
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
  const [image, setImage] = useState('');
	const [npcPick, setNpcPick] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const handleImagePick = ({ playerPick, npcPick }) => {
    setImage(playerPick);
		setNpcPick(npcPick);
    navigate('game');
  };

  const handleModalOpen = ({ visible }) => setIsOpened(visible);

  const handleModalClose = () => setIsOpened(false);

  const handleScore = ({ value }) => setGameScore(() => gameScore + value);

  useEffect(() => {
    const handleKeyPress = (e) => e.key === 'Escape' && handleModalClose();

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <MainPage>
      <Header score={gameScore} />
      <ImageContext.Provider value={image}>
        <Routes>
          <Route path="/" element={<PickScreen onImagePick={handleImagePick} />} />
          <Route path="game" element={<GambleScreen playerPick={image} npcPick={npcPick} score={handleScore} />} />
        </Routes>
      </ImageContext.Provider>
      <Footer onModalOpen={handleModalOpen} />
      <Modal isOpened={isOpened} isClosed={handleModalClose} />
    </MainPage>
  );
};

export default App;
