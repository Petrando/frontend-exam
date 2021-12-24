import { useContext } from 'react'
import FetchContext from '../../context/FetchContext'
import Link from "next/link"
import {useStyles} from "../../styles/components/global/Button.module"

const Button = ({label, onClick}) => {
  const classes = useStyles()
  return (
    <button className={classes.button} onClick={onClick}>
      {label}
    </button>
  )
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
  )
}

export const SmallButton = ({label, variant}) => {
  const classes = useStyles()
  return (
    <button className={`${classes.smallButton} ${variant==='contained'?classes.smallButtonContained:classes.smallButtonOutlined}`}>
      {label}
    </button>
  )
}

export default Button;