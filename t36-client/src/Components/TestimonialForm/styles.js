import styled from "styled-components"

export const Form = styled.form`
  max-width: 1024px;
  min-width: 300px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  box-shadow: 2px 2px 6px #d4d4d4;
  margin-top: 40px;
`

export const NameInput = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  transition: .2s;
  box-sizing: border-box;
  margin-bottom: 10px;
  &:focus {
    border-bottom: 2px solid #18A0FB;
    transition: .2s;
  }
`

export const Button = styled.button`
  min-width: 80px;
  padding: 8px;
  background-color: #18A0FB;
  color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  align-self: flex-end;
`

export const FileInput = styled.input`
  padding: 8px;
`