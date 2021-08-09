import React, { useEffect } from 'react';
import { Get } from '../../services/HttpService';
import { useSelector, useDispatch } from 'react-redux';
import { get_news, deleteNews } from '../../redux/News/newsReducer';
import { alertError, alertConfirm, alertSuccess } from '../../elements/Alert';
import SpinnerLoader from '../../Components/LoaderSpinner';
import {Container, MainTitle, NewList, NewCard, NewTitle, NewInfo, NewImage, ButtonContainer} from './Styles';
import { Button } from "@material-ui/core";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";


const NewsListAdmin = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const news = useSelector(store => store.news.news);

    useEffect(() => {
        Get('/news')
        .then(res => dispatch(get_news(res)))
        .catch(err => alertError({title: 'Hubo un error cargando las novedades', text: 'Por favor, intente nuevamente'}))
    }, [news])

    const handleDelete = (id) => {
        alertConfirm({title: 'Seguro quiere eliminar esta novedad?', callback: () => {
            dispatch(deleteNews(id))
            alertSuccess({title: 'Se eliminó exitosamente'})
        }})
    }

    return (
        <Container>
            <MainTitle>Listado de Novedades</MainTitle>
            {news.length > 0 ?
                <NewList>
                    {news.map((item) => {
                        const dateString = item.createdAt;
                        const date = dateString.split('T');
                        return(
                            <NewCard key={item.id}>
                                <NewTitle>{item.name}</NewTitle>
                                <NewInfo>Creado el: {date[0]}</NewInfo>
                                <NewImage src={`/files/getfile/${item.image}`} alt="" />
                                <ButtonContainer>
                                    <Button variant="contained" color="primary" onClick={() => history.push(`/backoffice/edit-novedad/${item.id}`)} ><AiFillEdit /></Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDelete(item.id)}><FaTrash /></Button>
                                </ButtonContainer>
                            </NewCard>
                        )
                    })}
                </NewList> 
            :   <SpinnerLoader />
            }
        </Container>
    );
}
 
export default NewsListAdmin;