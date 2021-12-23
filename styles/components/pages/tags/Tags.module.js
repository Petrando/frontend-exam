import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
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
    marginTop: "0px",
    textAlign: "start",
    marginTop:"99.5px"//calc(92px + 7.5px);
  },  
  tagsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },  
  '@media screen and (max-width:414px)': {
    container: {
      minHeight: "calc(100vh - 70px)",
      padding: "0px 20px"
    },  
    pageTitle: {
      fontSize: "24px",
      marginTop: "20px"
    }
  }
}))