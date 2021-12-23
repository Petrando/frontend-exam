import {Box} from '@mui/material'
import styles from "../../../styles/components/pages/tags/TagCard.module.css"
import {useStyles} from "../../../styles/components/pages/tags/TagCard.module"

const TagCard = ({data:{name, count}}) => {
  const classes = useStyles()
  
  return (
    <Box className={classes.card}>
      <Box className={classes.cardTitleContainer}>
        <h4 className={`${classes.cardTitle} hideLongWord`}>
          {
            name
          }
        </h4>
      </Box>
      <p className={`${classes.tagTitle} hideLongWord`}>
        {
          name
        }
      </p>
      <p className={classes.tagCount}>
        {count}{' '}Questions
      </p>
    </Box>
  )
}

export default TagCard;