import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>({
  container: {
    padding: "20px auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },  
  '@media screen and (max-width:414px)': {
    container: {
      padding: "10px auto"
    }
  }
}))