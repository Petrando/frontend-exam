import { Box, ThemeProvider } from "@mui/material";
import theme from "../../styles/global";
import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/Layout.module.css"
import { useStyles} from "../../styles/components/layout/Layout.module.js"

const Layout = ({children}) => {
  const {width} = useWindowDimensions();

  return (
    <>
    {
      width > 0 &&
      <ThemeProvider theme={theme}>
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
      <main className={styles.main}>
        {children}
      </main>
    </Box>
  )
}

export default Layout;

