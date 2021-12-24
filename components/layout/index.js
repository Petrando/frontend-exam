import {Box} from '@mui/material'
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useStyles} from "../../styles/components/layout/Layout.module"

const Layout = ({children}) => {
  const classes = useStyles();
  const {width} = useWindowDimensions();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
    <>
    {
      width > 0 &&
      <Box className={classes.container}>
        {navElement}
        <Box className={classes.main}>
          {children}
        </Box>
      </Box>
    }
    </> 

  )
}

export default Layout;

