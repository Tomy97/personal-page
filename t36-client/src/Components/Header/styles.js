import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const HeaderLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: 30%;
  min-width: 120px;
  max-width: 120px;
  height: 40px;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    position: fixed;
    padding: 0;
    flex-direction: column;
    width: 320px;
    background-color: #18A0FB;
    height: 100vh;
    bottom: 0;
    right: ${props => props.isShow ? "0" 
    : "-320px"};
    transition: .2s;
    i {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
`

export const NavLinks = styled.div`
  @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      margin: 0px 5px;
      font-size: 14px;
    }
`

export const NavAnchor = styled(NavLink)`
  margin: 0px 4px;
    text-decoration: none;
    color: #18A0FB;
    font-weight: 500;
    &.active {
      border-bottom: 1px #18A0FB solid;
    }
    @media (max-width: 1023px) {
      color: white;
      margin-top: 5px;
    }
`

export const HeaderButtons = styled.div`
  padding-right: 10px;
  button {
    padding: 8px 30px;
    margin: 0px 3px;
    font-size: 15px;
    border-radius: 6px;
    border: 1px solid #18A0FB;
    font-weight: 500;
    @media (max-width: 1024px) {
      padding: 8px, 20px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 5px;
  }
`

export const LoginButton = styled.button`
  background-color: white;
  color: #18A0FB;
  cursor: pointer;
`

export const RegisterButton = styled.button`
  background-color: #18A0FB;
  color: white;
  cursor: pointer;
`

export const Icon = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
    font-size: 18px;
    margin-right: 10px;
  }
`

