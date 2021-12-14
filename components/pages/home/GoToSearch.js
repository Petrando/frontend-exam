import Button, { LinkButton} from "../../global/Button"
import styles from "../../../styles/components/pages/home/GoToSearch.module.css"

const GoToSearch = () => {
  return (
    <div className={styles.container}>
      <LinkButton label="SEARCH" href="/search" />
    </div>
  )
}

export default GoToSearch;