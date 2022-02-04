import { Box, ThemeProvider } from '@mui/material';
import { Navbar } from './Navbar.js';
import { BackToHome } from '../global/BackToHome.js';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.js';
import { useStyles } from '../../styles/components/layout/Layout.module.js';
import theme from '../../styles/theme';//have to use default import

//Layout for Search page and Tags Page
export const Layout = ({children}) => {
  const {width} = useWindowDimensions();
  
  return (
    <>{
      width > 0 &&
          <ThemeProvider theme={theme} >        
            <LayoutContent width={width}>
              {children}    
            </LayoutContent>        
          </ThemeProvider>
    }</> 
  );
}

const LayoutContent = ({children, width}) => {
  const classes = useStyles();

  const navElement =  width > 600 ?<Navbar />:<BackToHome />;

  return (
    <Box className={classes.container}>
      {navElement}
      <Box className={classes.main}>
        {children}
      </Box>
    </Box>
 );
}

