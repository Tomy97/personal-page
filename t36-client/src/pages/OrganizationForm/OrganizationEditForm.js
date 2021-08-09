import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
import {
  FormContainer,
  Form,
  Title,
  FieldsContainer,
  FieldTitle,
  NewsImage,
} from "../NewsForm/Styles";
import { Get } from "../../services/HttpService";
import { alertError, alertInfo, alertSuccess } from "../../elements/Alert";
import { useDispatch } from "react-redux";
import { editOrganization } from "../../redux/Organizations/organizationsReducer";

const OrganizationEditForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    Get(`/organizations/${id}/public`)
      .then((res) => setValues(res))
      .catch((err) => {
        alertError({
          title: "There was an error loading information",
          text: "Please, try again",
        });
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: values.name,
      image: values.image,
    },
    onSubmit: (values) => {
      if (values.name === "") {
        alertInfo({
          title: "Fields can not be empty",
          text: "Please, try again",
        });
      } else {
        dispatch(editOrganization(values));
        alertSuccess({ title: "Organization edited" });
      }
    },
  });

  return (
    <FormContainer>
      <Title>Edicion de Organizaciones</Title>
      <Form onSubmit={formik.handleSubmit}>
        <FieldTitle>Organización</FieldTitle>
        <TextField
          variant="outlined"
          type="text"
          name="name"
          value={formik.values.name || ""}
          onChange={formik.handleChange}
        />

        <FieldTitle>Logo</FieldTitle>
        <FieldsContainer>
          <NewsImage
            src={`/files/getfile/${formik.values.image}`}
            alt=""
          />
          <TextField
            variant="outlined"
            type="file"
            name="image"
            onChange={(e) => {
              setValues({ ...values, image: e.target.files[0] });
            }}
          />
        </FieldsContainer>
        <Button type="submit" variant="contained" color="primary" size="medium">
          Send
        </Button>
      </Form>
    </FormContainer>
  );
};

export default OrganizationEditForm;
