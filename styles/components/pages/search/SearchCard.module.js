import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "197px",
    width: "calc((100% / 3) - 17px)",//"calc((100% / 3) - 17px)",
    margin:"0px 0px 31px",
    borderRadius: "0px",
    border:"none",
  },
  cardContent: {
    backgroundColor: "#121212",
    color: "#ffffff",
    height:"100%",
    marginTop: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
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
  '@media screen and (max-width:540px)':{
    card: {
      height: "282px",
      width: "100%",
      margin: "0px 0px 4.92610837438424vh"
    },
  
    cardContent: {
      margin: "0px 0px auto"
    },  
    cardTitle: {
      margin: "23.83px 0px 0px"
    },
    username : {
      margin:"4.75px 0px 0px"
    }
  },
  '@media screen and (min-width:541px) and (max-width:768px)': {
    card: {
      width: "calc(50% - 17px)",
      height: "auto",/*just pick some numbers...*/
      margin: "0px 0px 30px"
    },
  
    cardContent: {
      margin: "0px 0px auto"
    }
  }
}))