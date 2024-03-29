import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>({
  container: {
    flex: '1 1 calc(22.22222222222222vh - 0.25px)',
    //width:'100%',
    //height:'calc(22.22222222222222vh - 0.25px)',/*figma height : 200px*/
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottom: '0.25px solid rgba(255, 255, 255, 0.1)',
    '& input':{
      marginTop: '0px',
      marginBottom: '0px',
    },
  },  
  sectionTitle: {
    marginBottom: '2.22222222222222vh',//'2.88888888888889vh',
    padding:'0px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    /*line-height: 150%;*/
    marginTop: '0px',
  },
  '@media screen and (min-height:900px) and (min-width:415px)': {
    container: {
      justifyContent: 'flex-start',
    },  
    sectionTitle: {
      marginTop: '6.66666666666667vh',
    }
  },
  [theme.breakpoints.down('midScreen')]: {
    container: {
      /*height:calc(22.41379310344828vh - 8.62068965517241vh) !important;*/
      flex: '1 1 13.79310344827587vh',
      flex: '1 1 calc(var(--vh, 1vh) * 13.79310344827587)',      
      justifyContent: 'space-between',
      borderBottom: '0px solid transparent',
      '& > *': {
        // hack position to match figma mobile...
        position: 'relative',
        top: '0.86206896551724vh', //6px of 812px figma mobile height
        top: 'calc(var(--vh, 1vh) * 0.86206896551724)',
      }
    },  
    sectionTitle: {
      margin: '0px',
      padding: '0px',
    },
  },
}));