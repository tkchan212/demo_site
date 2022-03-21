import '../App.css';

function Header(props) {
  return (
    <div className="header">
      <div className="title" onClick={props.returnHome}>Lorem Studio</div>
      <button className="return" onClick={props.returnHome}>Return to Homepage</button>
    </div>
  );
}

export default Header;
