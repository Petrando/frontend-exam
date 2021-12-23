import Button, { LinkButton} from "../../global/Button"
import styles from "../../../styles/components/pages/home/GoToSearch.module.css"
import {useStyles} from "../../../styles/components/pages/home/GoToSearch.module"

const GoToSearch = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <LinkButton label="SEARCH" href="/search" />
    </div>
  )
}

export default GoToSearch;