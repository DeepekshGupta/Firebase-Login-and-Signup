import React from "react"
import  Sidebar from "./sidebar"

import styled from 'styled-components';

export default function Dashboard() {
  

  return (
    <>
    <Container2>
    <Sidebar/>
    </Container2>
    </>
  )
}




const Container2 = styled.div`
  display: flex;
  height: 97vh;
  justify-content:space-between;
  margin-left:1%;
  margin-right:1%;
`;

