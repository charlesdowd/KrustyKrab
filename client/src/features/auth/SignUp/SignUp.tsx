import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from '../../../components/Button/Button';
import { Root, InputGroup, SignUpForm } from './SignUp.styled';
import { useRegisterMutation } from '../../../store/slices/api/templateApi';

// Validation object for new sign ups
const signupSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
});

const SignUp = () => {
  const [registerUser, { isLoading }] = useRegisterMutation();

  return (
    <Root>
      <h1 className='mb-4'>Sign Up Page</h1>

      <Formik
        validationSchema={signupSchema}
        onSubmit={async (values, { resetForm }) => {
          const { email } = values;
          await registerUser({ body: { email } });
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
              loading={isLoading}
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
