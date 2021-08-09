import { alertError } from '../../elements/Alert';
import { Post, Delete, Put } from '../../services/HttpService';
// CONSTATS
const initialState = {
    news: []
}

// TYPES
const EDIT_NEWS = 'EDIT_NEWS';
const ADD_NEWS = 'ADD_NEWS';
const GET_NEWS = 'GET_NEWS';
const DELETE_NEWS = 'DELETE_NEWS';

// REDUCERS
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_NEWS:
            const newFilterd = state.news.filter((news) => news.id !== action.payload.id);
            const newEdited = {news: action.payload};
            return {...state, news: newEdited.concat(newFilterd)}

        case ADD_NEWS:
            return {...state, news: action.payload}
            
        case GET_NEWS:
            return {
                ...state, 
                news: action.payload
            }

        case DELETE_NEWS:
            const filteredNews = state.news.filter((newItem) => newItem.id !== action.payload.id)
            return { ...state, news: filteredNews}

        default:
            return state;
    }
}

// ACTIONS

const get_news = (data) => async (dispatch) => {
    
    dispatch({
        type: GET_NEWS,
        payload: data
    })
}

const editNews = (values, id) => async (dispatch) => {
    await Put(`/news/${id}`, values)
    .then(res => {
        dispatch({
            type: EDIT_NEWS,
            payload: {
                name: res.name,
                categoryId: res.categoryId,
                content: res.content,
                image: res.image
            }}
        )
    })
    .catch(err => console.log(err))
}

const addNews = (values) => async (dispatch) => {
    await Post('/news', values)
    .then(res => 
        dispatch({
            type: ADD_NEWS,
            payload: {
                name: res.name,
                categoryId: res.categoryId,
                content: res.content,
                image: res.image
            }}
        )
    )
    .catch(err => alertError({title: 'Hubo un error al agregar la Novedad'}))
}

const deleteNews = (id) => async (dispatch) => {
    await Delete(`/news/${id}`)
    .then(res => 
        dispatch({
            type: DELETE_NEWS,
            payload: res
        }))
    .catch(err => alertError({title: 'Hubo un error al borrar la Novedad', text: 'Intente nuevamente'}))
}

export {newsReducer, editNews, addNews, get_news, deleteNews};