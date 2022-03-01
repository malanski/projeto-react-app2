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

      <SwitchMode className='box'>
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/habilidades' element={<Habilidades />} />
            <Route path='/projetos' element={<Projetos />} />
          </Routes>
            
     
          

      </SwitchMode>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
