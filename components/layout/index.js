import {Box, ThemeProvider} from '@mui/material'
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useStyles} from "../../styles/components/layout/Layout.module"
import theme from "../../styles/theme"

//Layout for Search page and Tags Page

const Layout = ({children}) => {
  const {width} = useWindowDimensions();
  
  return (
    <>
    {
      width > 0 &&
      <ThemeProvider theme={theme} >        
          <LayoutContent width={width}>
            {children}    
          </LayoutContent>        
      </ThemeProvider>
    }
    </> 

  )
}

const LayoutContent = ({children, width}) => {
  const classes = useStyles();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
    <Box className={classes.container}>
      {navElement}
      <Box className={classes.main}>
        {children}
      </Box>
    </Box>
)}

export default Layout;

