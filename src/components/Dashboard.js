import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "./Dashboard.css"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card style={{borderRadius:25 ,backgroundColor:'#0F4DA7'}}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{color:'white'}}>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <div style={{flexDirection:'row',display:'flex'}}>
          <strong style={{color:'white'}}>Email:</strong> <div style={{color:'white',marginLeft:20}}>{currentUser.email}</div></div>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3" style={{borderRadius:25 ,backgroundColor:'black'}}>
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout} style={{color:'white'}}>
          Log Out
        </Button>
      </div>

      <div className="sty">
       <text style={{fontSize:35 ,alignSelf:'center'}}>Hello</text>
      <div  onClick={()=>{
        console.log('Hello Here');

      }} style={{height:'20%',width:'80%',backgroundColor:'black',alignSelf:'center',marginTop:50,borderRadius:25,display:'flex',alignItems:'center',justifyContent:'center'}}> <text style={{color:'white'}}>Click Me</text> </div>
      </div>
    </>
  )
}


