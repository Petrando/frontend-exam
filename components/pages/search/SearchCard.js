import { Box, Card, CardActions, CardContent, CardMedia } from '@mui/material/';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions.js';
import { useStyles } from '../../../styles/components/pages/search/SearchCard.module.js';

export const SearchCard = ({data, idx}) => {
  const classes = useStyles();
  const {width} = useWindowDimensions();

  //Match displayed images with figma desktop
  const cardImage = idx%3===0?'black-dog':(idx + 1)%3===0?'city':'bambi';

  return (
    <Box className={classes.card}>
      <CardMedia
        component='img'
        height={ width<=414?'222.67':'146' }
        image={ `/images/${cardImage}.png` }
        alt='card image'
        styles={{ marginBottom:'0px' }}
      />
      <Box className={classes.cardContent}>          
          <h5 className={classes.cardTitle}>This is a title</h5>                    
          <p className={classes.username}>by{' '}{data.username}</p>          
      </Box>        
    </Box>      
  );
}