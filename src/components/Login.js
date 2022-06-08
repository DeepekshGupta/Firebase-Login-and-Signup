import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import styled from 'styled-components';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    
    <>

       <LonginConatiner>
      <Card style={{borderRadius:25 ,backgroundColor:'#0F4DA7',height:500,width:350,marginTop:200}}>
        <Card.Body>
          <h2 className="text-center mb-5" style={{color:'white'}}>Please Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label style={{color:'white'}}>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label style={{color:'white'}}>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            

            
            <Button disabled={loading} style={{width:'100%' ,borderRadius:25 , backgroundColor:'black',marginTop:50}}  type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3" >
            <Link to="/forgot-password" style={{color:'white'}}>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" style={{color:'black'}}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </LonginConatiner>
    </>
  )
}



const LonginConatiner=styled.div`
display:flex;

flex-direction:column;

justify-content:center;
height:100%;
width:100%;
align-items:center;
`



