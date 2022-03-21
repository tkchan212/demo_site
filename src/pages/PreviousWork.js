import React from 'react';
import '../App.css';
import BannerArea from '../components/BannerArea';
import DisplayCard from '../components/DisplayCard';
import chain from '../img/chain.jpg';
import diamond from '../img/diamond.jpg';
import glass from '../img/glass.jpg';
import gold_jewelry from '../img/gold_jewelry.jpg';

const display_cards_contents = [
  {
    image: chain,
    title: "Our signature pendant",
    body: "body2"
  },
  {
    image: gold_jewelry,
    title: "Zircon bracelet",
    body: "body2"
  },
  {
    image: diamond,
    title: "Engagement ring",
    body: "body2"
  },
  {
    image: glass,
    title: "Ring(Aquamarine)",
    body: "body2"
  }
] 
function PreviousWork(props) {
  return (
    <React.Fragment>
      <BannerArea {...props}/>
      <div className='content_container' id="previous_work_page">
      {
        display_cards_contents.map((element, index) => <DisplayCard key={index} {...element}/>)
      }
      </div>
    </React.Fragment>
    
  );
}

export default PreviousWork;
