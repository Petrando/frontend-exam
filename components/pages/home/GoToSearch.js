import { SubmitButton} from '../../global/Button.js';
import { useStyles } from '../../../styles/components/pages/home/GoToSearch.module.js';

export const GoToSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SubmitButton label='SEARCH' />
    </div>
  );
}