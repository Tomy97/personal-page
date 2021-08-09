import styled from "styled-components"
import { Link } from "react-router-dom"

export const NewLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
  color: white;
  transition: .2s;
  border-radius: 5px;
  position: relative;
  :hover {
    box-shadow: 2px 2px 8px #b8b8b8;
    transition: .2s;
  }
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const NameWrapper = styled.div`
  width: 100%;
  background-color: #18A0FB;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  h2 {
    font-size: 16px;
  }
`