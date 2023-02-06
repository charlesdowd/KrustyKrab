import { Link } from 'react-router-dom';
import { Root, CustomButton, ButtonDiv } from './LandingPage.styled';
import { Button } from '@charlesdowd/component-library';

const LandingPage = () => {
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
        <Button>Button from NPM Component Library</Button>
      </ButtonDiv>
    </Root>
  );
};

export default LandingPage;
