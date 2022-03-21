import React from 'react';
import '../App.css';
import BannerArea from '../components/BannerArea';
import NavCard from '../components/NavCard';
import amethyst from '../img/amethyst.jpg';
import people from '../img/people.jpg';
import shopping_mall from '../img/shopping_mall.jpg';

let nav_card_contents = [
  {
    id: "team",
    title: "Meet our team",
    image: people,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    id: "previous_work",
    title: "Previous work",
    image: amethyst,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    id: "contact",
    title: "Contact us",
    image: shopping_mall,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
]

function Home(props) {
  return (
    <React.Fragment>
      <BannerArea {...props}/>
      <div className='content_container' id="home_page">
        {
          nav_card_contents.map(element =>(<NavCard key={element.id} {...element} changePage={props.changePage}/>))
        }
      </div>
    </React.Fragment>
    
  );
}

export default Home;
