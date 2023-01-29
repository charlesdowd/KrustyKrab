import { useEffect } from 'react';
import { useGetUsersQuery } from '../store/slices/api/templateApi';
import { Root } from './Dashboard/Dashboard.styled'; // TODO: share styles for common components

const UserPage = () => {
  const { data: userData, isLoading, isSuccess, isError } = useGetUsersQuery();

  useEffect(() => {
    if (isError) {
      console.log('ERROR GETTING USERS'); // TODO: replace with toast
    }
  }, [userData, isLoading, isError, isSuccess]);

  // TODO: Make this '...loading' component better or change pattern

  return (
    <Root>
      <h1>List of all users</h1>
      {isLoading ? (
        <h2>...Loading</h2>
      ) : (
        <div>
          {userData.users?.map((user) => (
            <div key={user._id}>{user.email}</div>
          ))}
        </div>
      )}
    </Root>
  );
};

export default UserPage;
