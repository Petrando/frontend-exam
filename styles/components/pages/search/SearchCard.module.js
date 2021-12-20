import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "197px",
    width: "calc((100% / 3) - 17px)",
    margin:"0px 0px 15.5px",
    borderRadius: "0px",
    border:"none",
  },
  cardContent: {
    backgroundColor: "#121212",
    color: "#ffffff",
    height:"100%",
    margin: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "start"
  },
  cardTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14.9px",  
    letterSpacing: "0.139688px",
    margin:"15.5px 0px 0px",
    padding:"0px"
  },
  username: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11.175px",
    letterSpacing: "0.3725px",
    margin:"3.5px 0px 0px",
    padding:"0px",
    color: "#B2B2B2"
  },
  [theme.breakpoints.down('aboveMobile')]:{
    card:{
      height:"282px",
      width:"100%",
      margin:"0px 0px 10px",
    },
    cardContent:{
      margin:"0px 0px auto"
    },
    cardTitle:{
      margin:"20.33px 0px 0px"
    }
  }
}))