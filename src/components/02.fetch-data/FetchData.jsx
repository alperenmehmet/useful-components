import {getData} from './getData'
import {useState, useEffect} from 'react'

const FetchData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData().then((res) => setData(res))
  }, [])

  console.log(data)
  return <div>hello fetch</div>
}

export default FetchData
