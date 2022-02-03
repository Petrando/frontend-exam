import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>{
  return ({
    container:{
      display:'flex', 
      flexDirection:'row', 
      justifyContent:'flex-start', 
      alignItems:'stretch',
      height:'auto',
    },
    main: {
      flex:'1 1 calc(100% - 80px)',
      width: 'calc(100% - 80px)',
      height:'100%',
      paddingTop: '0px',
    },
    [theme.breakpoints.down('largeScreen')]:{
      container: {
        height: '-webkit-fill-available',
        height: '-moz-available',
        height: 'fill-available',
        height: '100vh',
        height: 'calc(var(--vh, 1vh) * 100)',
        //height: '100%', 
        maxHeight: '-webkit-fill-available',
        maxHeight: '-moz-available',
        maxHeight: 'fill-available',
        maxHeight: '100vh',
        maxHeight: 'calc(var(--vh, 1vh) * 100)',
        //maxHeight: '100%',
      },  
    },
    [theme.breakpoints.down('midScreen')]:{    
      container :{
        flexDirection: 'column-reverse',
        overflow: 'auto',
      },
      main:{
        width: '100%',
        maxHeight: 'calc(100vh - 66px)',
        maxHeight: 'calc((var(--vh, 1vh) * 100) - 66px)',
        flex:'1 1 calc(100vh - 66px)',
        flex:'1 1 calc((var(--vh, 1vh) * 100) - 66px)',
        display: 'flex',
        flexDirection: 'column',
      },      
    },
  });
});