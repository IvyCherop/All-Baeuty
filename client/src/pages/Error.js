import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Error = () => {
  return (
    <Wrapper>
      Oops!!This url does not exist.
      <Link to="/"><BackButton>Back To Products</BackButton></Link>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  color: #082032;
  margin-top: 8vh;
`

const BackButton=styled.div`
padding:8px 10px;
margin-top:10px;
font-size: 18px;
width:fit-content;
cursor:pointer;
border-radius:6px;
border:transparent;
color:whitesmoke;
margin-right:auto;
margin-left:auto;
// align-self:center;
background:#09009B;
&:hover{
    opacity:0.8;
    color:pink;
}
`

export default Error
