import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
  container: {
    display: "none",
    zIndex: 100
  },  
  tabs: {
    height:"calc(65px - 2px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    paddingTop: "36px",
    borderBottom: "2px solid #1F1F1F",
    position: "relative"
  },  
  activeLine: {
    position: "absolute",
    bottom:"0px",
    width: "50%",
    height:"2px",
    backgroundColor: "#FFFFFF",
    transition: "all 0.25s"
  },  
  followersActive: {
    left:"0px",
  },
  followingActive: {
    left:"50%"
  },  
  tabLabel: {
    width: "50%",
    margin:"0px",
    padding:"0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",    
    cursor:"pointer",
    textAlign: "center",
    letterSpacing: "0.15px",
    transition:"color 0.25s"
  },  
  inactive: {
    color:"#929292"
  },  
  followersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  follower: {
    width:"342px",
    height:"45px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin:"0px 0px 16px",
  },
  data: {
    width:"266px",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },  
  followerImg: {
    width: "40px",
    height:"40px"
  },  
  followerAbout: {
    width: "226px",
    height:"40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignStems: "start",
    paddingLeft: "15px",
  },
  fullname: {
    margin:"0px",
    padding:"0px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    letterSpacing: "0.15px",
    color:"#FFFFFF"
  },  
  username: {
    margin:"0px",
    padding:"0px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    letterSpacing: "0.25px",
    color: "rgba(255, 255, 255, 0.5)"
  },  
  button: {
    width:"76px",
    height: "100%,",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  [theme.breakpoints.up('largeScreen')]:{
    container:{
      zIndex: 100,
      display: "block",
      width:"375px",
      height: "100%",
      backgroundColor: "#1B1B1B"
    }
  }
}))