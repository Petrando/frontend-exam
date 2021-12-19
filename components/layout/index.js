import { ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import theme from "../../styles/global"
import styles from "../../styles/components/layout/Layout.module.css"

const Layout = ({children}) => {
  const {width} = useWindowDimensions();

  const navElement =  width > 414?<Navbar />:<BackToHome />

  return (
    <>
    {
      width > 0 &&
      <Box sx={{display:['block', 'flex', null], justifyContent:'flex-start', alignItems:'stretch'}}>
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

