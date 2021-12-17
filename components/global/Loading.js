import { CircularProgress} from '@mui/material'
import styles from "../../styles/components/global/Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.container}>      
      <CircularProgress variant='indeterminate' />
    </div>
  )
}

export default Loading;