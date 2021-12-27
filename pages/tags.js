import { useRouter } from 'next/router';
import {Box} from '@mui/material'
import Layout from "../components/layout";
import TagCard from "../components/pages/tags/TagCard";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "../components/global/Loading"
import useFetchApi from '../hooks/useFetchApi';
import {useStyles} from "../styles/components/pages/tags/Tags.module"

const Tags = () => {
  const classes = useStyles()
  const router = useRouter()
  const {pageSize, keyword} = router
  const {data:tagsData, nextPage, isLoading, isMaxPage} = useFetchApi(
    "https://avl-frontend-exam.herokuapp.com/api/tags",
    `pageSize=${pageSize?pageSize:15}&keyword=${keyword?keyword:''}`,
    false
  )

  return (
    <Layout>
      <Box className={classes.container}>
        <h3 className={classes.pageTitle}>Tags</h3>
        {
          tagsData.length === 0 && isLoading &&<Loading />
        }
        {
          tagsData.length > 0 &&

            <InfiniteScroll
              className={classes.tagsContainer}
              dataLength={tagsData.length} //This is important field to render the next data
              next={nextPage}
              hasMore={!isMaxPage}
              loader={<><br /><Loading /></>}
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

export default Tags;