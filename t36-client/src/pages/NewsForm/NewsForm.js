import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import {useFormik} from 'formik';
import {TextField, Button} from '@material-ui/core';
import {FormContainer, Form, Title, FieldsContainer, NewsField, ContentField, FieldTitle, NewsImage} from './Styles';
import {useDispatch} from 'react-redux';
import { editNews, addNews } from '../../redux/News/newsReducer';
import { useParams, useHistory } from "react-router-dom";
import {alertSuccess, alertError} from '../../elements/Alert';
import { Get } from '../../services/HttpService';

const NewsForm = () => {
    const fd = new FormData();
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();
    const [values, setValues] = useState({
        name: '',
        categoryId: 1,
        content: '',
        image: ''
    })

    useEffect(() => {
        if(!id){
            return;
        } else{
            Get(`/news/${id}`)
            .then(res => setValues(res))
            .catch(err => {
                alertError({title: 'Hubo un error al cargar la novedad', text: 'Intente nuevamente'})
                setTimeout(() => {
                    history.push('/backoffice/novedad');
                  }, 1600)
            })
        }
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: values.name,
            content: values.content,
            image: values.image,
            categoryId: values.categoryId
        },
        onSubmit: data => {
            if(data.name === '' || data.content === ''){
                alertError({title: 'Los campos no deben ir vacios'})
                return
            } if(!id){
                fd.append('name', data.name)
                fd.append('content', data.content)
                fd.append('image', data.image, data.image.name)
                fd.append('categoryId', data.categoryId)
                dispatch(addNews(fd));
                alertSuccess({title: 'Novedad creada exitosamente'});
                history.push('/backoffice/novedad')
            } else{
                fd.append('name', data.name)
                fd.append('content', data.content)
                fd.append('image', data.image)
                fd.append('categoryId', data.categoryId)
                dispatch(editNews(fd, id));
                alertSuccess({title: 'Novedad editada exitosamente'});
                setTimeout(() => {
                    history.push('/backoffice/novedad');
                }, 1300)
            }
        }
    })

    return (
        <FormContainer>
            <Title>{id ? 'Editar' : 'Crear'} Novedad</Title>
            <Form onSubmit={formik.handleSubmit}>
                <FieldsContainer>
                    <NewsField>
                        <FieldTitle>Titulo</FieldTitle>
                        <TextField type="text" name="name" value={formik.values.name || ''} onChange={formik.handleChange} variant="outlined" fullWidth />
                    </NewsField>

                    <NewsField little>
                        <FieldTitle>Categoria</FieldTitle>
                        <TextField type="text" name="categoryId" value="Novedad" variant="outlined" fullWidth disabled/>
                    </NewsField>
                </FieldsContainer>

                <NewsField>
                    <FieldTitle>Contenido</FieldTitle>
                    <ContentField>
                        <CKEditor
                            editor={InlineEditor}
                            data={formik.values.content || ''}
                            onChange={(e, editor) => {
                                const dataContent = editor.getData();
                                setValues({...values, content: dataContent})
                            }}
                        />
                    </ContentField>
                </NewsField>

                <NewsField>
                    <FieldTitle>Imagen</FieldTitle>
                    {!id ?
                        <input type="file" name="image" onChange={(e) => {const imageValue = e.target.files[0];
                            formik.values.image = imageValue}}
                        />
                    :
                    <>
                        <NewsImage src={`/files/getfile/${formik.values.image}` || ''} alt=""/>
                        <input type="file" name="image" onChange={(e) => {
                            const imageValue = e.target.files[0];
                            formik.values.image = imageValue
                            }}
                        />
                    </>
                    }
                    
                </NewsField>

                <Button type="submit" variant="contained" color="primary" size="medium">Post</Button>
            </Form>
        </FormContainer>
    );
}
 
export default NewsForm;
