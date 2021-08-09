import React, { useEffect, useState } from 'react'
import TestimonialForm from '../../Components/TestimonialForm'
import { Get } from "../../services/HttpService"
import { useParams } from "react-router-dom"

const EditTestimonial = () => {
  const [data, setData] = useState({})
  const { id } = useParams()
  useEffect(() => {
    Get(`/testimonials/${id}`)
      .then(res => setData(res))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <TestimonialForm isEdit {...data} urlId={id} />
    </>
  )
}

export default EditTestimonial
