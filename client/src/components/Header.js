import React from 'react'
import styled from 'styled-components'
const Header = ({title}) => {
    return (
        <div>
            <Title><Span>{title || "All"}</Span>Makeups</Title>
            <Hr/>
        </div>
    )
}
const Title=styled.div`
   /* color:white;  */
   width:fit-content;
   margin:10px auto;
`
const Span=styled.span`
    color:deeppink;

    margin-right: 4px;
`
const Hr=styled.hr`
    width:80px;
    height:6px;
    background: #FF0075;
    margin-left:auto;
    margin-right:auto;
    border-radius: 5px;
    margin-bottom: 9px;
`

export default Header
