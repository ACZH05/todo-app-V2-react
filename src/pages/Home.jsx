import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import { Container, Row, Col, Card, Badge } from "react-bootstrap"

function CardGroup( { todos }) {
    return todos.map((todo) => {
        const completed = todo.completed
        const bg = completed ? "success" : "danger"
        return (
            <Col md={4} key={todo.id}>
                <Card classNamemy-3>
                    <Card.Body>
                        <Card.Title>{todo.title}</Card.Title>
                        <Card.Text>{todo.description}</Card.Text>
                        <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
}

export default function Home() {
    const todos = useContext(TodoContext).todos
  return (
    <Container>
      <h1 className="my-3">Your todos</h1>
      <Row>
        <CardGroup todos={todos} />
      </Row>
    </Container>
  )
}
