import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_list_action } from "../../redux/Header/headerReducer"
import { useHistory } from "react-router-dom"
import { dataMock } from "./dataMock";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HeaderContainer, 
        HeaderLogo, 
        HeaderNav, 
        NavLinks,
        NavAnchor,
        HeaderButtons, 
        LoginButton, 
        RegisterButton, 
        Icon} from "./styles"
import Logo from "./logo.png";
import useLocalStorage from "../../services/hooks/useLocalStorage"

const Header = () => {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const token = useLocalStorage()

  const dispatch = useDispatch()
  const dataList = useSelector(store => store)
  const user = dataList.profile.loggedUser

  useEffect(() => {
    // axios(config.BASE_URL + "/organizations/1/public")
    //   .then(res => {
    //     if(res.status === 200) {
    //       dispatch(add_list_action(res.data)
    //     }
    //   })
    //   .catch(err => console.log(err))
    dispatch(add_list_action(dataMock))
  }, []);

  const toggleMenu = (e) => {
    setShow(!show);
  };

  return (
    <HeaderContainer>
      <HeaderLogo to="/">
        <img src={Logo} />
      </HeaderLogo>
      <Icon onClick={toggleMenu}>{AiOutlineMenu()}</Icon>
      <HeaderNav isShow={show}>
        <Icon onClick={toggleMenu}>{AiOutlineClose()}</Icon>
        <NavLinks>
          {dataList.header.list.map((item) => (
            <NavAnchor exact={true} key={item.name} activeClassName="active" to={item.path}>{item.name}</NavAnchor>
          ))}
        </NavLinks>
        <HeaderButtons>
          {
            token && user.length
              ? <>
                <LoginButton onClick={() => localStorage.removeItem("token")}>Cerrar sesion</LoginButton>
                <RegisterButton onClick={() => history.push(`/perfil/${user.id}`)} >Perfil</RegisterButton>
              </>
              : <>
                  <LoginButton onClick={() => history.push("/iniciar")}>Iniciar</LoginButton>
                  <RegisterButton onClick={() => history.push("/registro")} >Registrate</RegisterButton>
              </>
          }
        </HeaderButtons>
      </HeaderNav>
    </HeaderContainer>
  );
};


export default Header;
