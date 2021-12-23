import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },  
  main: {
    width: "100%",
    height: "auto",
    position: "relative",
    padding: "0px 10.13888888888889vw 0px 9.02777777777778vw"
  },  
  /*hack, so followers height will looks like match to the left element....*/
  followersShade: {
    zIndex: "0",
    backgroundColor: "#1B1B1B",
    width: "0px",
    position: "absolute",
    left:"100%",
    top:"0px",
    height:"100%"
  },
  '@media screen and (max-width:414px)':{
    main:{
      padding:"0px 20px"
    }
  },
  '@media screen and (min-width: 1440px)':{
    main: {
      width: "calc(100% - 375px)"
    },
    followersShade: {
      width:"375px"
    }      
  }
}))