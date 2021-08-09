import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { add_user_action } from "../../redux/Profile/profileReducer"
import { useParams } from "react-router-dom"
import { Get } from "../../services/HttpService"
import dataMock from "./dataMock"
import { ProfileContainer, DataContainer, NameContainer, NameItem, EmailItem, ButtonContainer, ButtonItem } from "./styles"
import SpinnerLoader from "../../Components/LoaderSpinner"
import { alertSuccess, alertConfirm } from "../../elements/Alert"


const Profile = () => {
  // const { id } = useParams() aca buscaria el id del url para hacer la peticion de este perfil
  const dispatch = useDispatch()
  const dataList = useSelector(store => store.profile)

  useEffect(() => {
    // Get(`/users/${id}`)
    //   .then(res => dispatch(add_user_action(res)))
    //   .catch(err => swal.fire("Error al obtener usuario","", "error"))
    // ahi se haria la peticion y se agregaria al estado

    dispatch(add_user_action(dataMock))
  }, [])

  const handleEdit = () => {
    alertSuccess({ title: "Edited" })
  }

  const handleDelete = () => {
    alertConfirm({ title: "¿Seguro que desea eliminar el perfil?", 
                  onConfirmText: "Perfil eliminado",
                  onDenyText: "Perfil no eliminado",
                  callback: () => {console.log("Perfil eliminado")} })
  }

  return (
    <ProfileContainer>
      {
        !dataList.user.length 
          ? <SpinnerLoader />
          : <>
            <DataContainer>
              <NameContainer>
                <NameItem>{dataList.user[0].name}</NameItem>
                <NameItem>{dataList.user[0].lastname}</NameItem>
              </NameContainer>
              <EmailItem>{dataList.user[0].email}</EmailItem>
            </DataContainer>
            <ButtonContainer>
              <ButtonItem onClick={handleEdit} isEdit>Editar perfil</ButtonItem>
              <ButtonItem onClick={handleDelete}>Eliminar perfil</ButtonItem>
            </ButtonContainer>
          </>
      }
    </ProfileContainer>
  )
}

export default Profile
