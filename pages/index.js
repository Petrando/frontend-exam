import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { HomeLayout } from '../components/layout/HomeLayout.js';
import { NavLogo } from '../components/svg-shapes/NavLogo.js'
import { SearchInput } from '../components/pages/home/SearchInput.js';
import { PageSizeSlider } from '../components/pages/home/PageSizeSlider.js';
import { GoToSearch } from '../components/pages/home/GoToSearch.js';
import { FetchContext } from '../context/FetchContext.js';
import { useStyles } from '../styles/components/pages/home/Home.module.js';

export default function Home() {
  const classes = useStyles();  

  const [pageSize, setPageSize] = useState(15);
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);
  const router = useRouter();

  //additional state to handle sent back query params..
  const [startFetch, setStartFetch] = useState(false);

  /*
  * There are two possibilities of homepage visit:
  * First a fresh page visit, second, re-visit back from Search or Tags page.
  * if there are router query params sent back from BackToHome, 
  * used by Search or Tags page,  deal with them accordingly....
  */ 
  useEffect(()=>{
    (async () => {
      if(router.query.keyword){
        /*
        * if this page is reached by pressing back at Search or Tags page,
        * populate relevant states accordingly
        */
        const {keyword, pageSize} = router.query;
        await setSearchText(keyword);
      }else {
        //if this is a freshly visited page.
        await setSearchText('');
      }
      //then allow start fetch from API
      setStartFetch(true);
    })(); 
  }, []);

  useEffect(()=>{    
    if(startFetch){
      fetchResult();
    }    
  }, [searchText, startFetch]);

  const fetchResult = () => {
    fetch(`https://avl-frontend-exam.herokuapp.com/api/users/all?keyword=${searchText}`)
      .then((res) => res.json())
      .then((json) => {
        setCount(json.total);
      })
      .catch(err=>{
        console.log(err);
      }) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?keyword=${searchText}&pageSize=${pageSize}`);
  }

  return (
    <FetchContext.Provider value={{keyword:searchText, pageSize:pageSize}}>
      <HomeLayout>     
        <Box 
          component='form'
          className={classes.container}
          onSubmit={ (e) => {handleSubmit(e)} }
        >
          <NavLogo atNavbar={false} />
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <PageSizeSlider 
            pageSize={pageSize} 
            setPageSize={setPageSize} 
            count={count} 
          />
          <GoToSearch />                     
        </Box> 
      </HomeLayout>
    </FetchContext.Provider>
  )
}