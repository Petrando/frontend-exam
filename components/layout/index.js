import {Box} from '@mui/material'
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/Layout.module.css"

const Layout = ({children}) => {
  const {width} = useWindowDimensions();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
    <>
    {
      width > 0 &&
      <Box className={styles.container}>
        {navElement}
        <Box className={styles.main}>
          {children}
        </Box>
      </Box>
    }
    </> 

  )
}

export default Layout;

