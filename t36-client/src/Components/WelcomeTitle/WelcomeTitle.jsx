import React, { useEffect, useState } from "react";
import { alertError } from "../../elements/Alert";
import { Get } from "../../services/HttpService";
const WelcomeTitle = () => {

  const [title, setTitle] = useState([{
    welcomeText: ''
  }])

  useEffect(() => {
    Get(`/organizations/1/public`)
      .then((res) => setTitle(res))
      .catch((error) => {
        alertError({ title: "There was an error", text: "Please, try again" })
      })
  }, [])
  
  return (
    <>
      <h2> {title.welcomeText} </h2>
    </>
  );
};

export default WelcomeTitle;
