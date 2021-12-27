import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {  
    minHeight: "100vh",
    width: "100%",
    marginTop: "0px",
    padding: "0px 17.84722222222222vw 0px"
  },  
  pageTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "30px",
    letterSpacing: "0.25px",
    textAlign: "start",
    marginTop:"85.5px",//suppose to be calc(80px + 7.5px), but since does not match figma, random number it is!
    
  },  
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },  
  [theme.breakpoints.down('midScreen')]: {
    container: {
      minHeight: "calc(100vh - 70px)",
      padding: "0px 20px"
    },  
    pageTitle: {
      fontSize: "24px",
      marginTop: "26px"//20px + 6px
    }
  }
}))