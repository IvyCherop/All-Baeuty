import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { socials } from "../data";
import { GetCategories } from "../redux2/actions/productActions";
import Social from "./Social";
const Landing= () => {
    const dispatch = useDispatch();
    useMemo(() => {
      dispatch(GetCategories());
    }, [dispatch]);
    const categories = useSelector((state) => state.categories);
    return <Wrapper>
        <Left>
            <Title>Welcome to All Beauty </Title>
            <Title2>HER IN ALL BEAUTTCXC</Title2>
            <Shopby>
                <Heading>
                    Shop by category
                </Heading>
                <Categories>
                    {
                        categories?.categories?.map((category )=>{
                            return <Category>
                                {
                                    category
                                }
                            </Category>
                        }

                        )
                    }
                </Categories>
            </Shopby>
            <Socials>
                    {socials.map((social)=>{
                        return <Social key={social.id}{...social}/>
                    })}
                </Socials>
        
        </Left>
        <Image src= "https://static-bebeautiful-in.unileverservices.com/the-consumers-of-osmetics_Mobilehome.jpg"/>

    </Wrapper>

}
const Wrapper= styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    
`
const Left= styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding-left: 69px;
height:100%;
justify-content: center;
padding-right: 15px;


`
const Title= styled.h1`
font-size:35px;
color: pink;
margin-bottom:20px;
/* justify-self: start; */
display:flex;
 align-self:flex-start;

`
const Title2=styled.h2`
font-size:20px;
color: black;
margin-bottom: 25px;
/* justify-self: start; */
display:flex;
align-self:flex-start;
`
const Image= styled.img`
width:50%;
height:100%;
object-fit:cover;

`
const Socials=styled.div`
    display:flex;
    align-self:flex-start;
    // justify-self:flex-end;
    `
const Shopby= styled.div`
background-color: pink;
padding:10px;

`
const Categories= styled.div`
display: flex;
flex-direction:column;
padding:10px;
background: gray;
`
const Category= styled.h1`
font-size:18px;
color: black;
padding:6px 10px;
transition:all 0.5s linear;
&:hover{
    background:pink;

}
`
const Heading= styled.h1`
font-size:20px;
color:black;

`

export default Landing