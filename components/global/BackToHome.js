import Link from 'next/link';
import { useRouter } from 'next/router';
import { Action } from '../svg-shapes/Action.js';
import { useStyles } from '../../styles/components/pages/shared/BackToHome.module.js';

export const BackToHome = () => {
  const classes = useStyles();
  const router = useRouter();
  
  return (
    <Link href={{ pathname:'/', query:router.query }}>
      <a className={classes.container}>
        <Action />
        <h4 className={classes.label}>Home Page</h4>
      </a>
    </Link>
  );
}