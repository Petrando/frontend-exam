import {Box} from '@mui/material'
import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import useWindowDimensions from "../../hooks/useWindowDimensions"
import styles from "../../styles/components/layout/HomeLayout.module.css";

const HomeLayout = ({children}) => {
  const {height} = useWindowDimensions();
  return (
    <Box className={`${styles.container} ${height > 0 && "containerHeight"}`}>      
      <Navbar />
      <Box className={styles.main}>
        <WithFollowersLayout atHome={true}>
          {children}
        </WithFollowersLayout>
      </Box>    
      <style jsx>{`        
        @media (max-width:414px){
          .containerHeight {
            max-height: ${height}px !important;
          }
        }
      `}</style>  
    </Box>
  )
}

export default HomeLayout;