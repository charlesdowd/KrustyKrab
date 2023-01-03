import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Public = () => {
  return (
    <Container>
      <Link to='/login'>
        <Button>Log In</Button>
      </Link>
    </Container>
  );
};

export default Public;
