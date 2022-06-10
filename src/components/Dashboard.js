import React from "react"
import  Sidebar from "./sidebar"

import { Chart as ChartJS } from 'chart.js/auto'
import {Bar,Doughnut,Line} from "react-chartjs-2"
import styled from 'styled-components';

export default function Dashboard() {
  

  return (
    <>
    <Container2>
    <Sidebar/>
    <Graphs>
     <SubGraph><BarContainer>
    <Bar
     data={{
      labels: ['Toys', 'Cloths', 'Electronics', 'Shoes', 'Grociery'],
      datasets: [{
          label: 'Total Revene By Item',
          data: [120000, 190000, 300000, 500000, 200000],
          backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
      }]
  }}

  height={300}
  width={500}
    
    />
    
    </BarContainer>
    <BarContainer>
    <Line 
    data = {{
  labels: ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'],
  datasets: [{
    label: 'Total Revenue By Month',
    data: [65000, 59000, 80000, 81000, 56000, 55000, 40000,66000,54000,35000,76000,34000],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
  
}}
height={300}
width={500}
  />
    </BarContainer></SubGraph>
     <SubGraph>
      <BarContainer2>
      <Doughnut data = {{
  labels: ['Toys', 'Cloths', 'Electronics', 'Shoes', 'Grociery'],
  datasets: [{
    label: 'Total Sales by Item',
    data: [120000, 190000, 300000, 500000, 200000],
    backgroundColor: [
      'rgba(255, 99, 132, 1)',
       'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
    ],
    hoverOffset: 4
  }]
  
}}
/>

      </BarContainer2>
     <BarContainer2>
       <text style={{fontWeight:'bold' ,fontSize:30,alignSelf:'center'}}>Total Revenue This Year</text>
       <text style={{fontSize:35,alignSelf:'center'}}>$ 6000000</text>
       <text style={{fontWeight:'bold' ,fontSize:30,alignSelf:'center'}}>Total Orders This Year</text>
       <text style={{fontSize:35,alignSelf:'center'}}>15000</text>
       <text style={{fontWeight:'bold' ,fontSize:30,alignSelf:'center'}}>Total Returns</text>
       <text style={{fontSize:35,alignSelf:'center'}}>3000</text>
     </BarContainer2>
     </SubGraph>
    
    </Graphs>
    </Container2>
    </>
  )
}




const Container2 = styled.div`
  display: flex;
  height: 97vh;
  margin-left:1%;
  margin-right:1%;
`;


const BarContainer=styled.div`
height:350px;
width:550px;
border-radius:25px;
margin:1%;
background-color:lightblue;
justify-content:center;

`
const BarContainer2=styled.div`
height:570px;
width:550px;
border-radius:25px;
margin:1%;
background-color:lightblue;
justify-content:center;
display:flex;
flex-direction:column;

`

const Graphs=styled.div`
margin:1%;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:200px;
`

const SubGraph=styled.div`
display:flex;
align-self:center;

`
