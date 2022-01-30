import {Box, ThemeProvider} from '@mui/material'
import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import useWindowDimensions from "../../hooks/useWindowDimensions"
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
  const {height} = useWindowDimensions();

  return (
    <Box className={`${classes.container} containerHeight`}>      
        <Navbar />
        <Box className={classes.main}>
          <WithFollowersLayout atHome={true}>
            {children}
          </WithFollowersLayout>
        </Box>    
        <style jsx>{`        
          @media (max-width:414px){
            .containerHeight {
              height:  ${height}px;
              max-height: ${height}px !important;
            }
          }
        `}</style>  
    </Box>
  )
}
export default HomeLayout;