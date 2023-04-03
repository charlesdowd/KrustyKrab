import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import {
  LoginForm,
  Root,
  InputGroup,
  Input,
  Title,
  LoginButton,
  InfoText,
  LinkText,
} from './Login.styled';
import RedLogo from '../../../assets/red-logo.svg';

import { useLoginMutation } from '../../../store/slices/api/templateApi';

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
  const [login, { isLoading }] = useLoginMutation();

  return (
    <Root>
      <div>
        <img src={RedLogo} width={140} />
      </div>

      <Title>Log In</Title>

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
              <Input
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
              <Input
                className='mb-1'
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
              <Form.Control.Feedback className='FeedBack mb-1' type='invalid'>
                {errors.password?.toString()}
              </Form.Control.Feedback>
              <InfoText>
                <LinkText to='/forgot-password'> Forgot password</LinkText>
              </InfoText>
            </InputGroup>

            <LoginButton
              // Start out disabled on initial load and until all fields valid
              color='red'
              disabled={!(isValid && dirty)}
              type='submit'
              loading={isLoading}
            >
              Log In
            </LoginButton>
            <InfoText>
              Don&apos;t Have an Account?{' '}
              <LinkText to='/signup'>Sign Up</LinkText>
            </InfoText>
          </LoginForm>
        )}
      </Formik>
    </Root>
  );
};

export default Login;
