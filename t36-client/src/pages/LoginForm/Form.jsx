import React, { useState } from "react";
import { useFormik } from "formik";
import "./styles.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoMdArrowRoundUp } from "react-icons/io";
import { Post } from "../../services/HttpService";
import { alertInfo, alertSuccess } from "../../elements/Alert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login_user } from "../../redux/Profile/profileReducer";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Requerido";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe tener 6 caracteres minimo";
  }
  if (!values.email) {
    errors.email = "Requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email invalido";
  }

  return errors;
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      setDataLogin(values);
      Post("/auth/login", values) 
          .then((userLoggedSuccess) => {
            dispatch(login_user(userLoggedSuccess));
            alertSuccess({ title: "Login success"})
            history.push('/');
          }).catch(error => {
            alertInfo({ title: "Login fails!", text: "It looks like your email or password are incorrect" })
          });
    },
  });

  return (
    <div className="Form__container">
      <form className="Form" onSubmit={formik.handleSubmit}>
        <h2 className="Form__title">Inciar sesión</h2>
        <input
          className="Form__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter email"
        />
        <HiOutlineMail className="Form__email__i" />
        {formik.touched.email && formik.errors.email ? (
          <div className="Form__errors">
            {formik.errors.email}
            <IoMdArrowRoundUp color={"#18A0FB"} />
          </div>
        ) : null}

        <input
          className="Form__input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Enter password"
        />
        <RiLockPasswordLine className="Form__password__i" />

        {formik.touched.password && formik.errors.password ? (
          <div className="Form__errors">
            {formik.errors.password}
            <IoMdArrowRoundUp color={"#18A0FB"}/>
          </div>
        ) : null}

        <button className="Form__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
