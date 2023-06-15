import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { Container, Row, Col } from "react-bootstrap"
import TodoCard from "../components/TodoCard"
import AuthContext from "../contexts/AuthContext"

function CardGroup( { todos, loginStatus }) {
    return todos.map((todo) => {
      if (loginStatus === todo.userId) {
        return (
          
            <Col md={4} key={todo.id}>
                <TodoCard todo={todo} />
            </Col>

          
        )
      }
    })
}

export default function Home() {
    const todos = useContext(TodoContext).todos
    const loginStatus = useContext(AuthContext).loginStatus
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} loginStatus={loginStatus} />
      </Row>
    </Container>
  )
}
