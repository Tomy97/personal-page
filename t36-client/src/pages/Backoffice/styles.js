import styled from "styled-components"

export const Header = styled.header`
  box-sizing: border-box;
  width: 320px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  position: relative;
  margin-right: 40px; 
  background-color: #18A0FB;
  z-index: 1;
  @media (max-width: 768px) {
    left: ${props => props.isShow ? "0px" : "-320px"};
    transition: .2s;
    margin-right: 0;
    padding-top: 40px;
  }
`

export const CloseMenuIcon = styled.i `
  position: absolute;
  padding: 10px;
  display: none;
  margin: 5px;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    display: inline-block;
  }
`

export const MenuIcon = styled.i`
  position: absolute;
  background-color: #18A0FB;
  padding: 10px;
  border-radius: 50%;
  display: none;
  margin: 5px;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    display: inline-block;
  }
`

export const NavButton = styled.button`
  padding: 8px;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  margin-top: 10px;
  width: 100%;
  transition: .1s;
  :hover {
    background-color: #1777b7;
    transition: .1s
  }
`

export const AdminTitle = styled.h1`
  text-align: center;
  color: white;
  border-bottom: 1px solid white;
`