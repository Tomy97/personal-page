import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Get } from "../../services/HttpService";
import SpinnerLoader from "../../Components/LoaderSpinner";
import { alertError } from "../../elements/Alert";
import { DetailsContainer, DetailsTitle, DetailsParagraph } from "./styles";
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from "react-router-dom";

const NewsDetails = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    Get(`/news/${id}`)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        alertError({ title: "Este post no existe" })
        setTimeout(() => {
          history.push('/novedad');
        }, 1600)
      });
  }, []);
  return (
    <>
      {typeof data === "undefined" ? (
        <SpinnerLoader />
      ) : (
        <DetailsContainer>
          <DetailsTitle>{data.name}</DetailsTitle>
          <img width="50%" src={`/files/getfile/${data.image}`} alt={data.name} />
          <DetailsParagraph>{ReactHtmlParser(data.content)}</DetailsParagraph>
        </DetailsContainer>
      )}
    </>
  );
};

export default NewsDetails;
