import React from 'react'
import styled from 'styled-components'
const Refund = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Returns & Exchanges</Title>
        <Text>Beauty-Full will gladly exchange an item for another if you wish to exchange a purchased item you are dissatisfied with, within <Span>7 days</Span> from the date of purchase. This excludes offers and any discounts offered at time of purchase.</Text>
        <Text>Contact us via <ContactSpan>+254791391022</ContactSpan>,or email us at<EmailSpan href='https://mail.google.com/mail/u/1/#inbox/FMfcgzGrcXkWfZhsjgmtxvqqBGNnLcJD'target="_blank">thisisbeautyfull@gmail.com</EmailSpan> with your order number within <Span>48 hrs</Span> of receiving the item, to enable us to process the request and get back to you in good time. Please ensure the items are undamaged, original packaging intact, and with original tags attached.</Text>
        <Warning>Any damages/distortion nullifies the exchange.</Warning>

    </Wrapper>
    </Container>
    
  )
}
const Container=styled.div`
  background:#FDB8C0;
  width:100vw;
  height:100vh;
  display: flex;
  
  align-items: center;
` 
const Wrapper=styled.div`
width:90vw;
max-width: 600px;
margin-right: 50px;
margin-left: 50px;
color: black;
font-size: 1.7rem;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media screen and (max-width:800px){
  font-size: 1.5rem;
}

`
const Title=styled.h1`
  color:black;
  text-decoration: underline salmon;
  margin-bottom: 10px;
  @media screen and (max-width:800px){
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
}
`

const Text=styled.h6`
  margin-bottom: 8px;
  line-height: 1.3;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const EmailSpan=styled.a`
  color: crimson;
  padding:0 3px;
  text-decoration: underline;
  cursor: pointer;
`

const ContactSpan=styled.span`
  color: crimson;
`

const Warning=styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: crimson;
`
const Span=styled.span`
  color: crimson;
`

export default Refund
