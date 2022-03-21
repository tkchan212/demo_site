import React from 'react';
import '../App.css';
import BannerArea from '../components/BannerArea';
import ContactForm from '../components/ContactForm';
import { Paper, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//className={classes.subtext}
function Contact(props) {
  
  return (
    <React.Fragment>
      <BannerArea {...props}/>
      <div className='content_container' id="contact_page">
      <ContactForm />
      </div>
    </React.Fragment>
    
  );
}

export default Contact;
