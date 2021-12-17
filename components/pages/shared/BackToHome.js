import Link from "next/link"
import { useRouter } from 'next/router';
import Action from "../../svg-shapes/Action";
import styles from "../../../styles/components/pages/shared/BackToHome.module.css"

const BackToHome = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <Link href={{pathname:"/", query:router.query}}>
      <a className={styles.container}>
        <Action />
        <h4 className={styles.label}>Home Page</h4>
      </a>
    </Link>
  )
}

export default BackToHome