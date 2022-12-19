import { useState } from "react"
import { Login } from "./Login"

export const Auth = () => {
    const [openModal, setOpenModal] = useState(false)
    
  return (
    <>
        <div onClick={() => setOpenModal(!openModal)}>
            <img className="login" src="img/login.svg" alt="Login" />
        </div>

        {
            openModal ?
                <Login />
            : null
        }
    </>
  )
}
