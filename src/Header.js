import * as React from 'react';
import { Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import HomeIcon from '@mui/icons-material/Home';



export default function Header() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    /* event.preventDefault(); */
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ 
      width: '100%',
      marginTop: '0'}}
      value={value}
      onChange={handleChange}> 

      <Link to="/">
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon className='header-btn' />}>
        </BottomNavigationAction>
      </Link>
            
      <BottomNavigationAction
        label="Contato"
        value="contato"
        icon={<Link to="/contato"><LinkedInIcon /></Link>} />

      <BottomNavigationAction
        label="Habilidades"
        value="habilidades"
        icon={<Link to="/habilidades"><SportsMartialArtsIcon /></Link>} />

      <BottomNavigationAction
        label="Projetos"
        value="projetos"
        icon={<Link to="/projetos"><GitHubIcon /></Link>} />
    </BottomNavigation>
  );
}
