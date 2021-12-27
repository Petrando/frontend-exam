import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Box } from '@mui/material/'
import Action from "../components/svg-shapes/Action"
import Layout from "../components/layout";
import WithFollowersLayout from "../components/layout/WithFollowersLayout";
import Button from '../components/global/Button';
import SearchCard from '../components/pages/search/SearchCard';
import Loading from '../components/global/Loading';
import useFetchApi from '../hooks/useFetchApi';
import {useStyles} from "../styles/components/pages/search/Search.module"

const Search = () => {
  const classes = useStyles()

  const router = useRouter()
  const {pageSize, keyword} = router.query;
  const {data:searchData, nextPage, isLoading, isMaxPage} = useFetchApi(
                                                              "https://avl-frontend-exam.herokuapp.com/api/users/all",
                                                              `pageSize=${pageSize?pageSize:15}&keyword=${keyword?keyword:''}`
                                                            )
                                                              
  return (
    <Layout>
      <WithFollowersLayout atHome={false}>
        <Box className={classes.container}>
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
                                    nextPage()
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