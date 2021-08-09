// CONSTANTS
const ADD_USER = "ADD_USER";
const REMOVE_USER = "REMOVE_USER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const initialState = {
  user: [],
  loggedUser: [],
};

// REDUCER
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: [action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        user: [],
      };
    case LOGIN:
      return {
        ...state,
        loggedUser: [action.payload],
      };
    case LOGOUT:
      return {
        ...state,
        loggedUser: {},
      };
    default:
      return state;
  }
};

// ACTION CREATORS

export const add_user_action = (payload) => (dispatch, getState) => {
  dispatch({
    type: ADD_USER,
    payload,
  });
};

export const remove_user_action = (dispatch, getState) => {
  localStorage.removeItem("token");
  dispatch({
    type: REMOVE_USER,
  });
};

export const login_user = (resUser) => async (dispatch) => {
  const {
    user: { id, firstName, lastName, email, image, roleId },
    token,
  } = resUser; // FALTARIA AGREGAR A LA RES DEL ENDPOINT EL TOKEN PARA GUARDAR EN EL LOCALSTORAGE
  localStorage.setItem("token", token);
  dispatch({
    type: LOGIN,
    payload: { id, firstName, lastName, email, image, roleId },
  });
};

export const logout_user = (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
  });
};

export default profileReducer;
