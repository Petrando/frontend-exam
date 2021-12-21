import { Box, Grid, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material/'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from "../../../styles/components/pages/search/SearchCard.module.css"

const SearchCard = ({data, idx}) => {
  const {width} = useWindowDimensions();

  const cardImage = idx%3===0?"black-dog":(idx + 1)%3===0?"city":"bambi";
  return (
      <Box className={styles.card}>
        <CardMedia
          component="img"
          height={width<=414?"222.67":"146"}
          image={`/images/${cardImage}.png`}
          alt="card image"
          styles={{marginBottom:"0px"}}
        />
        <Box className={styles.cardContent}>          
            <h5 className={styles.cardTitle}>This is a title</h5>                    
            <p className={styles.username}>by{' '}{data.username}</p>          
        </Box>        
      </Box>      
  )
}

export default SearchCard;