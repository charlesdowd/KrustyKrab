import * as Yup from 'yup';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Button from '../../../components/Button/Button';
import { Root, InputGroup, SignUpForm } from './SignUp.styled';
import { useRegisterMutation } from '../../../store/slices/api/templateApi';

const phoneRegExp =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

// Validation object for new sign ups
const signupSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  company: Yup.string().optional(),
});

const SignUp = () => {
  const [registerUser, { isLoading }] = useRegisterMutation();

  return (
    <Root>
      <h1 className='mb-4'>Sign Up Page</h1>

      <Formik
        validationSchema={signupSchema}
        onSubmit={async (values, { resetForm }) => {
          const { email, company = '', phoneNumber = '' } = values;
          await registerUser({ body: { email, company, phoneNumber } });
          resetForm();
        }}
        initialValues={{
          email: '',
          company: '',
          phoneNumber: '',
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

            <InputGroup controlId='phoneNumber'>
              <Form.Control
                type='tel'
                placeholder='Phone Number'
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                name='phoneNumber'
                size='lg'
                isInvalid={!!errors.phoneNumber && !!touched.phoneNumber}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.phoneNumber?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup controlId='company'>
              <Form.Control
                type='text'
                placeholder='Company Name'
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                name='company'
                size='lg'
              />
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!(isValid && dirty)}
              loading={isLoading}
              variant='primary'
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
