import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CategoriIDFetch, PostCatagoris } from "../ApiRequest/ApiRequest"
import FetchAllPets from "../Component/FetchAllPets"
import Category from "../Component/Category"
import Navbar from './../Layout/Navbar';
import SortByPrice from './../Component/SortByPrice';
import NoData from "../Component/NoData"
import Loader from "../Skeleton/Loader"

const ByCategoryPage = () => {
  const [item, setItem] = useState([])        
  const [categories, setCategories] = useState(null) 

  const { CategoryID } = useParams()

  useEffect(() => {
    (async () => {
      const res = await CategoriIDFetch(CategoryID)
      setItem(res.data)
    })()
  }, [CategoryID])

  useEffect(() => {
    (async () => {
      const res = await PostCatagoris()
      setCategories(res.categories)
    })()
  }, [])

  return (
    <Navbar>
        {categories === null ? (
          <Loader />
        ) : (
          <Category item={categories}>
            <SortByPrice />
            {item.length === 0 ? <NoData /> : <FetchAllPets pets={item} />}
          </Category>
        )}
    </Navbar>

  )
}

export default ByCategoryPage
