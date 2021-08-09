import { Get, Patch } from '../../services/HttpService';

const GET_USER = 'GET_USER'
const EDIT_USER = 'EDIT_USER'

const initialState = {
  user: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }

    case EDIT_USER:
      // const userFilterd = state.user.filter((user) => user.id !== action.payload.id);
      // const userEdited = {user: action.payload};
      // return {...state, user: userEdited.concat(userFilterd)}
      return { ...state, user: action.payload }

    default:
      return state
  }
}

const getUser = (token) => async (dispatch) => {
  const response = await Get('http://localhost:3001/users')
    dispatch({
      type: GET_USER,
      // payload: response.data
      payload: response
    });
};

const editUser = (values) => (dispatch) => {
  // const response = await Patch(`users/{values.id}`)
  const response = {
    id: values.id,
    name: values.name,
    lastName: values.lastName,
    roleId: values.roleId,
  }
  dispatch({
    type: EDIT_USER,
    payload: response,
  })
}

export { userReducer, getUser, editUser }
