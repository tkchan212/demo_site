import React, { Component } from 'react';
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
/* 
import PageNotFound from "./pages/PageNotFound";
*/
import PreviousWork from "./pages/PreviousWork";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import portrait_dark from './img/portrait_dark.jpg';
import people_dark from './img/people_dark.jpg';
import amethyst_dark from './img/amethyst_dark.jpg';
import shopping_mall_dark from './img/shopping_mall_dark.jpg';


const captions = {
    "home" : {
        headline: "The world is your stage.",
        subtext: "Break necks with our uniquely designed jewelries.",
        banner: portrait_dark,
    },
    "previous_work" : {
        headline: "Previous work",
        subtext: "Find out more about our gems, beloved by customers",
        banner: amethyst_dark,
    },
    "team" : {
        headline: "Meet our team",
        subtext: "Meet our experienced team from a diverse background, with world-class qualifications.",
        banner: people_dark,
    },
    "contact" : {
        headline: "Contact us",
        subtext: "Pay us a visit. You will fell in love with our products!",
        banner: shopping_mall_dark,
    }
}


class LoremStudioPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        page: "home"
      };
    }
    
    componentDidMount = () => {
      
    }
    
    returnHome = () => {
        this.setState({page: "home"});
    }

    changePage = (e) => {
        console.log(e.currentTarget.id);
        this.setState({page: e.currentTarget.id});
    }
  
    render() {
        const { page } = this.state;
        let display;
        switch (page) {
            case "home":
                display = (<Home {...captions["home"]} changePage={this.changePage}/>);
                break;
            case "previous_work":
                console.log("yeet.")
                display = (<PreviousWork {...captions["previous_work"]}/>);
                break;
            case "team":
                display = (<Team {...captions["team"]}/>);
                break;
            case "contact":
                display = (<Contact {...captions["contact"]}/>);
                break;
            default:
                /* display = (<PageNotFound/>); */
                break;
        } 
  
        return (
            <div className='root'>
                <Header returnHome={this.returnHome}/>
                {display}{/* <Home {...captions[this.state.page]} changePage={this.changePage} /> */}
                
                <Footer/>
            </div>
        );
    }
}
  
export default LoremStudioPage;