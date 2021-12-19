import { Box } from "@mui/material";
import Followers from "../pages/shared/Followers";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/WithFollowers.module.css";

const WithFollowersLayout = ({children}) => {
  const {width} = useWindowDimensions()
  return (
    <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'stretch'}}>
      <main className={styles.main}>
        {children}
        <Box sx={{zIndex:0, 
                  backgroundColor:'#1B1B1B', 
                  position:'absolute', 
                  left:'100%', 
                  top:'0px', 
                  width:['0px', null, '375px'],
                  height:'100%'}} />
      </main>
      {
        width >= 1440 &&
        <Followers />
      }      
    </Box>
  )
}

export default WithFollowersLayout;