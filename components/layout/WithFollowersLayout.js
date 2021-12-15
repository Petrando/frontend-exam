import Followers from "../pages/shared/Followers";
import SearchInput from "../pages/home/SearchInput";
import styles from "../../styles/components/layout/WithFollowers.module.css";

const WithFollowersLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <div className={styles.followersShade} />
      </main>
      <Followers />
    </div>
  )
}

export default WithFollowersLayout;