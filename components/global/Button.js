import Link from "next/link"
import styles from "../../styles/components/global/Button.module.css"

const Button = ({label}) => {
  return (
    <button className={styles.button}>
      {label}
    </button>
  )
}

export const LinkButton = ({label, href}) => {
  return (
    <Link href={href}>
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