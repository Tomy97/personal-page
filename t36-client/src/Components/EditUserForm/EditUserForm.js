import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUser, editUser } from "../../redux/UserData/usersReducer";
import { FormContainer, FormTitle, Form } from "./Styles";
import { useHistory } from "react-router-dom";
import { alertError, alertSuccess } from "../../elements/Alert";

const EditUserForm = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const role = user.roleId;
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    dispatch(getUser(token));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      roleId: user.roleId,
    },
    onSubmit: (values) => {
      if (values.name === "" || values.lastName === "") {
        alertError({
          title: "Fields can not be empty",
          text: "Please, try again",
        });
        return;
      } else {
        dispatch(editUser(values));
        alertSuccess({ title: "User edited" });
        // history.push('/')
      }
    },
  });

  return (
    <FormContainer>
      <FormTitle>Editar Datos Usuario</FormTitle>
      {user.name !== undefined ? (
        <Form onSubmit={formik.handleSubmit}>
          <TextField
            type="text"
            name="name"
            value={formik.values.name || ""}
            onChange={formik.handleChange}
            placeholder="Jhon"
            variant="outlined"
            fullWidth
          />
          <TextField
            type="text"
            name="lastName"
            value={formik.values.lastName || ""}
            onChange={formik.handleChange}
            placeholder="Doe"
            variant="outlined"
            fullWidth
          />

          {role === 1 ? (
            <FormControl variant="outlined">
              <InputLabel>Rol Usuario</InputLabel>
              <Select
                label="Rol Usuario"
                name="roleId"
                value={formik.values.roleId || 2}
                onChange={formik.handleChange}
              >
                <MenuItem value={2}>Usuario</MenuItem>
                <MenuItem value={1}>Administrador</MenuItem>
              </Select>
            </FormControl>
          ) : (
            ""
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
          >
            Post
          </Button>
        </Form>
      ) : (
        "Loading.."
      )}
    </FormContainer>
  );
};

export default EditUserForm;
