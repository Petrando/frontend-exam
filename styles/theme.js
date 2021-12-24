import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:'"Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,' + 
                'Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',            
  },
  /*
  palette: {
    primary: {
      main: "#8f29a3"
    }
  },*/
  breakpoints: {
    values: {
      mobile: 414,      
      aboveMobile: 415,
      largeScreen:1339,//1440 theme.breakpoints.down is inclusive
    },
  },
  color:'#FFFFFF',
  backgroundColor:'#121212',
  padding:0,
  margin:0
})

export default theme;