import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
  container:{
    minHeight:"100vh",
    width: "100%",
    marginTop: "0px"
  }, 
  grid:{
    width:'100%',
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"wrap"
  },
  pageTitle:{
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    letterSpacing: "0.25px",
    marginTop: "0px",
    position: "relative",
    textAlign: "start",
    marginTop:"calc(92px + 7.5px)"
  },
  action:{
    position: "absolute",
    right: "calc(100% + 25px)",
    top:"0px",
    cursor: "pointer"
  },
  [theme.breakpoints.down('aboveMobile')]:{
    container:{
      width: "100%",
      minHeight: "calc(100vh - 70px)",
    },  
    grid:{
      flexDirection:'column'
    },
    pageTitle: {
      fontSize: "24px",
      marginTop:"20px"
    },
    action: {
      display: "none"
    }
  }          
}))