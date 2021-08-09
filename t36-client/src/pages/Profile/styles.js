import styled from "styled-components"

export const ProfileContainer = styled.div`
  box-sizing: border-box;
  max-width: 1024px;
  min-width: 300px;
  padding: 10px;
  width: 70%;
  border: 1px #888888 solid;
  border-radius: 5px;
  box-shadow: 4px 4px 20px #888888;
  min-height: 200px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameContainer = styled.div`
  display: flex;
`

export const NameItem = styled.p`
  display: inline-block;
  margin: 0;
  margin-bottom: 5px;
  padding-right: 5px;
  font-size: 20px;
  font-weight: 600;
`

export const EmailItem = styled.span`
  color: gray;
  font-weight: 300;
`

export const ButtonContainer = styled.div`
`

export const ButtonItem = styled.button`
  padding: 8px;
  margin-right: 5px;
  background-color: ${props => props.isEdit ? "#5fff5f" : "#ff3a3a"};
  border: none;
  color: ${props => props.isEdit ? "black" : "white"};
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  :hover {
    background-color: ${props => props.isEdit ? "#54ce54" : "#fd2c2c"};
  }
`