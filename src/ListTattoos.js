import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import tattoo01 from './images/tattoo01.jpg';
import tattoo00 from './images/tattoo00.jpg';
import tattoo02 from './images/tattoo02.jpg';
import tattoo09 from './images/tattoo09.jpg';
import tattoo06 from './images/tattoo06.jpg';
import tattoo08 from './images/tattoo08.jpg';
import tattoo07 from './images/tattoo07.jpg';
import tattoo11 from './images/tattoo11.jpeg';
import tattoo12 from './images/tattoo12.jpeg';
import tattoo04 from './images/tattoo04.jpg';
import tattoo13 from './images/tattoo13.jpeg';
import tattoo10 from './images/tattoo10.jpeg';

export default function ListTattoos() {
  return (
    <ImageList sx={{ width: "100%", height: 'auto' }} variant="woven" cols={3} gap={8}>
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
    img: tattoo01,
    title: 'lots of tattoos',
  },
  {
    img: tattoo09,
    title: 'music heart beat tattoo',
  },
  {
    img: tattoo00,
    title: 'butterfly whale meditate tattoos',
  },
  {
    img: tattoo08,
    title: 'Sun and Moon tattoo',
  },
  {
    img: tattoo02,
    title: 'Goku skull heart tattoos',
  },
  {
    img: tattoo06,
    title: 'FEather Tattoo',
  },
  {
    img: tattoo12,
    title: 'Elephant tattoo',
  },
  {
    img: tattoo13,
    title: 'set of tattoos',
  },
  {
    img: tattoo07,
    title: 'wolf tattoo',
  },
  {
    img: tattoo04,
    title: 'thunderCats tattoo',
  },
  {
    img: tattoo11,
    title: 'Rose Tattoo',
  },
  {
    img: tattoo10,
    title: 'Leo Tattoo',
  },
];
