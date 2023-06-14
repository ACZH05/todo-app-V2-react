import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { Navigate } from "react-router-dom"

function RequireAuth({ children }) {
  const loginStatus = useContext(AuthContext).loginStatus

  if (!loginStatus) return <Navigate to="/login" replace />
  return children
}

export default RequireAuth