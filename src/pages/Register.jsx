import { Container, Form, Button } from "react-bootstrap"

function Register() {
  return (
    <Container>
        <h1 className="my-3">Register</h1>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="type" placeholder="Enter username" required></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" required></Form.Control>
            </Form.Group>
            <Button type="submit" className="mb-3">Submit</Button>
            <p><a href="/login">Have registered before? Log in here!</a></p>
        </Form>
    </Container>
  )
}

export default Register
