import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    width: "100%",
    flex: "1 1 26.44444444444444vh",
    //height: "calc(26.44444444444444vh - 0.25px)",/*figma height : 238px*/  
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderBottom: "0.25px solid rgba(255, 255, 255, 0.1)",
    "& > *":{
      marginBottom: "2.22222222222222vh"
    }
  },
  sectionTitle: {
    marginTop: "3.33333333333333vh",
    padding:"6px 0px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    //marginBottom: "2.22222222222222vh"
  }, 
  resultCount: {
    height:"50px",
    width: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    letterSpacing: "0.15px",
  },
  countNumber: {     
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "48px",
    marginRight: "10px",
    padding: "0px",
    margin: "0px"
  },  
  result: {     
    fontWeight: "normal",
    fontSize: "16px",
    marginLeft: "10px"    
  },
  '@media screen and (max-width:414px)': {
    container: {
      /*height: calc(51.72413793103448vh - 0.25px) !important;*/
      flex: "1 2 51.72413793103448vh",
      "& > *": {
        marginBottom: "2.70935960591133vh"/*1.97044334975369vh;*/
      }
    },  
    sectionTitle: {
      padding: "0px",
      marginTop: "4.1871921182266vh"
    } 
  },
  '@media screen and (min-width:415px) and (max-width:475px) and (max-height:700px)':{
    sectionTitle: {
      marginTop: "0vh"
    }
  },
  '@media screen and (min-width:476px) and (max-height:700px)': {
    sectionTitle: {
      marginTop: "1vh"
    }
  }  
}))