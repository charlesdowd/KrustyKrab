import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { Root, InputGroup, SignUpForm } from './SignUp.styled';

const signupSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  username: Yup.string()
    .min(4, 'Must be at least 4 characters')
    .required('Please enter a username'),
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: Yup.string()
    .required('Please enter a password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

const SignUp = () => {
  return (
    <Root>
      <h1 className='mb-4'>Sign Up Page</h1>

      <Formik
        validationSchema={signupSchema}
        onSubmit={console.log}
        initialValues={{
          username: '',
          email: '',
          firstName: '',
          password: '',
          passwordConfirmation: '',
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
          <SignUpForm noValidate onSubmit={handleSubmit}>
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

            <InputGroup controlId='username'>
              <Form.Control
                size='lg'
                type='text'
                name='username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Username'
                isInvalid={!!errors.username && touched.username}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.username}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup controlId='firstName'>
              <Form.Control
                type='text'
                size='lg'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='First Name'
                isInvalid={!!errors.firstName && touched.firstName}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.firstName}
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

            <InputGroup controlId='passwordConfirmation'>
              <Form.Control
                size='lg'
                name='passwordConfirmation'
                onChange={handleChange}
                onBlur={handleBlur}
                type='password'
                value={values.passwordConfirmation}
                placeholder='Confirm Password'
                isInvalid={
                  !!errors.passwordConfirmation && touched.passwordConfirmation
                }
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.passwordConfirmation}
              </Form.Control.Feedback>
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!(isValid && dirty)}
              variant='primary'
              className='SignUpButton'
              type='submit'
            >
              Sign Up
            </Button>
            <Form.Text>
              Already a User? <Link to='/login'>Log In</Link>
            </Form.Text>
          </SignUpForm>
        )}
      </Formik>
    </Root>
  );
};

export default SignUp;
