// import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import './Login.scss'
import { Button } from "@mui/material"
import { auth, provider } from '../../firebase'

const Login = () => {

    const signIn =  () => {
        signInWithPopup(auth, provider).catch((err) => {
            alert(err)
        })
    }

  return (
      <div className='login'>
          <div className="loginLogo">
              <img src="src/assets/react.svg" alt="" />
          </div>
          <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login