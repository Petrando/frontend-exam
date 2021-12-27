import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container:{
    minHeight:"100vh",
    width: "100%",
    marginTop: "0px",
    padding: "0px 10.13888888888889vw 0px 9.02777777777778vw"
  }, 
  grid:{
    width:'100%',
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap:"wrap",
    marginBottom:"9px",//figma 39px, searchCard margin bottom 21px
  },
  pageTitle:{
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    letterSpacing: "0.25px",
    marginTop: "0px",
    position: "relative",
    textAlign: "start",
    marginTop: "99.5px"//"calc(92px + 7.5px)"
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
    /*
    grid:{
      flexDirection:'column'
    },*/
    pageTitle: {
      fontSize: "24px",
      marginTop:"20px",
      marginBottom:"24px"
    },
    action: {
      display: "none"
    }
  }          
}))