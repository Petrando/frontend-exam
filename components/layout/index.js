import Navbar from "./Navbar";
import BackToHome from "../pages/shared/BackToHome";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "../../styles/components/layout/Layout.module.css"

const Layout = ({children}) => {
  const {width} = useWindowDimensions();

  return (
    <div className={styles.container}>
      {width > 414?<Navbar />:<BackToHome />}
      <div className={styles.main}>
        {children}
      </div>
    </div>

  )
}

export default Layout;

