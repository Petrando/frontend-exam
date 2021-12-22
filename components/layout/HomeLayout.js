import {Box} from '@mui/material'
import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import styles from "../../styles/components/layout/HomeLayout.module.css";

const HomeLayout = ({children}) => {
  return (
    <Box className={styles.container}>
      
      <div className={styles.dummyChildren}>
        <h2>Helloooo....</h2>
      </div>
      
    </Box>
  )
}

/*
<Navbar />
<Box className={styles.main}>
        <WithFollowersLayout atHome={true}>
          {children}
        </WithFollowersLayout>
      </Box>

      */
export default HomeLayout;