import { Root } from '../Dashboard/Dashboard.styled';
import { useGetAllUsersQuery } from '../../../store/slices/api/templateApi';

const ApproveAccounts = () => {
  /*
   Instead of new endpoint to grab admin users, use get all users and 
   then use built in functionality to filter the result for only admin users

   This is not efficient if we had many users but since we expect to not
   have many users in production, this is fine. Also fun new tool.
  */
  const { data: filteredUsers } = useGetAllUsersQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.users?.filter((user) => !user.approved),
    }),
  });

  return (
    <Root>
      <h1>Approve Accounts Tool</h1>
      <div className='mt-4'>
        <h2>Current Unapproved Accounts</h2>
        {filteredUsers?.map((user) => (
          <div key={user._id} className='mt-1'>
            {user.email}
          </div>
        ))}
      </div>
    </Root>
  );
};

export default ApproveAccounts;
