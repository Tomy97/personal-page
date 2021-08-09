import React, { useEffect } from 'react'
import { get_news } from "../../redux/News/newsReducer"
import { useDispatch, useSelector } from "react-redux"
import { Get } from "../../services/HttpService"
import { alertError } from "../../elements/Alert"
import { NewsGrid, NewsTitle } from "./styles"
import NewItem from "../../Components/NewItem/index"
import SpinnerLoader from '../../Components/LoaderSpinner'

const News = () => {
  const newsList = useSelector(store => store.news.news)
  const dispatch = useDispatch()

  useEffect(() => {
    Get("/news")
      .then(res => dispatch(get_news(res)))
      .catch(err => alertError({ title: "Error obteniendo las novedades" }))
 }, [])

  return (
    <>
      <NewsTitle>Novedades</NewsTitle>
      {newsList.length > 0 ?
        <NewsGrid>
          {newsList.map(item => (
              <NewItem key={item.id} {...item} />
            ))
          }
        </NewsGrid>
        :
        <SpinnerLoader />
      }
    </>
  )
}

export default News
