import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme=>({
  container: {
    height:"70px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "19px"
  },  
  label: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "150%",
    textAlign: "center",
    margin:"0px",
    padding:"0px",
    position: "relative",
    left: "13.16px"
  }
}))