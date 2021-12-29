import {useState, useEffect} from 'react'

const useFetchApi = (endpoint, params) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  const freshPage = data.length === 0 && page === 1;

  useEffect(()=>{
    //load data only when data is empty, or fresh page...
    if(freshPage){
      fetchData()
    }
  }, [data.length])

  useEffect(()=>{
    //load data when first page already loaded (not fresh page), when page changes...
    if(!freshPage){
      fetchData();        
    }    
  }, [page])

  useEffect(()=>{    
    (async ()=>{
      await setIsMax(false)      
      await setPage(1)
      setData([])            
    })()
  }, [endpoint, params])

  const fetchData = async () => {    
    await setLoading(true);
    const ApiEndpoint = `${endpoint}?page=${page}&${params}`;
    
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