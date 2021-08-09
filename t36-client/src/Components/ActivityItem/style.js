import styled from "styled-components"

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  width: 100%;
  align-items: center;
  box-shadow: 4px 4px 6px #b8b8b8;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 10px;
`

export const DeleteButton = styled.button`
  padding: 8px;
  background-color: #ff3a3a;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    background-color: #fd2c2c
  }
`

export const EditButton = styled.button`
  padding: 8px;
  background-color: #5fff5f;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  :hover {
    background-color: #54ce54
  }
`