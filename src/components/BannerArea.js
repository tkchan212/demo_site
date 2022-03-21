import '../App.css';


function BannerArea(props) {
  return (
    <div className="banner" 
    style={{backgroundImage:`url(${props.banner})`,backgroundRepeat:"no-repeat" }}>
      <div className="headline">
      <h3>{props.headline}</h3>  
      </div>
      <div className="subtext">
      {props.subtext}
      </div>
      
    </div>
  );
}

export default BannerArea;