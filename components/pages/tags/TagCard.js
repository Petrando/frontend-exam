import styles from "../../../styles/components/pages/tags/TagCard.module.css"

const TagCard = ({data:{name, count}}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitleContainer}>
        <h4 className={`${styles.cardTitle} hideLongWord`}>
          {
            name
          }
        </h4>
      </div>
      <p className={`${styles.tagTitle} hideLongWord`}>
        {
          name
        }
      </p>
      <p className={styles.tagCount}>
        {count}{' '}Questions
      </p>
    </div>
  )
}

export default TagCard;