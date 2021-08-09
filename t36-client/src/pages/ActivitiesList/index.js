import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ActivityItem from '../../Components/ActivityItem/index'
import { alertError } from '../../elements/Alert'
import { add_activities_action } from "../../redux/Activities/activitiesReducer"
import { Get } from "../../services/HttpService"
import { ListContainer } from "./style"

const ActivitiesList = () => {
  const activities = useSelector(store => store.activities)
  const dispatch = useDispatch()

  console.log(activities.activities)
  useEffect(() => {
    // cuando este hecho el endpoint se descomenta esto, mientras tanto se usa el mock
    // Get("/activities")
    //   .then(res => dispatch(add_activities_action(res)))
    //   .catch(err => alertError({title: "Error obteniendo actividades"}))
  }, [])

  return (
    <ListContainer>
      {
        activities.activities.map(item => <ActivityItem key={item.id} {...item}/>)
      }
    </ListContainer>
  )
}

export default ActivitiesList
