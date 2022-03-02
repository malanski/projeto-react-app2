import { Switch } from '@mui/material';
import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import BtnGallery from './BtnGallery';
import BtnModal from './BtnModal';
import BtnTattoos from './BtnTattoos';
import Header from './Header';

import logo from './logo.svg';
import { Contato } from './pages/Contato';
import { Habilidades } from './pages/Habilidades';
import { Home } from './pages/Home';
import { Projetos } from './pages/Projetos';

export default class SwitchMode extends React.Component {
    constructor(props) {
      super(props);
      this.state = {addClass: false}
    }
    toggle() {
      this.setState({addClass: !this.state.addClass});
    }
    render() {
        let boxClass = ["box"];
        if(this.state.addClass) {
        boxClass.push('green');
    }
        return(
            <div className={boxClass.join(' ')}>
              <HashRouter>

                <Switch onClick={this.toggle.bind(this)} />
            
                <div >
                    {this.state.addClass ? "Remove a class" : "Add a class (click the box)"}<br />
                </div>
                <Header />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/contato' element={<Contato />} />
                    <Route path='/habilidades' element={<Habilidades />} />
                    <Route path='/projetos' element={<Projetos />} />
                </Routes>

                <BtnGallery />

                <BtnModal />
                <BtnTattoos />

                <footer>
                <a
                className="App-link"
                href="https://github.com/malanski/projeto-react-app2"
                target="_blank"
                rel="noopener noreferrer"
                >
                Repository
                </a>
                <img src={logo} className="App-logo" alt="logo" />
                </footer>     
              </HashRouter>

            </div>    
            
        );
    }
}