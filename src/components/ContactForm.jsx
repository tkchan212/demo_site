import React,{ useState } from 'react';
import { Paper, Button, Typography, TextField, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    height:350,
    padding:  40,
    display: "flex",
  },
  text : {
    color: '#000000',
    padding: "0 0 10px 0"
  },
  subtext: {
    color: '#888888',
    padding: "0 0 10px 0"
  },
  input: {
    margin: theme.spacing(2)
  },
  long_input : {
    margin: theme.spacing(2),
    width: "80%"
  },
  button: {
    margin: theme.spacing(2)
  },
}));

export default function ContactForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    let id = e.currentTarget.id;
    let value = e.currentTarget.value;
    if (id === "name"){
      setName(value);
    }
    else if (id === "tel"){
      setTel(value);
    }
    else if (id === "email"){
      setEmail(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email_format = new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+");
    const name_format = new RegExp("[a-zA-Z0-9\s]+");
    const tel_format = new RegExp("\d{8}");
    if (!email_format.test(email)) alert("This is not a valid email address");
    if (!name_format.test(name)) alert("This is not a valid name(special symbols are not allowed)");
    if (!tel_format.test(tel)) alert("This is not a valid phone number(8 digits number only)");
  }

  const classes = useStyles();
  return (
    <Paper className={classes.root}>
    <div className='contact_form'>
        <Typography className={classes.text} gutterBottom variant="h5" component="h2">
          Contact us
        </Typography>
        <Typography className={classes.text}  variant="body2" component="p">
          Our staff will get in touch with you soon.
        </Typography>
      <Divider/>
      <div>
      <TextField className={classes.input}
        id="name"
        label="Name"
        value={name}
        onChange={handleChange}
        />
      <TextField className={classes.input}
        id="tel"
        value={tel}
        label="Phone num."
        onChange={handleChange}
        />
      </div>
      <div>
      <TextField className={classes.long_input}
        id="email"
        value={email}
        onChange={handleChange}
        label="Email Address"
        helperText="We will never disclose your info to a 3rd party."
        />
      </div>
      <Button  
        className={classes.button} 
        color="primary" 
        variant="contained" 
        onClick={handleSubmit}
        >Submit</Button>
    </div>
    <Divider orientation="vertical" flexItem />
    <div className='contact_info'>
    <Typography className={classes.text} variant="body2" component="p"> 
      Our Address:<br></br>
       W123, Grand Center <br></br>
       Anywhere street, Central <br></br>
       Hong Kong Island<br></br>
      </Typography>
      <Typography className={classes.text} variant="body2" component="p"> 
       Tel: 21999000
      </Typography>
    </div>
    </Paper>
  );
}
