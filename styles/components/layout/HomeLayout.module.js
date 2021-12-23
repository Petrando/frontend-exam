import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
  container:{
    display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'stretch',
    bacgkroundColor:'pink'
  },
  dummyDiv1: {
    width:"50vw",
    flex: "1 1 25vw",
    height:"100vh", 
    backgroundColor:"lightblue"
  },
  dummyDiv2: {
    width:"50vw",
    flex:"1 1 75vw",
    height:"100vh", 
    backgroundColor:"pink"
  },
  main: {
    flex:'1 1 calc(100% - 80px)',
    width: 'calc(100% - 80px)',
    height:'100%',
    paddingTop: '0px'
  },
  '@media screen and (max-width: 414px)':{
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
}))