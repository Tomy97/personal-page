import styled from "styled-components"

export const NewsGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  text-align: center;
  max-width: 1024px;
  width: 70%;
  grid-gap: 20px;
  margin: 0 auto;
  margin-top: 40px;
`

export const NewsTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  margin: 0;
  font-weight: bold;
`