import {useEffect, useState} from 'react'
import styles from '../styles/components/pages/home/Home.module.css'
import HomeLayout from '../components/layout/HomeLayout'
import SearchInput from '../components/pages/home/SearchInput'
import PerPageSlider from '../components/pages/home/PerPageSlider'
import GoToSearch from '../components/pages/home/GoToSearch'

export default function Home() {
  const [itemPerPage, setItemPerPage] = useState(15);
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=>{
     fetchResult();
  }, [searchText])

  const fetchResult = () => {
    fetch("https://avl-frontend-exam.herokuapp.com/api/users/all?keyword=" + searchText)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setCount(json.total)
      })
      .catch(err=>{
        console.log(err)
      }) 
  }
  return (
    <HomeLayout>     
      <div className={`pageContentContainer ${styles.container} `}>
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
        <PerPageSlider itemPerPage={itemPerPage} setItemPerPage={setItemPerPage} count={count} />
        <GoToSearch />            
      </div> 
    </HomeLayout>
  )
}