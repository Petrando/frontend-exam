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
    <>
    <div>
      <Box className={classes.container}>      
        <Navbar />
        <Box className={classes.main}>
          <WithFollowersLayout atHome={true}>
            {children}
          </WithFollowersLayout>
        </Box> 
      </Box>
    </div>
    <style global jsx>{`
     html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100%;
        margin: 0px;
        padding: 0px;
      }
  `}</style>
    </>
  )
}

/*
<Box className={`${classes.container} containerHeight`}>      
        <Box style={{width:"100vw", height:"100vh"}}>
          <h3>Test main page</h3>
        </Box>
        <style jsx>{`        
          @media (max-width:414px){
            .containerHeight {
              height:  ${height}px;
              max-height: ${height}px !important;
            }
          }
        `}</style>  
    </Box>*/
/*
<Navbar />
        <Box className={classes.main}>
          <WithFollowersLayout atHome={true}>
            {children}
          </WithFollowersLayout>
        </Box>    */
export default HomeLayout;