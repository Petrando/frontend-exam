import {useState, useEffect} from 'react'

const useFetchApi = (endpoint, query, pageChangeble = true) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  useEffect(()=>{
    fetchData();    
  }, [page, query, endpoint])

  const fetchData = async () => {    
    setLoading(true);
    const ApiEndpoint = pageChangeble?`${endpoint}?page=${page}&${query}`:endpoint;
    
    await fetch(ApiEndpoint)
      .then((res) => res.json())
      .then((json) => {
        //when call tags API, the returned JSON is the data array, while at follower's API the returned json
        //is an object which have data array as property...
        const newData = Array.isArray(json)?json:json.data;
                
        if(newData.length > 0){
          setData(data.concat(newData))
        }else{
          setIsMax(true)
        }
        
      })
      .catch(err => {
        console.log(err)
      }) 

    setLoading(false)
  }

  const nextPage = () => {
    setPage(page + 1);
  }

  return {data, nextPage, isLoading, isMaxPage}
}

export default useFetchApi;