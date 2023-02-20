import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import { Root, InputGroup, SignUpForm } from './SignUp/SignUp.styled';

const forgotPasswordSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const ForgotPassword = () => {
  return (
    <Root>
      <h1 className='mb-4'>Password Reset</h1>

      <Formik
        validationSchema={forgotPasswordSchema}
        onSubmit={async (values, { resetForm }) => {
          const { email } = values;
          // TODO: Add forgot password mutation here
          resetForm();
        }}
        initialValues={{
          email: '',
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
                isInvalid={!!errors.email && !!touched.email}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.email?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!(isValid && dirty)}
              loading={false} /* TODO: forgot password mutation isLoading */
              variant='primary'
              className='SignUpButton'
              type='submit'
            >
              Send Reset Link
            </Button>
            <Form.Text>
              Haven&apos;t signed up yet? Sign up <Link to='/signup'>Here</Link>
            </Form.Text>
          </SignUpForm>
        )}
      </Formik>
    </Root>
  );
};

export default ForgotPassword;
