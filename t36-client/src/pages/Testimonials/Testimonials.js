import React, { useEffect } from "react";
import {
  TestimonialContainer,
  Title,
  Information,
  ListContainer,
  TestimonialCard,
  TestimonialTitle,
  ButtonContainer,
} from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTestimonial,
  getTestimonials,
} from "../../redux/Testimonials/testimonialsReducer";
import { Button } from "@material-ui/core";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const Testimonials = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const testimonials = useSelector((store) => store.testimonials.testimonials);

  useEffect(() => {
    dispatch(getTestimonials());
  }, []);

  return (
    <TestimonialContainer>
      <Title>Testimonios</Title>
      <Information>
        En este listado encuentra información sobre los testimoniales, con la opción de editar o eliminar.
      </Information>

      <ListContainer>
        {testimonials.length > 0
          ? testimonials.map((testimonial) => {
              return (
                <TestimonialCard key={testimonial.id}>
                  <TestimonialTitle>{testimonial.name}</TestimonialTitle>
                  <ButtonContainer>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: "#18A0FB" }}
                      onClick={() => {
                        history.push(`/testimonial/${testimonial.id}`);
                      }}
                    >
                      {" "}
                      <AiFillEdit />{" "}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        dispatch(deleteTestimonial(testimonial.id));
                      }}
                    >
                      {" "}
                      <FaTrash />{" "}
                    </Button>
                  </ButtonContainer>
                </TestimonialCard>
              );
            })
          : "Loading.."}
      </ListContainer>
    </TestimonialContainer>
  );
};

export default Testimonials;
