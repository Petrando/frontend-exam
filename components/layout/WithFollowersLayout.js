import {Box} from '@mui/material'
import Followers from "../pages/shared/Followers";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/WithFollowers.module.css";

const WithFollowersLayout = ({children}) => {
  const {width} = useWindowDimensions()
  return (
    <Box className={styles.container}>
      <main className={styles.main}>
        {children}
        <div className={styles.followersShade} />
      </main>
      {
        width >= 1440 &&
        <Followers />
      }      
    </Box>
  )
}

export default WithFollowersLayout;