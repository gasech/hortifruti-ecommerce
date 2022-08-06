import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>404 - Sorry, the page you are looking for, does not exist.</h1>
      <ul>
        <li>Please verify the address;</li>
        <li>This content might have been removed or is not available;</li>
      </ul>
      <Link to="/">Return to home</Link>
    </>
  );
}

export default PageNotFound;
