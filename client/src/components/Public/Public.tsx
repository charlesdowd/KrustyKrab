import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../store/slices/api/templateApi';
import { Root, CustomButton, ButtonDiv } from './Public.styled';

const Public = () => {
  const { data: userData } = useGetUsersQuery();
  console.log('USERS: ', userData);
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
