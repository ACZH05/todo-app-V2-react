import { Container, Form, Button } from "react-bootstrap"
import { useContext, useState } from 'react'
import UserContext from "../contexts/UserContext"
import AuthContext from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

function Login() {
  const users = useContext(UserContext).users
  const setLoginStatus = useContext(AuthContext).setLoginStatus
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function loginUser(e) {
    e.preventDefault()
    users.forEach(user => {
      if (user.username === username && user.password === password) {
        setLoginStatus(user.id)
        navigate("/")
      }
    })
  }
  return (
    <Container>
        <h1 className="my-3">Login</h1>
        <Form onSubmit={loginUser}>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="type" value={username} placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required></Form.Control>
            </Form.Group>
            <Button type="submit" className="mb-3">Submit</Button>
            <p><a href="/register">First time? Sign up here!</a></p>
        </Form>
    </Container>
  )
}

export default Login
