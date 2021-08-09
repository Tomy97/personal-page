import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Get } from '../../services/HttpService';
import { alertError } from "../../elements/Alert";
import {
  ActivityContainer,
  Title,
  DetailContainer,
  ActivityTitle,
  ActivityInfo,
  ActivityImage
} from "./Styles";

const ActivitiesDetail = () => {
  const [activity, setActivity] = useState();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getActivity();
  }, []);

  const getActivity = () => {
    const url = `/activities/${id}`;
    Get(url)
      .then((response) => setActivity(response))
      .catch((error) => {
        alertError({
          title: "This activity does not exist",
          text: "Please. Try again",
        });
        history.push("/activities");
      });
  };

  return (
    <ActivityContainer>
      <Title>Detalle de Actividad</Title>
      {activity !== undefined ? (
        <DetailContainer>
          <ActivityTitle>{activity.name}</ActivityTitle>
          <ActivityInfo>{activity.content}</ActivityInfo>
          <ActivityImage src={activity.image} alt="" />
        </DetailContainer>
      ) : (
        "Loading.."
      )}
    </ActivityContainer>
  );
};

export default ActivitiesDetail;
