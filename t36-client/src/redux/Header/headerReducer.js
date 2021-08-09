// CONSTANTS
const ADD_LIST = "ADD_LIST"

const initialState = {
  list: []
}

// REDUCER


const headerReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_LIST: {
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}

// ACTION CREATORS

export const add_list_action = (payload) => async (dispatch, getState) => {
  dispatch({
    type: ADD_LIST,
    payload
  })
}



export default headerReducer;