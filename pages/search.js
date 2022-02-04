import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box } from '@mui/material/';
import { Layout } from '../components/layout/index.js';
import { WithFollowersLayout } from '../components/layout/WithFollowersLayout.js';
import { Action } from '../components/svg-shapes/Action.js';
import { Button } from '../components/global/Button.js';
import { SearchCard } from '../components/pages/search/SearchCard.js';
import { Loading } from '../components/global/Loading.js';
import { useFetchApi } from '../hooks/useFetchApi.js';
import { useStyles } from '../styles/components/pages/search/Search.module.js';

const Search = () => {
  const classes = useStyles();

  const router = useRouter();
  const { pageSize, keyword } = router.query;
  const { data:searchData, nextPage, isLoading, isMaxPage } = 
      useFetchApi(
        'https://avl-frontend-exam.herokuapp.com/api/users/all',
        `pageSize=${pageSize?pageSize:15}&keyword=${keyword?keyword:''}`
      );
                                                            
  return (
    <Layout>
      <WithFollowersLayout atHome={false}>
        <Box className={classes.container}>
          <h2 className={classes.pageTitle}>
            Results
            <Link href={'/'}>
              <a className={classes.action}>
                <Action />
              </a>
            </Link>
          </h2>
          {
            searchData.length > 0 && 
            <Box className={classes.grid}>
              {
                searchData.map(
                  (d, i) => <SearchCard data={d} key={i} idx={i} /> 
                )
              }
            </Box>
          }
          {
            isLoading ?
                <Loading /> :
                    <Box className={classes.buttonContainer}>
                      <Button 
                        label={`${!isMaxPage?'MORE':'MAX PAGE'}`} 
                        onClick={
                          ()=>
                            {                                  
                              if(!isMaxPage){                                  
                                nextPage();
                              }
                            }
                        }
                      />  
                    </Box>
          }          
        </Box>
      </WithFollowersLayout>
    </Layout>
  );
}

export default Search;