import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    padding: '20px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  [theme.breakpoints.down('midScreen')]: {
    container: {
      padding: '15px auto',
    },
  },
}));