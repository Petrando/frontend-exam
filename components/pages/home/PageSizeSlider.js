import { Box } from '@mui/material';
import { useStyles} from '../../../styles/components/pages/home/PerPageSlider.module.js';
import { PageSlider } from '../../global/Slider.js';

export const PageSizeSlider = ({ pageSize, setPageSize, count}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <h4 className={classes.sectionTitle}>{pageSize} Of Results Per Page</h4>
      <Box className={classes.resultCount}>
        <h3 className={classes.countNumber}>
          {count}<span className={classes.result}>results</span>
        </h3>        
      </Box>
      <PageSlider pageSize={pageSize} setPageSize={setPageSize} />
    </Box>
  );
}