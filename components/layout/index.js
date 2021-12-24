import {Box, ThemeProvider} from '@mui/material'
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useStyles} from "../../styles/components/layout/Layout.module"
import theme from "../../styles/theme"

const Layout = ({children}) => {
  const classes = useStyles();
  const {width} = useWindowDimensions();
  return (
    <>
    {
      width > 0 &&
      <ThemeProvider theme={theme} >
        <Box className={classes.container}>
          <LayoutContent width={width}>
            {children}    
          </LayoutContent>
        </Box>
      </ThemeProvider>
    }
    </> 

  )
}

const LayoutContent = ({children, width}) => {
  const classes = useStyles();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
  <>
    {navElement}
    <Box className={classes.main}>
      {children}
    </Box>
  </>
)}

export default Layout;

