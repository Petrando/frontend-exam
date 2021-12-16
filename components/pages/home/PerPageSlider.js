import styles from "../../../styles/components/pages/home/PerPageSlider.module.css"
import homeStyles from "../../../styles/components/pages/home/Home.module.css"
import Slider from "../../global/Slider"

const PerPageSlider = ({itemPerPage, setItemPerPage, count}) => {
  return (
    <div className={styles.container}>
      <h4>{itemPerPage} Of Results Per Page</h4>
      <div className={styles.resultCount}>
        <span className={styles.countNumber}>{count}</span>{" "}<span className={styles.result}>results</span>
      </div>
      <Slider setItemPerPage={setItemPerPage} />
    </div>
  )
}

export default PerPageSlider;