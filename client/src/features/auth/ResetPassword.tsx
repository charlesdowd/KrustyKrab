import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useResetPasswordMutation } from '../../store/slices/api/templateApi';
import Loader from '../../components/Loader/Loader';

type ContextType = { resetToken: string };

const ResetPassword = () => {
  const [resetPassword, result] = useResetPasswordMutation();

  const { resetToken } = useOutletContext<ContextType>();

  useEffect(() => {
    // NOTE: verifyEmail is triggered twice due to React.StrictMode issue.
    // The component gets mounted twice so this useEffect runs twice only in dev

    resetPassword({ body: { resetToken } });
  }, []);

  return <Loader size={200} />;
};

export default ResetPassword;
