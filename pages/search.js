import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Box, Grid, ThemeProvider } from '@mui/material/'
import Action from "../components/svg-shapes/Action"
import Layout from "../components/layout";
import WithFollowersLayout from "../components/layout/WithFollowersLayout";
import Button from '../components/global/Button';
import SearchCard from '../components/pages/search/SearchCard';
import Loading from '../components/global/Loading';
import styles from "../styles/components/pages/search/Search.module.css"
import theme, {useGlobalStyles} from '../styles/global';
import {useStyles} from "../styles/components/pages/search/Search.module.js"

const Search = () => {

  return (
    <Layout>
      <WithFollowersLayout>
        <ThemeProvider theme={theme}>
          <SearchContent />
        </ThemeProvider>
      </WithFollowersLayout>
    </Layout>
  )
}

const SearchContent = () => {
  const classes = useStyles()
  const globalClasses = useGlobalStyles()

  const [searchData, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  const router = useRouter()
  const {pageSize, keyword} = router.query;

  useEffect(()=>{
     fetchData();
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
  

  return (
    <Box className={`${globalClasses.pageContentContainer} ${classes.container}`}>
          <h2 className={classes.pageTitle}>
            Results
            <Link href={"/"}>
              <a className={classes.action}>
                <Action />
              </a>
            </Link>
          </h2>

          {
            searchData.length > 0 && 
            <Box className={classes.grid}>
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
                                  if(!isMaxPage){                              
                                    setLoading(true)
                                    setPage(page+1)
                                  }
                          }}
            />  
          }
          
        </Box>)
}

export default Search;