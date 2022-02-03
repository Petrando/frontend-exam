import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '335px',
    height: '40px',
    color: '#121212',
    border: '1px solid #121212',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '100%',
    /* identical to box height, or 14px */
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.25s',
    margin: '0px',
    '&:hover':{
      color: '#FFFFFF',
      backgroundColor: '#121212',
      border: '1px solid #FFFFFF'
    },
  },  
  [theme.breakpoints.up('largeScreen')]: {
    button: {
      width: '343px'
    },
  },  
  '@media screen and (max-width:614px)': {
    button: {
      width: '100%'
    },
  },  
  smallButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25px',
    width: 'auto',
    borderRadius: '20px',
    padding: 'auto 10px',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '100%',
    /* or 12px */  
    textAlign: 'center',
    transition: 'all 0.25s',
    cursor: 'pointer',
  },  
  smallButtonContained: {
    color: '#121212',
    backgroundColor: '#FFFFFF',
    border: '1px solid #1B1B1B',
    '&:hover':{
      color: '#FFFFFF',
      backgroundColor: '#121212',
      border: '1px solid #FFFFFF'
    },
  },  
  smallButtonOutlined: {
    color: '#FFFFFF',
    backgroundColor: '#121212',
    border: '1px solid #FFFFFF',
    '&:hover':{
      color: '#121212',
      backgroundColor: '#FFFFFF',
      border: '1px solid transparent'
    },
  },
}));