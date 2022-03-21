import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    cursor: "pointer"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function NavCard(props) {
  const classes = useStyles();
  

  return (
    <Card id={props.id} className={classes.root} onClick={props.changePage}>
      <CardHeader
        title={props.title}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <CardContent>
          {props.text}
      </CardContent>
    </Card>
  );
}
