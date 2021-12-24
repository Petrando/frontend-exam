import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    width: "100%",
    flex: "1 1 51.33333333333333vh",
    /*height: 51.33333333333333vh;/*figma height : 462px*/
    paddingTop: "37.22222222222222vh",
    "& > *:first-child":{
      marginTop:"0px", 
      marginBottom:"0px"
    }
  },
  '@media screen and (max-width:414px)': {
    container: {
      /*height: 25.86206896551724vh !important;*/
      flex:"1 1 25.86206896551724vh",
      paddingTop: "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      "& > *:first-child" :{
        position: "relative",
        bottom: "calc(66px + 2.95566502463054vh)"
      }
    }
  }
}))