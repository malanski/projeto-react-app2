import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import retrato01 from './images/retrato01.jpg';
import retrato02 from './images/retrato02.jpg';
import retratoAmelie from './images/retratoAmelie.jpg';
import caveira from './images/caveira.jpeg';
import retratoSherlok from './images/retratoSherlok.jpg';
import retratoOriental from './images/retratoOriental.jpg';
import damaLeques from './images/damaLeques.jpg';
import desenho00 from './images/desenho00.jpeg';
import spiderman from './images/spiderman.jpeg';
import oriental1 from './images/oriental1.jpeg';
import oriental02 from './images/oriental02.jpeg';
import onepunchman from './images/onepunchman.jpeg';

export default function ListImages() {
  return (
    <ImageList sx={{ width: '100%', height: 'auto' }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: retrato01,
    title: 'Bed',
  },
  {
    img: oriental1,
    title: 'Kitchen',
  },
  {
    img: retrato02,
    title: 'Sink',
  },
  {
    img: caveira,
    title: 'Books',
  },
  {
    img: retratoAmelie,
    title: 'Chairs',
  },
  {
    img: spiderman,
    title: 'Candle',
  },
  {
    img: desenho00,
    title: 'Laptop',
  },
  {
    img: retratoSherlok,
    title: 'Doors',
  },
  {
    img: onepunchman,
    title: 'Coffee',
  },
  {
    img: retratoOriental,
    title: 'Storage',
  },
  {
    img: oriental02,
    title: 'Coffee table',
  },
  {
    img: damaLeques,
    title: 'Blinds',
  },
];
