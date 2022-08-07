import { Link } from "react-router-dom";
import Button from "components/Button";

import './style.css';

function Home() {
  return (
    <div className="fruits-banner-wrapper">
      <div className="fruits-banner">
        <Link to="/products">
          <Button>View all fruits</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
