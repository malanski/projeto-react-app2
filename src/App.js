import logo from './logo.svg';
import Header from './Header';
import BotaoEstado from './BotaoEstado';
import BtnModal from './BtnModal';
import ListImages from './ListImages';
import BtnText from './BtnText';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
          <BotaoEstado />
          <BtnModal />
          <BtnText />
          <ListImages />

        <a
          className="App-link"
          href="https://github.com/malanski/projeto-react-app2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </header>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  );
}

export default App;
