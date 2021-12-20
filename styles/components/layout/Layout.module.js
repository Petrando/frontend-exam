import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
  container:{
    display:'flex', justifyContent:'flex-start', alignItems:'stretch',
    [theme.breakpoints.down('aboveMobile')]:{
      display:'block',      
    }
  }
}))