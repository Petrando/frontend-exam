import {Box} from '@mui/material'
import Followers from "../pages/shared/Followers";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {useStyles} from "../../styles/components/layout/WithFollowers.module"

const WithFollowersLayout = ({children, atHome}) => {
  const classes = useStyles()
  const {width} = useWindowDimensions()
  return (
    <Box className={classes.container}>
      <main className={classes.main}>
        {children}
        {
          width >= 1440 &&
          <Box className={classes.followersShade} />
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