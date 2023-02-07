import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const SidebarItem = ({text,url,closeSidebar}) => {
    return (
        <Link to={url}><Item onClick={closeSidebar}>{text}</Item></Link>
    )
}
const Item=styled.div`
    position:relative;
    padding-bottom:15px;
    display:flex;
    width:fit-content;
    text-align:center;
    align-items:center;
    padding-right:4px;
    cursor:pointer;
    &::after{
        content:"";
        position:absolute;
        width:96%;
        height:4px;
        background:#F037A5;
        border-radius:4px;
        top:22px;
        opacity:0;

    }
    &:hover{
        opacity:0.8;
        &::after{
            opacity:1;
        }
    }
`

export default SidebarItem
