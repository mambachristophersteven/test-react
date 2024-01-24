import './Navbar.css';

function Navbar() {

    return (
      <div className="navbar">
        <div className="logo">
          <a href="#">
            <img src="./black-logo.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#">home</a>
            <img src="./ellipse.svg" alt="" />
          </li>
          <li><a href="#">categories</a></li>
          <li><a href="#">leaderboards</a></li>
          <li><a href="#">what's new?</a></li>
        </ul>
        <div className="accounts">
          <a href="#">sign in</a>
          <button>create account</button>
        </div>
      </div>
    )
  }
  
  export default Navbar