import {useState, useEffect} from 'react'

const useFetchApi = (endpoint, query) => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)  
  const [isLoading, setLoading] = useState(true);
  const [isMaxPage, setIsMax] = useState(false);

  useEffect(()=>{
    fetchData();
  }, [page, query, endpoint])

  const fetchData = async () => {    
    setLoading(true);
    await fetch(`${endpoint}?page=${page}&${query}`)
      .then((res) => res.json())
      .then((json) => {
        if(json.data.length > 0){
          setData(data.concat(json.data))
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