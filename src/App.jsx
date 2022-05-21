import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { headerTitle, scoreTitle, scoreResult, gameTitle, gameResult, rulesTitle, rulesInfo, buttonTitle, buttonTitleRestart, test } from './styles/text.module.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className={headerTitle}>Hello Vite + React!</p>
        <p className={scoreTitle}>Hello Vite + React!</p>
        <p className={scoreResult}>Hello Vite + React!</p>
        <p className={gameTitle}>Hello Vite + React!</p>
        <p className={gameResult}>Hello Vite + React!</p>
        <p className={rulesTitle}>Hello Vite + React!</p>
        <p className={rulesInfo}>Hello Vite + React!</p>
        <p>
          <button className={`${buttonTitle} ${test}`} type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button className={buttonTitleRestart} type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
