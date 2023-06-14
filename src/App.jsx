import { Container, Nav, Navbar } from "react-bootstrap"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { TodoContext } from "./contexts/TodoContext"
import useLocalStorage from "use-local-storage"
import Home from "./pages/Home"
import AddTodo from "./pages/AddTodo"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Todos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/add">Add Todo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

function App() {
  const [ todos, setTodos ] = useLocalStorage("todos", [])
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add" element={<AddTodo />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </TodoContext.Provider>
  )
}

export default App
