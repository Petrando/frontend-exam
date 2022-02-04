import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { HomeLayout } from '../components/layout/HomeLayout.js';
import { NavLogo } from '../components/svg-shapes/NavLogo.js'
import { SearchInput } from '../components/pages/home/SearchInput.js';
import { PerPageSlider } from '../components/pages/home/PerPageSlider.js';
import { GoToSearch } from '../components/pages/home/GoToSearch.js';
import { FetchContext } from '../context/FetchContext.js';
import { useStyles } from '../styles/components/pages/home/Home.module.js';

export default function Home() {
  const classes = useStyles();  

  const [itemPerPage, setItemPerPage] = useState(15);
  const [searchText, setSearchText] = useState('');
  const [count, setCount] = useState(0);
  const router = useRouter();

  //additional state to handle sent back params..
  const [initByRouter, setInitByRouter] = useState(false);

  useEffect(()=>{    
    if(initByRouter){
      fetchResult();
    }    
  }, [searchText, initByRouter]);

  //if there are router query params sent back from backToHome, handle them here
  useEffect(()=>{
    (async () => {
      if(router.query.keyword){
        const {keyword, pageSize} = router.query;
        await setSearchText(keyword);
      }else {
        await setSearchText('');
      }

      setInitByRouter(true);
    })(); 
  }, []);

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
    router.push(`/search?keyword=${searchText}&pageSize=${itemPerPage}`);
  }

  return (
    <FetchContext.Provider value={{keyword:searchText, pageSize:itemPerPage}}>
      <HomeLayout>     
        <Box 
          component='form'
          className={classes.container}
          onSubmit={ (e) => {handleSubmit(e)} }
        >
          <NavLogo atNavbar={false} />
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <PerPageSlider 
            itemPerPage={itemPerPage} 
            setItemPerPage={setItemPerPage} 
            count={count} 
          />
          <GoToSearch />                     
        </Box> 
      </HomeLayout>
    </FetchContext.Provider>
  )
}