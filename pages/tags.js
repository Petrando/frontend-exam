import Layout from "../components/layout";
import styles from "../styles/components/pages/tags/Tags.module.css"

const Tags = () => {
  return (
    <Layout>
      <div className={`pageContentContainer ${styles.container}`}>
        <h3 className={styles.pageTitle}>Tags</h3> 
      </div>
    </Layout>
  )
}

// 

export default Tags;