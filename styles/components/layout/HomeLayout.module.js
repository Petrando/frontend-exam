import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>{
return ({
  container:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'stretch',
  },
  main: {
    flex:'1 1 calc(100% - 80px)',
    width: 'calc(100% - 80px)',
    height:'100%',
    paddingTop: '0px'
  },
  [theme.breakpoints.down('midScreen')]:{
    container: {
      height: "-webkit-fill-available",
      height: "-moz-available",
      height: "fill-available",
      //height: "100vh",
      height: "100%", 
      maxHeight: "-webkit-fill-available",
      maxHeight: "-moz-available",
      maxHeight: "fill-available",
      //maxHeight: "100vh",
      maxHeight: "100%",      
      flexDirection: "column-reverse",
      overflow:"hidden",
    },
    main:{
      width: "100%",
      maxHeight: "calc(100% - 66px)",
      flex:"1 1 calc(100% - 66px)",
      display: "flex",
      flexDirection: "column"
    }      
  }
})})