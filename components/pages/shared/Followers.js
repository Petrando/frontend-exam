import {useEffect} from 'react'
import styles from "../../../styles/components/pages/shared/Followers.module.css";

const friends = [{"id":"eb017433-561c-4131-972c-f31deba65404","name":"Annabell Haley","username":"Bertrand2","avater":"https://cdn.fakercloud.com/avatars/91bilal_128.jpg","isFollowing":true},{"id":"43d16cb3-3e57-4ee6-a877-150d6906f315","name":"Belle Kirlin","username":"Anibal.Monahan","avater":"https://cdn.fakercloud.com/avatars/oksanafrewer_128.jpg","isFollowing":true},{"id":"2a0d51c3-733e-4b95-8aac-01c5a3c7a3ca","name":"Taya Wilkinson","username":"Dustin53","avater":"https://cdn.fakercloud.com/avatars/h1brd_128.jpg","isFollowing":true},{"id":"53b650a2-b7e0-41ab-bac8-bd5d2b6cc827","name":"Roslyn Hettinger","username":"Ransom.VonRueden15","avater":"https://cdn.fakercloud.com/avatars/jqiuss_128.jpg","isFollowing":true},{"id":"6288556f-1fbe-4be8-bc36-8975636cb194","name":"Keon Romaguera","username":"Jackeline_Wunsch11","avater":"https://cdn.fakercloud.com/avatars/conspirator_128.jpg","isFollowing":true},{"id":"9e8368a7-633b-4a60-97b6-e4af0a79eb66","name":"Tiana Lakin","username":"Kyle_Flatley37","avater":"https://cdn.fakercloud.com/avatars/maiklam_128.jpg","isFollowing":false},{"id":"699af236-9ca5-4792-a41f-916503f8e3f0","name":"Luisa Hudson","username":"Kali47","avater":"https://cdn.fakercloud.com/avatars/demersdesigns_128.jpg","isFollowing":false},{"id":"0d0d915b-49c6-465e-a6b9-c7ac60307eb8","name":"Nakia Doyle","username":"Bonita.OHara","avater":"https://cdn.fakercloud.com/avatars/jeffgolenski_128.jpg","isFollowing":false},{"id":"1f2165e4-4afc-4723-acd2-04fdf3f46225","name":"Mazie Tillman","username":"Ferne.Olson","avater":"https://cdn.fakercloud.com/avatars/dss49_128.jpg","isFollowing":true},{"id":"542d3f23-0492-4a75-b203-9fc1088c1932","name":"Andre MacGyver","username":"Keagan_Willms","avater":"https://cdn.fakercloud.com/avatars/guischmitt_128.jpg","isFollowing":true}]
const Followers = () => {
  useEffect(()=>{
    console.log(friends.length);
  })
  return (
    <div className={styles.container}>
      Followers
    </div>
  )
}

export default Followers;