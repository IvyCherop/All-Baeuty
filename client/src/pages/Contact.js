import React from "react";
import styled from "styled-components";
import Social from "../components/Social";
import { socials } from "../data";
const Contact = () =>{
  return (
    <Wrapper>
    <Content>
      <Find>Find us on</Find>
      <Socials>
                    {socials.map((social)=>{
                        return <Social key={social.id}{...social}/>
                    })}
                </Socials>
    </Content>
    </Wrapper>
  )
}
const Socials=styled.div`
    display:flex;
    align-self:flex-end;
    // justify-self:flex-end;
`
const Wrapper= styled.div`
width:100vw;
height:100vh;
display: grid;
place-items: center;
 `
 const Content= styled.div`
 display: flex;
 flex-direction: column;
`
const Find= styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
`
export default Contact
