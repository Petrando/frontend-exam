import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    maxHeight: "100vh !important",
    paddingTop: "0px",  
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
  [theme.breakpoints.up('aboveMobile')]: {
    container: {
      maxHeight: "calc(100vh - 66px)",
    }
  }
}))