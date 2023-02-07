import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
const EmptyCart = () => {
  return (
    <Container>
      <Text>Your cart is Currently Empty!!<Span>Kindly select some items first</Span></Text>
      <Link to="/"><BackButton check >Back To Products</BackButton></Link>
    </Container>
  )
}
const Container=styled.div`
  margin-top: 25vh;
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackButton=styled.button`
padding:8px 10px;
margin-top:10px;
width:fit-content;
cursor:pointer;
border-radius:6px;
border:transparent;
color:whitesmoke;
margin-right:auto;
margin-left:auto;
// align-self:center;
background:black;
&:hover{
    opacity:0.8;
    color:pink;
}
`
const Span=styled.span`
  color: #082032;
  
`


const Text=styled.h4`
  font-family: cursive;
  font-weight: 900;
  max-width: 500px;
  width: 90vw;
  font-size: 30px;
  letter-spacing: 1.4px;
  text-shadow: 2px 2px 0 lightgray,2.5px 2.5px 0 gray;
`

export default EmptyCart
