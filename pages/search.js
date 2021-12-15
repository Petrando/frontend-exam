import { useEffect, useState } from 'react';
import Link from 'next/link'
import { Grid } from '@mui/material/'
import Action from "../components/svg-shapes/Action"
import Layout from "../components/layout";
import WithFollowersLayout from "../components/layout/WithFollowersLayout";
import SearchCard from '../components/pages/search/SearchCard';
import styles from "../styles/components/pages/search/Search.module.css"

const Search = () => {
  const [searchData, setData] = useState([])
  useEffect(()=>{
    fetch("https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=15")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(searchData.concat(json.data))
      })  
  }, [])

  return (
    <Layout>
      <WithFollowersLayout>
        <div className={`pageContentContainer ${styles.container}`}>
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
            <Grid container spacing={4}>
              {
                searchData.map((d, i) => <SearchCard data={d} key={i} idx={i} /> )
              }
            </Grid>
          }
        </div>
      </WithFollowersLayout>
    </Layout>
  )
}

export default Search;