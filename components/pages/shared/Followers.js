import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import {Box} from '@mui/material'
import Image from 'next/image'
import { SmallButton } from '../../global/Button';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from "../../global/Loading"
import { useStyles } from "../../../styles/components/pages/shared/Followers.module"

const Followers = () => {
  const classes = useStyles()
  const [activeTab, setActiveTab] = useState("Followers");
  const Tabs = [
                {label:"Followers", link:"https://avl-frontend-exam.herokuapp.com/api/users/all"},
                {label:"Following", link:"https://avl-frontend-exam.herokuapp.com/api/users/friends"}
              ]
  
  const tabIdx = Tabs.findIndex(tab => tab.label === activeTab);
  const { link } = Tabs[tabIdx];

  const [followers, setFollowers] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  const router = useRouter()
  const {query:{pageSize, keyword}} = router;
  const queryParams = `?page=${page}&pageSize=${pageSize?pageSize:15}`
  
  useEffect(()=>{
    initTabCondition();
  }, [activeTab]);

  const initTabCondition =  () => {
    setFollowers([])
    setPage(1)
    setIsMax(false)
  }

  useEffect(()=>{
    if(followers.length === 0 && page === 1 && !isMaxPage){
      fetchData();
    }
  }, [followers.length, page, isMaxPage])
  
  const fetchData = async () => { 
    setLoading(true);
    await fetch(link + queryParams)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if(json.data.length > 0){
          if(page===1 || followers.length === 0)//page===1 or followers is empty means tab was switched...
          {
            setFollowers(json.data);
          }else{
            setFollowers(followers.concat(json.data))
          }
          
        }else {
          setIsMax(true)
        }
        
      })
      .catch(err=>{
        console.log(err)
      })

    setLoading(false);
    setPage(page + 1)
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.tabs}>
        {
          Tabs.map((tab, i)=>(  
                              <Box 
                                className={`${classes.tabLabel} ${tab.label!==activeTab && classes.inactive}`} 
                                key={i}
                                onClick={()=>{setActiveTab(tab.label)}}
                              >
                                {tab.label}
                              </Box>
                  ))
        }
        <Box className={`${classes.activeLine} ${activeTab==='Followers'?classes.followersActive:classes.followingActive}`} />
      </Box>
      {
        followers.length === 0 && isLoading && <Loading />
      }
      {
          followers.length  > 0 &&
          <InfiniteScroll
              className={classes.followersContainer}
              dataLength={followers.length} //This is important field to render the next data
              next={fetchData}
              hasMore={!isMaxPage}
              loader={<Loading />}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>All {activeTab==="Followers"?"followers":"following"} loaded</b>
                </p>
              }
            >
            {
                followers.map((follower, i) => 
                                              <Box key={i} className={classes.follower}>
                                                <Box className={classes.data}>
                                                  <Box className={classes.followerImg}>  
                                                    <Image 
                                                      src={`/images/follower${i<=7?i+1:8}.png`} 
                                                      width={40} 
                                                      height={40} 
                                                      alt={follower.name}
                                                    />
                                                  </Box>
                                                  <Box className={classes.followerAbout}>                                                    
                                                    <p className={classes.fullname}>
                                                      {follower.name}
                                                    </p>
                                                    <p className={classes.username}>
                                                      {follower.username}
                                                    </p>
                                                  </Box>
                                                </Box>
                                                <Box className={classes.button}>
                                                  <SmallButton label={follower.isFollowing?'Following':'Follow'}
                                                               variant={follower.isFollowing?'contained':'outline'}
                                                  />
                                                </Box>
                                              </Box>
                )
            }
          </InfiniteScroll>
        }
    </Box>
  )
}

export default Followers;