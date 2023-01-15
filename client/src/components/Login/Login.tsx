import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { LoginForm, Root, InputGroup } from './Login.styled';

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
  return (
    <Root>
      <h1 className='mb-4'>Log In Page</h1>

      <Formik
        validationSchema={loginSchema}
        onSubmit={console.log} // TODO: replace with RTK signup
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
                isInvalid={!!errors.email && touched.email}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.email}
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
                isInvalid={!!errors.password && touched.password}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.password}
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
