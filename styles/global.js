import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  typography: {
    fontFamily:'"Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,' + 
                'Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',            
  },
  breakpoints: {
    values: {
      mobile: 414,      
      aboveMobile: 415,
      largeScreen:1440
    },
  },
  color:'#FFFFFF',
  backgroundColor:'#121212',
  padding:0,
  margin:0
})

export const useGlobalStyles = makeStyles(theme=>({
  pageContentContainer:{
    marginTop: "0px",
    padding:"0px 18.65%"
  },
  pageContent:{
    width:"100%"
  },
  hidden:{
    display:'none'
  },
  notVisible:{
    opacity:0
  },
  visible:{
    display:'inline'
  },
  hideLongWord:{
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%"
  },
  [theme.breakpoints.down('aboveMobile')]:{
    pageContentContainer:{
      padding:'0px 20px'
    }
  }          
}))

export default theme;