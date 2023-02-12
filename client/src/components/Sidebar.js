import React from 'react'
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa'
import {links,socials} from '.././data'
import Social from './Social';
import SidebarItem from './SidebarItem'
// import {useGlobalContext }from '../context';
const Sidebar = ({sidebarOpen,closeSidebar}) => {
    // const {sidebarOpen}=useGlobalContext();
    // console.log(sidebarOpen);
    return (
        <SidebarWrapper open={sidebarOpen&&"open"}>
            <Aside>
                <SidebarLinks>
                    <Icon onClick={closeSidebar}><FaTimes/></Icon>
                    {links.map((link)=>{
                        return <SidebarItem closeSidebar={closeSidebar} key={link.id} {...link}/>
                    })}
                </SidebarLinks>
                {/* <Socials>
                    {socials.map((social)=>{
                        return <Social  closeSidebar={closeSidebar}key={social.id}{...social}/>
                    })}
                </Socials> */}
            </Aside>
        </SidebarWrapper>
    )
}
const SidebarWrapper=styled.div`
    width:100%;
    background:rgba(0,0,0,0.1);
    // background:yellow;
    position:fixed;
    z-index:1;
    top:60px;
    left:0;
    height:92vh;
    transition:all 0.9s ease-out;
    transform:translateX(-100%);
    transform:${props=>props.open==="open"&&'translateX(0)'};
    
    
`
const SidebarLinks=styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
`
const Aside=styled.aside`
    width:90vw;
    max-width:300px;
    display:grid;
    // height:85vh;
    height:100%;
    flex-direction:column;
    grid-template-rows:auto,1fr,auto;
    /* background:rgba(0,0,0,0.2); */
    background: white;
    padding:40px 30px;
    color:black;

`
// const Socials=styled.div`
//     display:flex;
//     align-self:flex-end;
//     // justify-self:flex-end;
// `
const Icon=styled.div`
    position:absolute;
    right:0;
    top:0;
    color:black;
    cursor:pointer;
    font-size:29px;
    /* &:hover{
        color:dark-red;
        opacity:0.7 */
    /* } */
`



export default Sidebar
