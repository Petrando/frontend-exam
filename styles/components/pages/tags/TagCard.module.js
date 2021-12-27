import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
  card: {
    width: "calc(20% - 24px)",
    height:"199px",
    borderRadius: "10px",
    margin:"0px 0px 36px"
  },  
  cardTitleContainer: {    
    height: "150px",
    maxHeight: "150px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    position: "relative"
  },  
  cardTitle: {
    width: "calc(100% - 23px)",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    borderRadius: "10px",
    border: "4px solid #FFFFFF",
    textAlign: "center",
    position: "absolute",
    left: "10px",
    bottom: "14px",
    margin: "0px",
    padding: "7px 0px 7px 14px"
  },  
  tagTitle: {
    fontSize: "14.9px",
    letterSpacing: "0.139688px",
    lineHeight: "150%",
    margin: "10px 0px 0px",
    padding: "0px"
  },  
  tagCount: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "11.175px",
    lineHeight: "150%",
    letterSpacing: "0.3725px",
    color: "#B2B2B2",
    margin: "0px",
    padding: "0px"
  },  
  '@media screen and (max-width:320px)': {
    card: {
      width: "100%",
      margin:"0px 0px 24px"
    }
  },  
  '@media screen and (min-width:321px) and (max-width:768px)': {
    card: {
      width: "calc(50% - 3.2vw)",
      margin:"0px 0px 24px"
    }
  },  
  '@media screen and (min-width:769px) and (max-width:1024px)': {
    card: {
      width: "calc((100%/3) - 12px)"
    }
  },  
  '@media screen and (min-width:1025px) and (max-width:1439px)': {
    card: {
      width: "calc(25% - 24px)"
    }
  }
}))