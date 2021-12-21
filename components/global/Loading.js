import {Box} from "@mui/material"
import { CircularProgress} from '@mui/material'
import styles from "../../styles/components/global/Loading.module.css"

const Loading = () => {
  return (
    <Box className={styles.container}>      
      <CircularProgress variant='indeterminate' />
    </Box>
  )
}

export default Loading;