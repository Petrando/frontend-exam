import Link from "next/link"
import Action from "../../svg-shapes/Action";
import styles from "../../../styles/components/pages/shared/BackToHome.module.css"

const BackToHome = () => {
  return (
    <Link href={"/"}>
      <a className={styles.container}>
        <Action />
        <h4 className={styles.label}>Home Page</h4>
      </a>
    </Link>
  )
}

export default BackToHome