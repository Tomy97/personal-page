import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Get, Put } from "../../services/HttpService";
import { alertError, alertSuccess } from "../../elements/Alert";
import EditUserForm from '../EditUserForm/EditUserForm';
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles({
  table: {
    minWidth: "50%",
  },
});

const TableUsers = () => {
  const [values, setValues] = useState();
  const classes = useStyles();
  const table = useSelector((state) => state.table);
  let history = useHistory()

  const handleEdit = (id) => {
    history.push(`/editarUsuario/${id}`)
  };

  const handleDelete = (id) => {
    Delete(`/users/${id}`)
    values.filter((user) => user.id !== id)
    if (values) {
      alertSuccess({
        title: 'Success message ',
        text: 'the user its was deleted successfully'
      })
    }
  }


  useEffect(() => {
   Get(`/users/`)
     .then((res) => {
       setValues(res)
       console.log(res);
     })
      .catch((error) => {
        alertError({ title: "There was an error", text: "Please, try again" })
      })
  }, [])

  useEffect(() => {
    console.log(`segundo log, `, values);
  }, [values, setValues])
  
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!values ? (
              <tr></tr>
            ) :  (
                values.map((users) =>
                 (
                  <TableRow key={users.id}>
                    <TableCell>{users.firstName}</TableCell>
                    <TableCell>{users.lastName}</TableCell>
                    <TableCell>{users.email}</TableCell>
                  <TableCell>
                      <Button onClick={() => handleEdit(users.id)}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell>
                      <Button onClick={() => handleDelete(users.id)}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>

    )
};

export default TableUsers;
