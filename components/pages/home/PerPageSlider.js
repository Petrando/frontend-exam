import styles from "../../../styles/components/pages/home/PerPageSlider.module.css"
import homeStyles from "../../../styles/components/pages/home/Home.module.css"
import Slider from "../../global/Slider"

const PerPageSlider = () => {
  return (
    <div className={styles.container}>
      <h4># Of Results Per Page</h4>
      <div className={styles.resultCount}>
        <span className={styles.countNumber}>30</span>{" "}<span className={styles.result}>results</span>
      </div>
      <Slider />
    </div>
  )
}

export default PerPageSlider;