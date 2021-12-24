import {Box, ThemeProvider} from '@mui/material'
import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import useWindowDimensions from "../../hooks/useWindowDimensions"
import {useStyles} from "../../styles/components/layout/HomeLayout.module"
import theme from "../../styles/theme"

const HomeLayout = ({children}) => {
  
  return (
    <LayoutContent>
        {children}
      </LayoutContent>
  )
}

const LayoutContent = ({children}) => {
  const classes = useStyles()
  const {height} = useWindowDimensions();

  return (
    <Box className={classes.container}>      
        <Navbar />
        <Box className={classes.main}>
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