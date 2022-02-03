import Button, { LinkButton, SubmitButton} from "../../global/Button"
import {useStyles} from "../../../styles/components/pages/home/GoToSearch.module"

const GoToSearch = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <SubmitButton label="SEARCH" />
    </div>
  )
}

export default GoToSearch;