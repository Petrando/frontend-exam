import { Box } from "@mui/material";
import Followers from "../pages/shared/Followers";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/WithFollowers.module.css";
import {sxStyles, boxShadowStyles} from "../../styles/components/layout/WithFollowers.module.js";

const WithFollowersLayout = ({children}) => {
  const {width} = useWindowDimensions()
  return (
    <Box sx={sxStyles}>
      <main className={styles.main}>
        {children}
        {
          width >= 1440 &&
          <Box sx={boxShadowStyles} />
        }        
      </main>
      {
        width >= 1440 &&
        <Followers />
      }      
    </Box>
  )
}

export default WithFollowersLayout;