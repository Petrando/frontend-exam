import Navbar from "./Navbar";
import WithFollowersLayout from "./WithFollowersLayout";
import styles from "../../styles/components/layout/HomeLayout.module.css";

const HomeLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.main}>
        <WithFollowersLayout>
          {children}
        </WithFollowersLayout>
      </div>
    </div>
  )
}

export default HomeLayout;