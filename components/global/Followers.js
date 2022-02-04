import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import Image from 'next/image';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SmallButton } from './Button.js';
import { Loading } from './Loading.js';
import { useFetchApi } from '../../hooks/useFetchApi.js';
import { useStyles } from '../../styles/components/pages/shared/Followers.module.js';

export const Followers = () => {
  const classes = useStyles();
  const [activeTab, setActiveTab] = useState('Followers');
  const Tabs = [
                {
                  label:'Followers', 
                  link:'https://avl-frontend-exam.herokuapp.com/api/users/all'
                },
                {
                  label:'Following', 
                  link:'https://avl-frontend-exam.herokuapp.com/api/users/friends'
                }
              ];
  
  const tabIdx = Tabs.findIndex(tab => tab.label === activeTab);
  const { link } = Tabs[tabIdx];

  const router = useRouter()
  const {query:{pageSize}} = router;
  const queryParams = `pageSize=${pageSize?pageSize:15}`;

  const {
    data:followers, 
    nextPage, 
    isLoading, 
    isMaxPage
  } = useFetchApi(link,queryParams);
  
  return (
    <Box className={classes.container}>
      <Box className={classes.tabs}>
        {
          Tabs.map((tab, i)=>(  
                              <Box 
                                className={`${classes.tabLabel} ${tab.label!==activeTab && classes.inactive}`} 
                                key={i}
                                onClick={
                                          ()=>{
                                                if(!isLoading){
                                                  setActiveTab(tab.label)
                                                }                                                                              
                                              }
                                        }
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
            next={nextPage}
            hasMore={!isMaxPage}
            loader={<Loading />}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>All {activeTab==='Followers'?'followers':'following'} loaded</b>
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
                      <SmallButton 
                        label={follower.isFollowing?'Following':'Follow'}
                        variant={follower.isFollowing?'contained':'outline'}
                      />
                    </Box>
                  </Box>
              )
            }
          </InfiniteScroll>
        }
    </Box>
  );
}