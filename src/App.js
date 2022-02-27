import logo from './logo.svg';
import Header from './Header';
import ListImages from './ListImages';
import BtnModal from './BtnModal';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
          
          <BtnModal />
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