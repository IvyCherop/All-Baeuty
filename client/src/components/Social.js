import React from 'react'
import styled from 'styled-components'
const Social = ({url,icon,closeSidebar}) => {
    return (
        <Icon  onClick={closeSidebar} href={url}target="_blank">{icon}</Icon>
    )
}
const Icon=styled.a`
    color:#FDB8C0;
    font-size:40px;
    padding-right:8px;
    padding-bottom:20px;
    &:hover{
        transform:scale(1.1);
        color:#F037A5;
    }

`

export default Social
