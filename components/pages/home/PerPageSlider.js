import {Box} from '@mui/material'
import styles from "../../../styles/components/pages/home/PerPageSlider.module.css"
import homeStyles from "../../../styles/components/pages/home/Home.module.css"
import Slider from "../../global/Slider"

const PerPageSlider = ({itemPerPage, setItemPerPage, count}) => {
  return (
    <Box className={styles.container}>
      <h4 className={styles.sectionTitle}>{itemPerPage} Of Results Per Page</h4>
      <Box className={styles.resultCount}>
        <span className={styles.countNumber}>{count}</span>{" "}<span className={styles.result}>results</span>
      </Box>
      <Slider setItemPerPage={setItemPerPage} />
    </Box>
  )
}

export default PerPageSlider;