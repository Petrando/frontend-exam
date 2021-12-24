import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import {Box} from '@mui/material'
import HomeLayout from '../components/layout/HomeLayout'
import NavLogo from '../components/svg-shapes/NavLogo'
import SearchInput from '../components/pages/home/SearchInput'
import PerPageSlider from '../components/pages/home/PerPageSlider'
import GoToSearch from '../components/pages/home/GoToSearch'
import FetchContext from "../context/FetchContext"
import {useStyles} from '../styles/components/pages/home/Home.module'

export default function Home() {
  const classes = useStyles()

  //additional state to handle send back params..
  const [initByRouter, setInitByRouter] = useState(false)
  
  const [itemPerPage, setItemPerPage] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const router = useRouter()

  useEffect(()=>{    
    if(initByRouter){
      fetchResult();
    }    
  }, [searchText, initByRouter])

  useEffect(()=>{//if there are router query params sent back from backToHome, proccess them here
    (async () => {
      if(router.query.keyword){
        const {keyword, pageSize} = router.query;
        await setSearchText(keyword)     
        //fetchResult()
        //setItemPerPage(router.query.pageSize)
      }else {
        await setSearchText('')
      }

      setInitByRouter(true);
    })()
    
  }, [])

  const fetchResult = () => {
    fetch("https://avl-frontend-exam.herokuapp.com/api/users/all?keyword=" + searchText)
      .then((res) => res.json())
      .then((json) => {
        setCount(json.total)
      })
      .catch(err=>{
        console.log(err)
      }) 
  }

  return (
    <FetchContext.Provider value={{keyword:searchText, pageSize:itemPerPage}}>
      <HomeLayout>     
        <Box className={classes.container}>
          <NavLogo atNavbar={false} />
          <SearchInput searchText={searchText} setSearchText={setSearchText} />
          <PerPageSlider itemPerPage={itemPerPage} setItemPerPage={setItemPerPage} count={count} />
          <GoToSearch />                     
        </Box> 
      </HomeLayout>
    </FetchContext.Provider>
  )
}