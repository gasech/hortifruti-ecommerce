import { Link } from "react-router-dom";
import Button from "components/Button";

import './style.css';

function Home() {
  return (
    <div className="fruits-banner-wrapper">
      <div className="fruits-banner">
        <h1>Find your favorite fruits</h1>
        <Link to="/products">
          <Button>Get Started</Button>
        </Link> 
      </div>
    </div>
  );
}

export default Home;
