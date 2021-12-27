import {Box} from '@mui/material'
import { useStyles} from "../../../styles/components/pages/home/PerPageSlider.module"
import Slider from "../../global/Slider"

const PerPageSlider = ({itemPerPage, setItemPerPage, count}) => {
  const classes = useStyles()

  //{itemPerPage}
  //{count}
  return (
    <Box className={classes.container}>
      <h4 className={classes.sectionTitle}># Of Results Per Page</h4>
      <Box className={classes.resultCount}>
        <h3 className={classes.countNumber}>
          30<span className={classes.result}>results</span>
        </h3>        
      </Box>
      <Slider itemPerPage={itemPerPage} setItemPerPage={setItemPerPage} />
    </Box>
  )
}

export default PerPageSlider;