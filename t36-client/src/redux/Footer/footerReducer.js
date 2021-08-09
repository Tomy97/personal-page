import { Get } from '../../services/HttpService';
// CONSTANTS
const intialState = {
    webLinks: [],
    socialLinks: []
}

// TYPES
const GET_WEB_LINKS = 'GET_WEB_LINKS';
const GET_SOCIAL_LINKS = 'GET_SOCIAL_LINKS';

// REDUCERS

const footerReducer = (state = intialState, action) => {
    switch (action.type) {
        case GET_WEB_LINKS:
            return {...state, webLinks: action.payload}

        case GET_SOCIAL_LINKS:
            return {...state, socialLinks: action.payload}
    
        default:
            return state;
    }
}


// ACTIONS
const getWebLinks = () => async (dispatch) => {
    // const response = await Get('url');
    const response = [
        {path: '/',
         pathname: 'Inicio'
        },
        {path: '/nosotros',
         pathname: 'Nosotros'
        },
        {path: '/contacto',
         pathname: 'Contacto'
        },
        {path: '/testimonios',
         pathname: 'Testimonios'
        }
    ]
    dispatch({
        type: GET_WEB_LINKS,
        payload: response
    })
}

const getSocialLinks = () => async (dispatch) => {
    // const response = await Get('url');
    const response = [
        {path: '/',
         pathname: 'Instagram'
        },
        {path: '/#',
         pathname: 'Twitter'
        },
        {path: '#',
         pathname: 'Facebook'
        }
    ]
    dispatch({
        type: GET_SOCIAL_LINKS,
        payload: response
    })
}

export {footerReducer, getWebLinks, getSocialLinks}