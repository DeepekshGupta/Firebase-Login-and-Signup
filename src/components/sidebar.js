import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
function Sidebar() {
 
  return (
    <Container>
      <ProfileContainer>
        <Name>Akshat Malik</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link2>
            <h3>Dashboard</h3>
          </Link2>
          <Link to="/profile">
          
          <Link2  onClick={()=>console.log('Hello')}>
            <h3>Profile</h3>
          </Link2>
          </Link>
          <Link to="/Forms">
          
          <Link2>
            <h3>Enter Work</h3>
          </Link2>

          </Link>
          <Link >
          <Link2>
            <h3>Reviews</h3>
          </Link2>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
  margin-top:1%;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:200px;
`;


const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link2 = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
