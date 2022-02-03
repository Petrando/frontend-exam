import { Box } from '@mui/material';
import { Followers } from '../pages/shared/Followers.js';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.js';
import { useStyles } from '../../styles/components/layout/WithFollowers.module';

export const WithFollowersLayout = ({children, atHome}) => {
  const classes = useStyles();
  const {width} = useWindowDimensions();

  return (
    <Box className={classes.container}>
      <main className={classes.main}>
        {children}
        {
          width >= 1440 &&
          <Box className={classes.followersShade} />
        }
      </main>
      {
        width >= 1440 &&
        <Followers />
      }      
    </Box>
  );
}