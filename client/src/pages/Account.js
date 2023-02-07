import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import styled from 'styled-components'

const Account = () => {
  const userInfo=useSelector((state)=>state.userSignin?.userInfo)
  const navigate=useNavigate()
  useEffect(()=>{
    if (!userInfo){
      navigate("/login")
    }
  
  },[navigate,userInfo])
  return (
    <Wrapper>
      Account page......
    </Wrapper>
  )
}
const Wrapper=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Account
