import { useState } from 'react'
import {
  Card,
  CardTitle,
  Container,
  FormField,
  Form,
  FormInput,
  FormButton,
  PError
} from 'styles/Login.styled'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [logging, setLogging] = useState(false)
  const [wrongDetails, setWrongDetails] = useState(false)
  const navigate = useNavigate()

  const formValues = {email: email, password: password}

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  
    if(email && password){
      setLogging(true)
      setWrongDetails(false)
      axios.post('http://127.0.0.1:8000/api/admin/login', formValues, {headers: {'Content-Type': 'application/json'}})
      .then(response => {
        setLogging(false)
        console.log(response.data)
        setEmail('')
        setPassword('')
        localStorage.setItem('user', response.data.token)
        navigate('/admin/home')
      })
      .catch(error => {
        setLogging(false)
        console.log(error.response.data.message)
        if(error.response.data.message === 'Invalid credentials'){
          setWrongDetails(true)
        }
      })
    }  
  }

  return (
    <Container>
      <Card>
        <CardTitle>Login</CardTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <FormInput type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </FormField>
          <FormField>
            <FormInput type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            { wrongDetails && <PError>wrong email or password</PError>}
          </FormField>
          <FormButton disabled={logging}>
            {
              logging ? 'logging in...' : 'Login'
            }
          </FormButton>
        </Form>
      </Card>
    </Container>
  )
}

export default Login
