import {useStyles} from "../../styles/components/svg-shapes/Action.module"

const Action = () => {
  const classes = useStyles()

  return (
    <svg className={classes.svgContainer} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.2702 4.10362L17.3333 2.16675L6.5 13.0001L17.3333 23.8334L19.2702 21.8965L10.3737 13.0001L19.2702 4.10362Z" fill="white"/>
    </svg>
  )
}

export default Action;