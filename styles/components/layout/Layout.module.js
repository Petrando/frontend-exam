import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(()=>{
return  ({
  container:{
    display:'flex', justifyContent:'flex-start', alignItems:'stretch'
  },
  main: {
    flex:'1 1 calc(100% - 80px)',
    width: 'calc(100% - 80px)',
    height:'100%',
    paddingTop: '0px'
  },
  '@media screen and (max-width:414px)':{
    container:{
      display:'block'
    },
    main:{
      width:'100%'
    }      
  }
})})