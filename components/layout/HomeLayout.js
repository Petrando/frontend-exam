import { Box, ThemeProvider } from '@mui/material';
import { Navbar } from './Navbar';
import { WithFollowersLayout } from './WithFollowersLayout.js';
import { useStyles } from '../../styles/components/layout/HomeLayout.module.js';
import theme from '../../styles/theme.js';//Have to use default export

export const HomeLayout = ({children}) => {  
  return (
    <ThemeProvider theme={theme} >
      <LayoutContent>
        {children}
      </LayoutContent>
    </ThemeProvider>
  );
}

const LayoutContent = ({children}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>      
      <Navbar />
      <Box className={classes.main}>
        <WithFollowersLayout atHome={true}>
          {children}
        </WithFollowersLayout>
      </Box> 
    </Box>
  );
}