import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    maxHeight: 92,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function NameCard(props) {
  const classes = useStyles();

  return (
    <div className='name_card'>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={props.image} aria-label="recipe" className={classes.large}/>
        }
        title={props.name}
        subheader={props.title}
      />
    </Card>
    </div>
  );
}
