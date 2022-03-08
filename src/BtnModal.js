import * as React from 'react';
import { styled, Box } from '@mui/system';
import Button from '@mui/material/Button';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  color: 'white',

  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

export default function BtnModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="large"
            onClick={handleOpen}
            aria-label="move selected right"
          >
          Ulisses Malanski</Button>

      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 className='modal-title' id="unstyled-modal-title">Sobre Ulisses Malanski</h2>
          <p className='modal' id="unstyled-modal-description">
          &ensp;&ensp;Sou Desenvolvedor Web, minha carreira profissional começou no setor de pesquisa (Museu) onde trabalhei dois anos.<br></br>
          &ensp;&ensp;Atuei como Arte-Educador, por 7 anos em escolas públicas e também como Tatuador Autônomo por 5 anos, onde desenvolvi ilustrações e outros tipos de design.<br></br>
          &ensp;&ensp;Hoje me encontro na área de tecnologia (Front-end + Back-end), e estou pulando de cabeça na Computação, pois quero mesclar meus conhecimentos em arte e design com a engenharia de softwares e também aprender e desenvolver projetos com novas linguagens de programação.<br></br>
          &ensp;&ensp;No meu tempo livre busco conhecer novas tecnologias, compor algumas musicas experimentais e criar desenhos e animações. 
          </p>
        </Box>
      </StyledModal>
    </div>
  );
}
