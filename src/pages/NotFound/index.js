import { Link } from "react-router-dom";
import Button from "components/Button"
import Container from "components/Container";

function PageNotFound() {
  return (
    <Container>
      <h1>404 - Sorry =/ the page you are looking for does not exist.</h1>

      <ul>
        <li>Please verify the address;</li>
        <li>This content might have been removed or is not available;</li>
      </ul>

      <Link to="/">
        <Button>Go back to home</Button>
      </Link>
    </Container>
  );
}

export default PageNotFound;
