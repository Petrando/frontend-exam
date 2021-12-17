import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "../components/layout";
import TagCard from "../components/pages/tags/TagCard";
import styles from "../styles/components/pages/tags/Tags.module.css"

const Tags = () => {
  const [tagsData, setData] = useState([])
  const router = useRouter()

  useEffect(()=>{
    //fetchData;
  }, [])

  const fetchData = () => {
    fetch("https://avl-frontend-exam.herokuapp.com/api/tags")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(tagsData.concat(json))
      })
      .catch(err => {
        console.log(err)
      })
  }
  console.log(router.query)

  return (
    <Layout>
      <div className={`pageContentContainer ${styles.container}`}>
        <h3 className={styles.pageTitle}>Tags</h3>
        {
          tagsData.length > 0 &&
          <div className={styles.tagsContainer}>
          {
            tagsData.map((tag, i)=><TagCard key={i} data={tag} />)
          }
          </div>
        } 
      </div>
    </Layout>
  )
}

// 

export default Tags;