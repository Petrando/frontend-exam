import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily:'"Ubuntu", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,' + 
                'Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',            
  },
  breakpoints: {
    values: {
      mobile: 600,      
      midScreen: 601,
      largeScreen:1440,//1440 theme.breakpoints.up is (INCLUSIVE)
    },
  },
  color:'#FFFFFF',
  backgroundColor:'#121212',
  padding:0,
  margin:0,
});

//Have to use default export, otherwise theme breakpoints cannot be read
export default theme;