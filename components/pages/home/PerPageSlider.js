import { Box } from '@mui/material';
import { useStyles} from '../../../styles/components/pages/home/PerPageSlider.module.js';
import { PageSizeSlider } from '../../global/Slider.js';

export const PerPageSlider = ({ itemPerPage, setItemPerPage, count}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <h4 className={classes.sectionTitle}>{itemPerPage} Of Results Per Page</h4>
      <Box className={classes.resultCount}>
        <h3 className={classes.countNumber}>
          {count}<span className={classes.result}>results</span>
        </h3>        
      </Box>
      <PageSizeSlider itemPerPage={itemPerPage} setItemPerPage={setItemPerPage} />
    </Box>
  );
}