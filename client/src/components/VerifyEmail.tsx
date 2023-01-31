import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useVerifyEmailMutation } from '../store/slices/api/templateApi';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const emailToken = searchParams.get('emailToken');

  const [verifyEmail, { isSuccess, isError, isLoading }] =
    useVerifyEmailMutation();

  useEffect(() => {
    if (!emailToken) navigate('/'); // Navigate home if no token in url

    // Attempt to verify email
    verifyEmail({ body: { emailToken } });
  }, []);

  // Handle outcomes of verifying email
  useEffect(() => {
    if (isSuccess) {
      console.log('Successfully verified user');
    }
    if (isError) {
      console.log('Failed to verify user');
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <Container>
      {isLoading ? <h1>Loading...</h1> : <h1>Verify Email Page</h1>}
    </Container>
  );
};

export default VerifyEmail;
