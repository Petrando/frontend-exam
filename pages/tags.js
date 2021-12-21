import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {Box} from '@mui/material'
import Layout from "../components/layout";
import TagCard from "../components/pages/tags/TagCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "../components/global/Loading"
import styles from "../styles/components/pages/tags/Tags.module.css"

const Tags = () => {
  const [tagsData, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);
  const router = useRouter()
  const {pageSize, keyword} = router

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async () => {
    setLoading(true)
    await fetch(`https://avl-frontend-exam.herokuapp.com/api/tags?page=${page}&pageSize=${pageSize?pageSize:15}&keyword=${keyword?keyword:''}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if(json.length > 0){
          setData(tagsData.concat(json))
        }
        else{
          setIsMax(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
      setLoading(false)
      setPage(page+1)
  }

  return (
    <Layout>
      <Box className={`pageContentContainer ${styles.container}`}>
        <h3 className={styles.pageTitle}>Tags</h3>
        {
          tagsData.length > 0 &&

            <InfiniteScroll
              className={styles.tagsContainer}
              dataLength={tagsData.length} //This is important field to render the next data
              next={fetchData}
              hasMore={!isMaxPage}
              loader={<Loading />}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>All tags loaded</b>
                </p>
              }
            >
            
              {
                tagsData.map((tag, i)=><TagCard key={i} data={tag} />)
              }
              
            </InfiniteScroll>

        }
      </Box>
    </Layout>
  )
}

// 

export default Tags;