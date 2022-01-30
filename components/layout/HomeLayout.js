import {Box, ThemeProvider} from '@mui/material'
import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import {useStyles} from "../../styles/components/layout/HomeLayout.module"
import theme from "../../styles/theme"

const HomeLayout = ({children}) => {
  
  return (
    <ThemeProvider theme={theme} >
      <LayoutContent>
        {children}
      </LayoutContent>
    </ThemeProvider>
  )
}

const LayoutContent = ({children}) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>      
      <Navbar />
      <Box className={classes.main}>
        <WithFollowersLayout atHome={true}>
          {children}
        </WithFollowersLayout>
      </Box> 
    </Box>
  )
}

export default HomeLayout;