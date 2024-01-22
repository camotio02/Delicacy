import React from 'react';
import './category.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Stack, Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import manga from '../../images/manga.jpg';
import morango from '../../images/morango.jpg';
import Uva from '../../images/Uva1.png';
import Papaia from '../../images/papaia.png';
import abacate from '../../images/abacate.jpg';
import { cores } from './cores';

const fruits = [
  {
    name: 'Abacate e Manga',
    image: manga,
    itemCount: 33,
  },
  {
    name: 'Morango',
    image: morango,
    itemCount: 17,
  },
  {
    name: 'Uva',
    image: Uva,
    itemCount: 82,
  },
  {
    name: 'Abacate',
    image: abacate,
    itemCount: 66,
  },
  {
    name: 'Mamão ou Papaia',
    image: Papaia,
    itemCount: 72,
  },
];

export const CategoryItem = () => {
  const matches = useMediaQuery('(max-width:800px)');

  return (
    <>
      <Stack p={4} className="categoriaItem">
        <div className="headingText">
          <h1>
            Explorando a Diversidade da Natureza <br />
            <span>Frutas</span>
          </h1>
          <Link to="#" className="btnItem">
            Ver tudo <ArrowForwardIcon
              sx={{
                padding: '4px',
                background: 'var(--bg-color)',
                color: 'var(--text-color)',
                borderRadius: '1rem',
                fontSize: '2.2rem'

              }} />
          </Link>
        </div>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          height: 'auto',
          gap: '10px'
        }}>
          {fruits.map((fruit, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
      
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: cores[index],
                  zIndex: 2,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  width: matches ? 320 : 200,
                  borderRadius: '5px',
                  height: 190,
                  backgroundImage: `url(${fruit.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <h2>{fruit.name}</h2>
                <span>{fruit.itemCount} Item</span>
                <ArrowForwardIcon className="bx" />
              </Box>
            </Box>
          ))}
        </Box>
      </Stack>
    </>
  );
};
