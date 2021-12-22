import {Box} from '@mui/material'
import styles from "../../../styles/components/pages/home/PerPageSlider.module.css"
import homeStyles from "../../../styles/components/pages/home/Home.module.css"
import Slider from "../../global/Slider"

const PerPageSlider = ({itemPerPage, setItemPerPage, count}) => {
  return (
    <Box className={styles.container}>
      <h4 className={styles.sectionTitle}>{itemPerPage} Of Results Per Page</h4>
      <Box className={styles.resultCount}>
        <h3 className={styles.countNumber}>
          {count}<span className={styles.result}>results</span>
        </h3>        
      </Box>
      <Slider setItemPerPage={setItemPerPage} />
    </Box>
  )
}

export default PerPageSlider;