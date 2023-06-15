import { Container, Nav, Navbar, Button } from "react-bootstrap"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { TodoContext } from "./contexts/TodoContext"
import RequireAuth from "./components/RequireAuth"
import SectionAuth from "./components/SectionAuth"
import UserContext from "./contexts/UserContext"
import AuthContext from "./contexts/AuthContext"
import useLocalStorage from "use-local-storage"
import Home from "./pages/Home"
import AddTodo from "./pages/AddTodo"
import ErrorPage from "./pages/ErrorPage"
import Login from "./pages/Login"
import Register from "./pages/Register"

function Layout({ setLoginStatus }) {
  return (
    <>
      <SectionAuth>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Todos</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/add">Add Todo</Nav.Link>
            </Nav>
            <Button variant="outline-dark" onClick={() => setLoginStatus(null)}>Log Out</Button>
          </Container>
        </Navbar>
      </SectionAuth>
      <Outlet />
    </>
  )
}

function App() {
  const [ todos, setTodos ] = useLocalStorage("todos", [])
  const [users, setUsers] = useLocalStorage("users", [])
  const [loginStatus, setLoginStatus] = useLocalStorage("loginStatus", null)
  return (
    <AuthContext.Provider value={{ loginStatus, setLoginStatus }}>
    <TodoContext.Provider value={{ todos, setTodos }}>
      <UserContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setLoginStatus={setLoginStatus} />}>
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="add" element={<RequireAuth><AddTodo /></RequireAuth>} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </TodoContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
