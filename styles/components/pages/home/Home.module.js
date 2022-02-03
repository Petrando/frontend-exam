import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    maxHeight: '100vh !important',
    padding: '0px 9.02777777777778vw',  
    display: 'flex',
    flexDirection: 'column',
  },  
  sectionTitle: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    marginTop: '0px',
  },  
  [theme.breakpoints.down('midScreen')]: {
    container: {      
      height: `calc(100vh - 66px)`,
      height: `calc((var(--vh, 1vh) * 100) - 66px)`,
      maxHeight: `calc(100vh - 66px)`,
      maxHeight: `calc((var(--vh, 1vh) * 100) - 66px)`,
      padding: '0px',
      //margin:'0px'
    },
  },
}));