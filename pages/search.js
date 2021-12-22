import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material/'
import Action from "../components/svg-shapes/Action"
import Layout from "../components/layout";
import WithFollowersLayout from "../components/layout/WithFollowersLayout";
import Button from '../components/global/Button';
import SearchCard from '../components/pages/search/SearchCard';
import Loading from '../components/global/Loading';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from "../styles/components/pages/search/Search.module.css"

const Search = () => {
  const [searchData, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  const router = useRouter()
  const {pageSize, keyword} = router.query;

  const { width } = useWindowDimensions();

  useEffect(()=>{
     fetchData();
     console.log(page)
  }, [page])

  const fetchData = async () => {    
    await fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?page=${page}&pageSize=${pageSize?pageSize:15}&keyword=${keyword?keyword:''}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if(json.data.length > 0){
          setData(searchData.concat(json.data))
        }else{
          setIsMax(true)
        }
        
      })
      .catch(err => {
        console.log(err)
      }) 

    setLoading(false)
  }
  console.log(router.query)

  return (
    <Layout>
      <WithFollowersLayout atHome={false}>
        <Box className={`pageContentContainer ${styles.container}`}>
          <h2 className={styles.pageTitle}>
            Results
            <Link href={"/"}>
              <a className={styles.action}>
                <Action />
              </a>
            </Link>
          </h2>

          {
            searchData.length > 0 && 
            <Box className={styles.grid}>
              {
                searchData.map((d, i) => <SearchCard data={d} key={i} idx={i} /> )
              }
            </Box>
          }
          {
            isLoading?
            <Loading />:
            <Button label={`${!isMaxPage?'MORE':'MAX PAGE'}`} 
                    onClick={()=>{
                                  console.log('button clicked')
                                  if(!isMaxPage){
                                    console.log('...next page')
                                    setLoading(true)
                                    setPage(page+1)
                                  }
                          }}
            />  
          }
          
        </Box>
      </WithFollowersLayout>
    </Layout>
  )
}

export default Search;