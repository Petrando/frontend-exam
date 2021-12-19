import { Box } from "@mui/material";
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/Layout.module.css"
import { sxStyles} from "../../styles/components/layout/Layout.module.js"

const Layout = ({children}) => {
  const {width} = useWindowDimensions();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
    <>
    {
      width > 0 &&
      
        <Box sx={sxStyles}>
          {navElement}
          <main className={styles.main}>
            {children}
          </main>
        </Box>
      
    }
    </> 

  )
}

export default Layout;

