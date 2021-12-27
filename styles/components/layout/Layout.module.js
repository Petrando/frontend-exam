import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme)=>{
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
  [theme.breakpoints.down('midScreen')]:{
    container:{
      display:'block'
    },
    main:{
      width:'100%'
    }      
  }
})})