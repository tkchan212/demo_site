import React from 'react';
import '../App.css';
import BannerArea from '../components/BannerArea';
import NameCard from '../components/NameCard';

import jennifer from '../img/team/jennifer.jpg';
import ellis from '../img/team/ellis.jpg';
import ilya from '../img/team/ilya.jpg';
import jessie from '../img/team/jessie.jpg';
import pam from '../img/team/pam.jpg';
import tim from '../img/team/tim.jpg';

let name_card_contents = [
  {
    name: "Ellis Chung",
    title: "Director",
    image: ellis
  },
  {
    name: "Ilya Kushinokov",
    title: "Designer",
    image: ilya
  },
  {
    name: "Pam Nyugen",
    title: "Craftsman",
    image: pam
  },
  {
    name: "Jessie Lam",
    title: "Junior designer",
    image: jessie
  },
  {
    name: "Jennifer Ong",
    title: "Designer",
    image: jennifer
  },
  {
    name: "Timothy O\’brien",
    title: "Craftsman",
    image: tim
  },
]

function Team(props) {
  return (
    <React.Fragment>
      <BannerArea {...props}/>
      <div className='content_container' id="team_page">
        {
          name_card_contents.map((element,index) => <NameCard key={index} {...element}/>)
        }
      </div>
    </React.Fragment>
    
  );
}

export default Team;
