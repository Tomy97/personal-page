import { alertError } from '../../elements/Alert';
import { Put } from '../../services/HttpService'
const TABLE_DELETE = "TABLE_DELETE";
const TABLE_GET = "TABLE_GET";
const TABLE_EDIT_USERS = "TABLE_SELECTED_USER";


const initialState = {
  users: []
};
export const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_GET:
      return {
        ...state,
        users: action.payload,
      };
    case TABLE_DELETE:
      return {
        ...state,
        users: action.payload,
      };
    case TABLE_EDIT_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export const get_user_action = (payload) => async (dispatch) => {
  
  dispatch({
    type: TABLE_GET,
    payload
  });
};

export const delete_user_action = (payload, id) => async (dispatch) => {
  payload.filter((user) => user.id !== id);

  dispatch({
    type: TABLE_DELETE,
    payload
  });
};

export const select_user_for_edit = (values) => async (dispatch) => {
  try {
    await Put(`/users/${values.id}`, values);
    dispatch({
      type: TABLE_EDIT_USERS,
      payload: values
    })
  } catch (error) {
    alertError({ title: "There was an error", text: "Please, try again" });
  }
  // payload.filter((user) => user.id === id);
};
