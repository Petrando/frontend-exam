import {Box} from '@mui/material'
import styles from "../../../styles/components/pages/tags/TagCard.module.css"

const TagCard = ({data:{name, count}}) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.cardTitleContainer}>
        <h4 className={`${styles.cardTitle} hideLongWord`}>
          {
            name
          }
        </h4>
      </Box>
      <p className={`${styles.tagTitle} hideLongWord`}>
        {
          name
        }
      </p>
      <p className={styles.tagCount}>
        {count}{' '}Questions
      </p>
    </Box>
  )
}

export default TagCard;