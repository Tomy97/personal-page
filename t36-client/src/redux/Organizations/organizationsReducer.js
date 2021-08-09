import { Put } from "../../services/HttpService"; 

const initialState = {
  organization: {},
};

const EDIT_ORGANIZATION = "EDIT_ORGANIZATION";

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ORGANIZATION:
      return { ...state, organization: action.payload };

    default:
      return state;
  }
};

const editOrganization = (values) => async (dispatch) => {
  const response = await Put(`url/${values.id}`);
  dispatch({
    type: EDIT_ORGANIZATION,
    payload: response,
  });
};

export { organizationReducer, editOrganization };
