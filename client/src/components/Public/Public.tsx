import { Link } from 'react-router-dom';
import { Root, CustomButton, ButtonDiv } from './Public.styled';

const Public = () => {
  return (
    <Root>
      <h1>Welcome to the Krusty Krab!</h1>
      <ButtonDiv>
        <Link to='/login'>
          <CustomButton>Log In</CustomButton>
        </Link>
        <Link to='/signup'>
          <CustomButton>Sign Up</CustomButton>
        </Link>
      </ButtonDiv>
    </Root>
  );
};

export default Public;