import React, {useEffect, useState} from 'react'
import { NewLink, ImageWrapper, NameWrapper } from "./styles"

const NewItem = (props) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  })

  return (
    <NewLink to={`/novedad/${props.id}`}>
      {
        !isMounted ? <></>
          : <ImageWrapper style={{backgroundImage: `url(http://localhost:3001/files/getfile/${props.image})`}}>
          </ImageWrapper>
      }
      <NameWrapper>
        <h2>{props.name}</h2>
      </NameWrapper>
    </NewLink>
  )
}

export default NewItem
