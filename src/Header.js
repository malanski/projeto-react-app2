import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import HomeIcon from '@mui/icons-material/Home';

import Switch from './Switch';


export default function Header() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: '100%', marginTop: '0'}} value={value} onChange={handleChange}>
        <Switch />
        

      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Contato"
        value="contato"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        label="Habilidades"
        value="habilidades"
        icon={<SportsMartialArtsIcon />}
      />
      <BottomNavigationAction
        label="Projetos"
        value="projetos"
        icon={<GitHubIcon />} />
    </BottomNavigation>
  );
}
