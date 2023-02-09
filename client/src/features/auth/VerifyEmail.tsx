import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useVerifyEmailMutation } from '../../store/slices/api/templateApi';
import Loader from '../../components/Loader/Loader';

type ContextType = { emailToken: string };

const VerifyEmail = () => {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const { emailToken } = useOutletContext<ContextType>();

  useEffect(() => {
    // NOTE: verifyEmail was triggered twice due to React.StrictMode issue

    // Attempt to verify email.. isLoading check to make sure we dont trigger this twice
    if (!isLoading) verifyEmail({ body: { emailToken } });
  }, [isLoading]);

  return <Loader size={200} />;
};

export default VerifyEmail;
