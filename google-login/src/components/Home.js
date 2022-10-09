import React from 'react'
import GoogleLogin from "./GoogleLogin";

const Home = () => {
  return (
    <div>
      <h1>Login with Google Account using React and Node.js</h1>
      <div className="wrapper">
        <GoogleLogin text={"Log in with Google"}/>
      </div>
    </div>
  )
}
export default Home


