import axios from 'axios'
import React from 'react'
import { useHistory } from "react-router-dom"
import { alertConfirm, alertSuccess, alertError } from "../../elements/Alert"
import {  ItemContainer, DeleteButton, EditButton } from "./style"

const ActivityItem = (props) => {
  const history = useHistory()


  const handleEdit = (e) => {
    history.push(`/backoffice/actividades/${props.id}`)
  }

  const handleDelete = (e) => {
    alertConfirm({
      title: "Estas seguro que quieres eliminar esta actividad?", 
      onConfirmText: "Eliminado correctamente", 
      callback: () => {
        axios.delete(`/activities/${props.id}`)
          .then(res => alertSuccess({ title: "Eliminado correctamente" }))
          .catch(err => alertError({ title: "Error al eliminar" }))
    }})
  }

  return (
    <ItemContainer>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div>
        <EditButton onClick={handleEdit}>Editar</EditButton>
        <DeleteButton onClick={handleDelete}>Eliminar</DeleteButton>
      </div>
    </ItemContainer>
  )
}

export default ActivityItem
