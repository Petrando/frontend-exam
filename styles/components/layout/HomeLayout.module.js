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
      height: "calc(100vh - calc(100vh - 100%))",
      flexDirection: "column-reverse",
      overflow:"hidden"
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