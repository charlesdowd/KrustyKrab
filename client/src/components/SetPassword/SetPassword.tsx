import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { LoginForm, Root, InputGroup } from '../Login/Login.styled'; // TODO: Make these non login specific styled components

const setPasswordSchema = Yup.object({
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

const SetPassword = () => {
  return (
    <Root>
      <h1 className='mb-4'>Set Your Password</h1>

      <Formik
        validationSchema={setPasswordSchema}
        onSubmit={console.log} // TODO: replace with RTK signup
        initialValues={{
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
          <LoginForm noValidate onSubmit={handleSubmit}>
            <InputGroup controlId='password'>
              <Form.Control
                type='password'
                placeholder='Set Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                name='password'
                size='lg'
                isInvalid={!!errors.password && !!touched.password}
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.password?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup controlId='passwordConfirmation'>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={values.passwordConfirmation}
                onChange={handleChange}
                onBlur={handleBlur}
                name='passwordConfirmation'
                size='lg'
                isInvalid={
                  !!errors.passwordConfirmation &&
                  !!touched.passwordConfirmation &&
                  values.passwordConfirmation
                }
              />
              <Form.Control.Feedback className='FeedBack' type='invalid'>
                {errors.passwordConfirmation?.toString()}
              </Form.Control.Feedback>
            </InputGroup>

            <Button
              // Start out disabled on initial load and until all fields valid
              disabled={!isValid || !dirty || !values.passwordConfirmation}
              variant='primary'
              className='SignUpButton'
              type='submit'
            >
              Set Password
            </Button>
          </LoginForm>
        )}
      </Formik>
    </Root>
  );
};

export default SetPassword;
