import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"

function SectionAuth({ children }) {
  const loginStatus = useContext(AuthContext).loginStatus

  if (!loginStatus) return

  return (
    <>
        { children }
    </>
  )
}

export default SectionAuth