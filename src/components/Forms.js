import React, { useState } from "react"
import { Form,Card, Button, Alert,Row,Col } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"
import { collection,serverTimestamp,addDoc } from "@firebase/firestore" 

import styled from 'styled-components';



export default function Forms() {
    const [name, setName] = useState("")
    const [contact, setContact] = useState(null)
    const [description, setDescription] = useState("")
    const [Addr1, setAddr1] = useState("")
    const [Addr2, setAddr2] = useState("")
    const [city,setCity]=useState("")
    const [zip,setZip]=useState(null)



    const submit = (e) => {
       var data={
        created: serverTimestamp(),
        Name:name,
        contact:contact,
        Description:description,
        Addr1:Addr1,
        Addr2:Addr2,
        City:city,
        Zip:zip,
       }
       addDoc(collection(db, "cities"), data);
    
      setName("");
      setContact(null);
      setDescription("");
      setAddr1("");
      setAddr2("");
      setCity("");
      setZip(null);
    };
  return (
      <>
     <FConatiner>
       <FormConatiner>
       <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" value={name} placeholder="Enter Name"  onChange={(e)=>{
        setName(e.target.value)
      }}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="number" value={contact} placeholder="Number" onChange={(e)=>{
        setContact(e.target.value)
      }}/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control value={Addr1} placeholder="1234 Main St"  onChange={(e)=>{
        setAddr1(e.target.value)
      }} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control value={Addr2} placeholder="Apartment, studio, or floor"   onChange={(e)=>{
        setAddr2(e.target.value)
      }}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Experience</Form.Label>
    <Form.Control value={description} placeholder="Your Experience"   onChange={(e)=>{
        setDescription(e.target.value)
      }}/>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control  value={city} onChange={(e)=>{
        setCity(e.target.value)
      }} />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control value={zip}  onChange={(e)=>{
        setZip(e.target.value)
      }} />
    </Form.Group>
  </Row>
  <Button variant="primary" type="submit" onClick={submit} >
    submit
  </Button>
  
</Form>
       </FormConatiner>
     </FConatiner>
    
    </>

  )
}

const FormConatiner=styled.div`

background-color:lightblue;
padding: 30px;
height:600px;
width:600px;
justify-content:center;
align-self:center;
align-items:center;
border-radius:25px;
margin-top:150px;

`
const FConatiner=styled.div`
display:flex;

flex-direction:column;

height:100%;
width:100%;
`
