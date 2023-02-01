import * as Yup from 'yup';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { LoginForm, Root, InputGroup } from './Login.styled';

import { useLoginMutation } from '../../../store/slices/api/templateApi';
import { useAppDispatch } from '../../../store/hooks';
import { setCredentials } from '../../../store/slices/authSlice';

// Validation object for logging in
const loginSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .required('Please enter a password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { data: loginData, isSuccess, isError }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      // Set auth token in redux
      dispatch(setCredentials({ ...loginData }));
      navigate('/app');
    }
    if (isError) {
      console.log('ERROR LOGGING IN'); // TODO: replace with toast
    }
  }, [isSuccess, isError]);

  return (
    <Root>
      <h1 className='mb-4'>Log In Page</h1>

      <Formik
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          const { email, password } = values;
          login({ body: { email, password } });
        }}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          isValid,
          touched,
          errors,
          dirty,
        }) => (
          <LoginForm noValidate onSubmit={handleSubmit}>
            <InputGroup controlId='email'>
              <Form.Control
                type='email'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                size='lg'
                isInvalid={!!errors.email && !!touched.email}
                autoComplete='email'
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.email?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup controlId='password'>
              <Form.Control
                size='lg'
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Password'
                isInvalid={!!errors.password && !!touched.password}
                autoComplete='current-password'
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.password?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!(isValid && dirty)}
              variant='primary'
              className='SignUpButton'
              type='submit'
            >
              Log In
            </Button>
            <Form.Text>
              Don&apos;t Have an Account? <Link to='/signup'>Sign Up</Link>
            </Form.Text>
          </LoginForm>
        )}
      </Formik>
    </Root>
  );
};

export default Login;
