import React, { useState } from 'react'
import { Header, MenuIcon, CloseMenuIcon, NavButton, AdminTitle } from "./styles"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Backoffice = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  const roleId = 1

  const defaultList = [
    {
      name: "Inicio",
      path: "/"
    },
    {
      name: "Nosotros",
      path: "/about"
    },
    {
      name: "Actividades",
      path: "/activities"
    },
    {
      name: "Novedades",
      path: "/news"
    },
    {
      name: "Testimonios",
      path: "/testimonials"
    },
    {
      name: "Contacto",
      path: "/contact"
    },
    {
      name: "Contribuye",
      path: "/contribute"
    }
  ]

  const adminList = [
    {
      name: "Datos de contacto"
    },
    {
      name: "Usuarios"
    },
    {
      name: "Roles"
    }
  ]

  return (
    <>
      <Header isShow={show}>
        <CloseMenuIcon onClick={toggleShow}>{AiOutlineClose({size: 18})}</CloseMenuIcon>
        {
          defaultList.map(item => (
            <NavButton>{item.name}</NavButton>
          ))
        }
                {
          roleId !== 1
            ? null
            : <>
                <AdminTitle>Admin list</AdminTitle>
                {
                  adminList.map(item => (
                    <NavButton>{item.name}</NavButton>
                  )) 
                }
              </>
        }
      </Header>
      {
        show ? null
        : <MenuIcon onClick={toggleShow}>{AiOutlineMenu()}</MenuIcon>
      }
    </>
  )
}

export default Backoffice
