import { Container, Form, Button } from "react-bootstrap"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import UserContext from "../contexts/UserContext"

function Register() {
    const users = useContext(UserContext).users
    const setUsers = useContext(UserContext).setUsers
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return (
    <Container>
        <h1 className="my-3">Register</h1>
        <Form onSubmit={(e) => {
            e.preventDefault()
            setUsers([...users, { id: Date.now(), username, password}])
            navigate("/login")
        }}>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    value={username}
                    type="type"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button type="submit" className="mb-3">Submit</Button>
            <p><a href="/login">Have registered before? Log in here!</a></p>
        </Form>
    </Container>
    )
}

export default Register
