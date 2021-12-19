import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import { ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";
import theme from "../../styles/global"
import styles from "../../styles/components/layout/HomeLayout.module.css";

const HomeLayout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'stretch'}}>
      <Navbar />
      <main className={styles.main}>
        <WithFollowersLayout>
          {children}
        </WithFollowersLayout>
      </main>
    </Box>
    </ThemeProvider>
  )
}

export default HomeLayout;