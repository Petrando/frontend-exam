import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>{
console.log(theme)
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
  [theme.breakpoints.down('aboveMobile')]:{
    container: {
      maxHeight: "100%",
      maxHeight: "100vh",
      maxHeight: "-webkit-fill-available",
      maxHeight: "-moz-available",
      maxHeight: "fill-available",
      maxHeight: "stretch",      
      flexDirection: "column-reverse"
    },
    main:{
      width: "100%",
      maxHeight: "calc(100vh - 66px)",
      flex:"1 1 calc(100vh - 66px)",
      display: "flex",
      flexDirection: "column"
    }      
  }
})})