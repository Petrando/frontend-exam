import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  navbar: {
    backgroundColor: "#1B1B1B",
    flex: "1 1 80px",
    width: "80px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",  
    position: "relative"
  },  
  menuItemContainer: {
    width: "40px",
    maxWidth: "40px",
    height: "42px",
    maxHeight:"42px",
    padding: "0px",
    marginBottom: "22px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    "&:first-of-type":{
      marginTop:"95px"
    }
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
    position: "relative",
    maxWidth: "24px",
    maxHeight: "24px"
  },  
  blueDot: {
    position: "absolute",
    right: "calc(0px - 7px)",
    top:"calc(-7px - 7px)"
  },  
  menuLabel: {
    height: "18px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "150%",
    margin: "0px",
    padding: "0px",
    textAlign: "center",
    /* identical to box height, or 18px */
  
    letterSpacing: "0.4px"
  },  
  logo: {
    width: "auto",
    height: "auto",
    padding: "0px",
    margin: "0px",
    position: "absolute",
    left: "23px", 
    top: "37px",
    zIndex: "1000"
  },  
  logoNotAtNavbar: {
    display: "none"
  },  
  '@media screen and (max-width:414px)': {
    navbar: {
      width: "100%",
      height: "66px",    
      zIndex: "999",
      flex: "1 1 66px",
      flexDirection: "row",
      justifyContent: "center",   
      backgroundImage: "-moz-radial-gradient(circle at 15%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 45%)," +
                        "-moz-radial-gradient(circle at 70%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 50%)",
      backgroundImage: "-ms-radial-gradient(circle at 15%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 45%)," +
                        "-ms-radial-gradient(circle at 70%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 50%)",                      
      backgroundImage: "-webkit-radial-gradient(circle at 15%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 45%)," +
                        "-webkit-radial-gradient(circle at 70%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 50%)",
      backgroundImage: "-o-radial-gradient(circle at 15%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 45%)," + 
                        "-o-radial-gradient(circle at 70%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 50%)",                      
      backgroundImage: "radial-gradient(circle at 15%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 45%)," +
                        "radial-gradient(circle at 70%, rgba(24, 24, 24, 0.2) 10%, rgba(0, 0, 0, 0.8) 35%, transparent 50%)",
      overflow: "hidden"
    },  
    logo: {      
      display: "none",
      opacity: 0
    },  
    logoNotAtNavbar: {
      flex: "1 5 8.62068965517241vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start"
    },  
    menuItemContainer: {
      margin: "0px",    
      maxWidth: "24px", 
      "&:first-of-type": {
        margin: "0px",
        marginRight: "25px"
      },
      "&:last-of-type":{
        marginLeft: "25px"
      }
    },    
    menuLabel: {
      display: "none"
    }
  }
}))