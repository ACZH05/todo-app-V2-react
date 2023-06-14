import { Card } from 'react-bootstrap'

function TodoCard({ todo }) {
    const completed = todo.completed
    const border = completed ? "success" : "danger"
  return (
    <>
      <Card border={border}  className='my-3'>
        <Card.Header>{!completed && "Not"} Completed</Card.Header>
        <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default TodoCard