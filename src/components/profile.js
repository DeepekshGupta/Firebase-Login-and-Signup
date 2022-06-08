import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

import styled from 'styled-components';



export default function Profile() {

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
      <ProfileConatiner>
      <Card style={{borderRadius:25 ,backgroundColor:'#0F4DA7',width:350,marginTop:350,}}>
      <Card.Body>
        <h2 className="text-center mb-4" style={{color:'white',}}>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div style={{flexDirection:'row',display:'flex'}}>
        <strong style={{color:'white'}}>Email:</strong> <div style={{color:'white',marginLeft:20}}>{currentUser.email}</div></div>
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3" style={{borderRadius:25 ,backgroundColor:'black'}}>
          Update Profile
        </Link>
      </Card.Body>
    </Card>
    <ButtonConainer>
      <Button variant="link" onClick={handleLogout} style={{color:'black'}}>
        Log Out
      </Button>
    </ButtonConainer>
    </ProfileConatiner>
    
    </>

  )
}


const ButtonConainer=styled.div`
 
margin-top:2;
width:100;
text-align:center;

`;


const ProfileConatiner=styled.div`
display:flex;

flex-direction:column;

justify-content:center;
height:100%;
width:100%;
align-items:center;
`