import {useEffect, useState} from 'react'
import Image from 'next/image'
import { SmallButton } from '../../global/Button';
import styles from "../../../styles/components/pages/shared/Followers.module.css";

const Followers = () => {
  const [activeTab, setActiveTab] = useState("Followers");
  const Tabs = [
                {label:"Followers", link:"https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10"},
                {label:"Following", link:"https://avl-frontend-exam.herokuapp.com/api/users/friends?page=1&pageSize=10"}
              ]
  const [followers, setFollowers] = useState([])
  const currentPage = 1;
  
  useEffect(()=>{
    getData();
  }, [activeTab]);
  
  const getData = () => {
    const tabIdx = Tabs.findIndex(tab => tab.label === activeTab);
    const { link } = Tabs[tabIdx];

    fetch(link)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setFollowers(json.data);
      })
      .catch(err=>{
        console.log(err)
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {
          Tabs.map((tab, i)=>(  
                              <div 
                                className={`${styles.tabLabel} ${tab.label!==activeTab && styles.inactive}`} 
                                key={i}
                                onClick={()=>{setActiveTab(tab.label)}}
                              >
                                {tab.label}
                              </div>
                  ))
        }
        <div className={`${styles.activeLine} ${activeTab==='Followers'?styles.followersActive:styles.followingActive}`} />
      </div>
      {
          followers.length  > 0 &&
          <div className={styles.followersContainer}>
            {
                followers.map((follower, i) => 
                                              <div key={i} className={styles.follower}>
                                                <div className={styles.data}>
                                                  <div className={styles.followerImg}>  
                                                    <Image 
                                                      src={`/images/follower${i<=7?i+1:8}.png`} 
                                                      width={40} 
                                                      height={40} 
                                                      alt={follower.name}
                                                    />
                                                  </div>
                                                  <div className={styles.followerAbout}>                                                    
                                                    <p className={styles.fullname}>
                                                      {follower.name}
                                                    </p>
                                                    <p className={styles.username}>
                                                      {follower.username}
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className={styles.button}>
                                                  <SmallButton label={follower.isFollowing?'Following':'Follow'}
                                                               variant={follower.isFollowing?'contained':'outline'}
                                                  />
                                                </div>
                                              </div>
                )
            }
          </div>
        }
    </div>
  )
}

export default Followers;