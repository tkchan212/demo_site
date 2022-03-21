import "../App.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    position:"relative",
    top: 43,
    left: 66,
  },
  maintext: {
    fontWeight: 'bold'
  },
}));


function DisplayCard(props) {
  const classes = useStyles();
  return (
    <div
      className="media_card"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      
    <div className={classes.root} >
      <Typography className={classes.maintext} gutterBottom variant="h5" color="primary" component="h2">
        {props.title}
      </Typography>
      <Typography variant="body2" color="primary" component="p">
        {props.body}
      </Typography>
    </div>
      
    </div>
  );
}

export default DisplayCard;
