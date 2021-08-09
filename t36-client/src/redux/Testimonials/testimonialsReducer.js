import { Get, Put, Delete } from "../../services/HttpService";
import { alertError, alertSuccess } from "../../elements/Alert";

const initialState = {
  testimonials: [],
};

const GET_TESTIMONIALS = "GET_TESTIMONIALS";
const DELETE_TESTIMONIAL = "DELETE_TESTIMONIAL";
const EDIT_TESTIMONIAL = "EDIT_TESTIMONIAL";

const testimonialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TESTIMONIALS:
      return { ...state, testimonials: action.payload };

    case EDIT_TESTIMONIAL:
      const testimonialsFilterd = state.testimonials.filter(
        (testimonial) => testimonial.id !== action.payload.id
      );
      const testimonialEdited = { testimonials: action.payload };
      return { ...state, user: testimonialEdited.concat(testimonialsFilterd) };

    case DELETE_TESTIMONIAL:
      const filteredTestimonial = state.testimonials.filter(
        (testimonial) => testimonial.id !== action.payload.id
      );
      return { ...state, testimonials: filteredTestimonial };

    default:
      return state;
  }
};

const getTestimonials = () => async (dispatch) => {
  try {
    const response = await Get("url");
    dispatch({
      type: GET_TESTIMONIALS,
      payload: response,
    });
  } catch (error) {
    alertError({
      title: "Oops! Something went wrong",
      text: "Please, try again",
    });
  }
};

const editTestimonial = (values) => async (dispatch) => {
  try {
    await Put(`/testimonials/{values.id}`);
    dispatch({
      type: EDIT_TESTIMONIAL,
      payload: {
        id: values.id,
        name: values.name,
        image: values.image,
        content: values.content,
      },
    });
  } catch (error) {
    alertError({
      title: "Oops! Something went wrong",
      text: "Please, try again",
    });
  }
};

const deleteTestimonial = (id) => async (dispatch) => {
  try {
    await Delete(`/testimonials/${id}`)
    dispatch({
      type: DELETE_TESTIMONIAL,
      payload: { id: id },
    });
    alertSuccess({title: 'Article has been deleted'})
  } catch (error) {
    alertError({
      title: "Oops! Something went wrong",
      text: "Please, try again",
    });
  }
};

export {
  testimonialsReducer,
  getTestimonials,
  editTestimonial,
  deleteTestimonial,
};
