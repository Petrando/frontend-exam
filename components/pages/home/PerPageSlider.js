import {Box} from '@mui/material'
import styles from "../../../styles/components/pages/home/PerPageSlider.module.css"
import { useStyles} from "../../../styles/components/pages/home/PerPageSlider.module"
import Slider from "../../global/Slider"

const PerPageSlider = ({itemPerPage, setItemPerPage, count}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <h4 className={classes.sectionTitle}>{itemPerPage} Of Results Per Page</h4>
      <Box className={classes.resultCount}>
        <h3 className={classes.countNumber}>
          {count}<span className={classes.result}>results</span>
        </h3>        
      </Box>
      <Slider setItemPerPage={setItemPerPage} />
    </Box>
  )
}

export default PerPageSlider;