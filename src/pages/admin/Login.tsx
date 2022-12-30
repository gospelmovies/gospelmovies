import {
  Card,
  CardTitle,
  Container,
  FormField,
  Form,
  FormInput,
  FormButton
} from 'styles/Login.styled'

function Login() {
  return (
    <Container>
      <Card>
        <CardTitle>Login</CardTitle>
        <Form>
          <FormField>
            <FormInput type='email' placeholder='Email' />
          </FormField>
          <FormField>
            <FormInput type='password' placeholder='Password' />
          </FormField>
          <FormButton>Login</FormButton>
        </Form>
      </Card>
    </Container>
  )
}

export default Login
