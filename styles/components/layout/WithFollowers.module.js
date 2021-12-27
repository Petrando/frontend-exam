import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "stretch"
  },  
  main: {
    width: "100%",
    height: "auto",
    position: "relative",
    padding: "0px"
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
  [theme.breakpoints.down('midScreen')]:{
    main:{
      padding:"0px 20px"
    }
  },
  [theme.breakpoints.up('largeScreen')]:{
    main: {
      width: "calc(100% - 375px)"
    },
    followersShade: {
      width:"375px"
    }      
  }
}))