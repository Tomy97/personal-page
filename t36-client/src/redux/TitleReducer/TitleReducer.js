
const get_organization = 'get_organization'
const edit_organization = 'edit_organization'

const initialState = {
  organization: null,
}

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_organization:
      return {
        ...state,
        organization: action.payload,
      }

    case edit_organization:
      return {
        ...state,
        organization: action.payload,
      }

    default:
      return state
  }
}

export const get_organization_action = (payload) => async (dispatch) => {
  dispatch({
    type: get_organization,
    payload,
  })
}

export const edit_organization_action = () => () => {}
