import React, { useState, useEffect } from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor  from "@ckeditor/ckeditor5-build-inline"
import { Post, Put } from "../../services/HttpService"
import { Form, Button, FileInput, NameInput } from "./styles"
import { alertSuccess, alertError } from "../../elements/Alert"

const TestimonialForm = (props) => {
  const fd = new FormData()
  const [data, setData] = useState({
    name: "",
    image: [],
    content: ""
  })

  useEffect(() => {
    if(props.isEdit) {
      setData({
        name: props.name,
        image: props.image,
        content: props.content,
        id: props.id
      })
    }
  }, [props])


  const handlePost = (e) => {
    e.preventDefault()
    fd.append("name", data.name)
    fd.append("content", data.content)
    fd.append("image", data.image, data.image.name)
    Post("/testimonials", fd)
      .then(res => alertSuccess({title: "Testimonio creado con exito"}))
      .catch(err => alertError({ title: "Error creando testimonio" }))
  }

  const handleEdit = (e) => {
    e.preventDefault()
    if(typeof data.name !== "undefined") {
      fd.append("name", data.name)
    }
    if(typeof data.content !== "undefined") {
      fd.append("content", data.content)
    }
    if(typeof data.image !== "undefined") {
      fd.append("image", data.image, data.image.name)
    }
    Put(`/testimonials/${props.urlId}`, fd)
    .then(res => alertSuccess({title: "Testimonio editado con exito"}))
    .catch(err => alertError({ title: "Error editando testimonio" }))
  }
  return (
    <Form onSubmit={!props.isEdit ? handlePost : handleEdit}>
      <NameInput
        required 
        minLength="4"
        type="text" 
        name="name"
        placeholder="Nombre"
        onChange={(e) => {
          setData({
            ...data,
            name: e.target.value
          })
      }}
        value={data.name} />
      <CKEditor 
        required
        minLength="40"
        className="content"
        editor={ClassicEditor}
        onReady={editor => editor.setData(data.content)}
        onChange={(e, editor) => {
          const editorData = editor.getData()
          setData({
            ...data,
            content: editorData
          })
        }}
        placeholder="Content"
        config={
          {
            placeholder: "Contenido"
          }
        }
        />
        <FileInput 
          required={
            typeof data.image === "string"
              ? false
              : true
          }
          type="file" 
          name="image" 
          onChange={(e) => {
            setData({
              ...data,
              image: e.target.files[0]
            })
        }}/>
      <Button type="submit">{!props.isEdit ? "Crear testimonio" : "Editar testimonio"}</Button>
    </Form>
  )
}

export default TestimonialForm
