import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";
import {
  FormContainer,
  Form,
  Title,
  NewsField,
  ContentField,
  FieldTitle,
} from "../NewsForm/Styles";
import { Get, Post } from '../../services/HttpService';
import { useHistory, useParams } from "react-router-dom";
import { alertError, alertInfo, alertSuccess } from "../../elements/Alert";
import { editActivity } from "../../redux/Activities/activitiesReducer";
import { useDispatch } from "react-redux";

const ActivityForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    Get(`/activities/${id}`)
      .then((res) => {
        if (!id) {
          return values;
        } else {
          setValues(res);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: values.id,
      name: values.name,
      content: values.content,
    },
    onSubmit: (values) => {
      if (values.name === "" || values.content === "") {
        alertInfo({ title: "Fields can not be empty", text: "Try again" });
      }
      if (id) {
        dispatch(editActivity(values));
      } else {
        Post("/activities", values)
          .then((res) => {
            if (res) {
              alertSuccess({title: 'Activity created!'})
              history.push("/");
            } else {
              alertError({
                title: "Something went wrong",
                text: "Please, try again!",
              });
            }
          })
        .catch((err) =>
          alertError({
            title: "Something went wrong",
            text: "Please, try again!",
          })
        );
      }
    },
  });

  return (
    <FormContainer>
      <Title>Actividades</Title>
      <Form onSubmit={formik.handleSubmit}>
        <NewsField>
          <FieldTitle>Titulo</FieldTitle>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            name="name"
            value={formik.values.name || ""}
            placeholder="Add the title here"
            onChange={formik.handleChange}
          />
        </NewsField>

        <NewsField>
          <FieldTitle>Contenido</FieldTitle>
          <ContentField>
            <CKEditor
              editor={InlineEditor}
              data={formik.values.content || ""}
              onChange={(e, editor) => {
                const data = editor.getData();
                formik.values.content = data;
              }}
            />
          </ContentField>
        </NewsField>
        <Button type="submit" variant="contained" color="primary" size="medium">
          Post
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ActivityForm;
