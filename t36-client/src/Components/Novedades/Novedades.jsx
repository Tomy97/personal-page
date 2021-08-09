import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { alertError } from "../../elements/Alert";
import { Get } from "../../services/HttpService";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
});

const Novedades = () => {
  const [values, setValues] = useState([{
    id: '',
    content: '',
    name: '',
    image: ''
  }])
  const classes = useStyles();
  
  useEffect(() => {
    Get(`/news/`)
      .then((res) => setValues(res))
      .catch((error) => {
        alertError({ title: "There was an error", text: "Please, try again" })
      })
  })

  return (
    <div className="d-flex justify-content-center">
      <Grid container spacing={3}>
        {values.map(n => (
          <Grid item xs={3} sm={3} key={n.id} >
            <Card className={classes.root} >
              <CardActionArea >
                <CardMedia
                  image={n.image}
                  alt={n.name}
                  height="120"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {n.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {n.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
        }
      </Grid>
    </div>
  );
};

export default Novedades;
