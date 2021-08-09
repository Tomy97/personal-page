import { alertError } from "../../elements/Alert";
import { Put } from "../../services/HttpService";

const initialState = {
  activities: [],
};

const EDIT_ACTIVITY = "EDIT_ACTIVITY";
const ADD_ACTIVITIES = "ADD_ACTIVITIES"

const activityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }

    case EDIT_ACTIVITY:
      return { ...state, activities: action.payload };

    default:
      return state;
  }
};

const editActivity = (values) => async (dispatch) => {
  try {
    await Put(`/activities/${values.id}`, values);
    dispatch({
      type: EDIT_ACTIVITY,
      payload: values,
    });
  } catch (error) {
    alertError({ title: "There was an error", text: "Please, try again" });
  }
};

export const add_activities_action = (payload) => (dispatch, getState) => {
  dispatch({
    type: ADD_ACTIVITIES,
    payload
  })
}

export { activityReducer, editActivity };