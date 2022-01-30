import { makeStyles } from '@mui/styles';

const {innerWidth:width, innerHeight:height} = window;

export const useStyles = makeStyles((theme)=>({
  container: {
    maxHeight: "100vh !important",
    padding: "0px 9.02777777777778vw",  
    display: "flex",
    flexDirection: "column"
  },  
  sectionTitle: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "150%",
    marginTop: "0px"
  },  
  [theme.breakpoints.down('midScreen')]: {
    container: {
      maxHeight: `calc(${height?height + "px":"100vh"} - 66px)`,
      padding: "0px"
    }
  }
}))