import Link from 'next/link'
import Action from "../components/svg-shapes/Action"
import Layout from "../components/layout";
import WithFollowersLayout from "../components/layout/WithFollowersLayout";
import styles from "../styles/components/pages/search/Search.module.css"

const Search = () => {
  return (
    <Layout>
      <WithFollowersLayout>
        <div className={`pageContentContainer ${styles.container}`}>
          <h2 className={styles.pageTitle}>
            Results
            <Link href={"/"}>
              <a className={styles.action}>
                <Action />
              </a>
            </Link>
          </h2>
        </div>
      </WithFollowersLayout>
    </Layout>
  )
}

export default Search;