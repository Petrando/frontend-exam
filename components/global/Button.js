import { useContext } from 'react';
import { FetchContext } from '../../context/FetchContext';
import Link from 'next/link';
import { Button as MuiButton } from '@mui/material';
import { useStyles } from '../../styles/components/global/Button.module.js';

export const Button = ({label, onClick}) => {
  const classes = useStyles();

  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  );
}

export const SubmitButton = ({label}) => {
  const classes = useStyles();

  return (
    <MuiButton
      className={classes.button}
      type='submit'
    >
      {label}
    </MuiButton> 
  );
}

export const LinkButton = ({label, href}) => {
  const classes = useStyles()
  const fetchParams = useContext(FetchContext);
  
  return (
    <Link href={{pathname:href, query:fetchParams}}>
      <a className={classes.button}>
        {label}
      </a>
    </Link>
  );
}

export const SmallButton = ({label, variant}) => {
  const classes = useStyles()
  return (
    <button className={`${classes.smallButton} ${variant==='contained'?classes.smallButtonContained:classes.smallButtonOutlined}`}>
      {label}
    </button>
  );
}