import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import {Home} from './pages/Home';
import {Contato} from './pages/Contato';
import {Habilidades} from './pages/Habilidades';
import {Projetos} from './pages/Projetos';


import './App.css';
import SwitchMode from "./SwitchMode";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <SwitchMode className='box' />
         
      </BrowserRouter>
    </div>
  );
}

export default App;
