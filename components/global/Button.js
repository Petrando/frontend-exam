import { useContext } from 'react'
import FetchContext from '../../context/FetchContext'
import Link from "next/link"
import styles from "../../styles/components/global/Button.module.css"

const Button = ({label, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  )
}

export const LinkButton = ({label, href}) => {
  const fetchParams = useContext(FetchContext);
  
  return (
    <Link href={{pathname:href, query:fetchParams}}>
      <a className={styles.button}>
        {label}
      </a>
    </Link>
  )
}

export const SmallButton = ({label, variant}) => {
  return (
    <button className={`${styles.smallButton} ${variant==='contained'?styles.smallButtonContained:styles.smallButtonOutlined}`}>
      {label}
    </button>
  )
}

export default Button;