import {Box} from "@mui/material"
import { CircularProgress} from '@mui/material'
import styles from "../../styles/components/global/Loading.module.css"
import {useStyles} from "../../styles/components/global/Loading.module"

const Loading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>      
      <CircularProgress variant='indeterminate' />
    </Box>
  )
}

export default Loading;