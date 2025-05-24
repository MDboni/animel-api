
import { useEffect, useState } from 'react'
import Navbar from '../Layout/Navbar'
import { Allpets, PostCatagoris } from '../ApiRequest/ApiRequest'
import Category from '../Component/Category'
import Loader from '../Skeleton/Loader'
import SortByPrice from '../Component/SortByPrice'
import FetchAllPets from '../Component/FetchAllPets'
import NoData from '../Component/NoData'

const HomePage = () => {

const [item,setItem] = useState(null)
const[allpets,setAllpets]=useState([])

      useEffect(()=>{
        (async()=>{
        const res = await PostCatagoris()
        setItem(res.categories)
        })()
      },[])

      useEffect(()=>{
        (async()=>{
        const res = await Allpets()
        setAllpets(res.pets)
        })()
      },[])



  return (
    <Navbar>
     

        {
          item===null ? <Loader/> : <Category item={item}/>
        }
        
        <SortByPrice/>
        {
          item.length === 0 ? <NoData/> : <FetchAllPets pets={allpets}/>
        }
        

    </Navbar>
  )
}

export default HomePage