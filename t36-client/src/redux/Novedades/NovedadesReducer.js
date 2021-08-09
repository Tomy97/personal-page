const get_news = 'get_news'
const edit_news = 'edit_news'

const initialState = {
  novedades: [],
}

export const novedadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_news:
      return {
        ...state,
        novedades: action.payload,
      }

    case edit_news:
      return {
        ...state,
        novedades: action.payload,
      }

    default:
      return state
  }
}

export const get_novedades_action = (payload) => async (dispatch) => {
  dispatch({
    type: get_news,
    payload,
  })
}

export const edit_novedades_action = (payload) => async (dispatch) => {
  dispatch({
    type: edit_news,
    payload
  })
}
