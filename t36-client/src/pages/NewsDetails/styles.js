import styled from "styled-components"

export const DetailsContainer = styled.div`
  max-width: 1024px;
  min-width: 300px;
  width: 70%;
  margin: 0 auto;
  border-radius: 5px;
  border: 2px #f3f3f3 solid;
  box-sizing: border-box;
  margin-top: 40px;
  position: relative;
  min-height: 200px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`

export const DetailsTitle = styled.h2`
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 8px;
  color: white;
  background-color: #18A0FB;
  @media (max-width: 425px) {
    font-size: 18px;
  }
`

export const DetailsParagraph = styled.p`
  text-align: center;
  padding: 8px;
  height: auto;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`