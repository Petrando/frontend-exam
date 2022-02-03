import { Box } from '@mui/material';
import { CircularProgress} from '@mui/material';
import { useStyles } from '../../styles/components/global/Loading.module.js';

export const Loading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>      
      <CircularProgress variant='indeterminate' />
    </Box>
  );
}