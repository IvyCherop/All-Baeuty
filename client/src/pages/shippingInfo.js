import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
// import {useLocation} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../redux2/actions/cartActions";
const ShippingInfo = (props) => {
  const userInfo = useSelector((state) => state.userSignin?.userInfo);

  const [address, setAddress] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
    setAddress({});
    navigate("/place-order");
  };
  const handleChange = (e) => {
    setAddress((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <Wrapper>
      <Title>Shipping Info</Title>
      <Form onChange={handleChange}>
        <Input type="text" name="town" required placeholder="Town" />
        <Input
          type="text"
          required
          name="townaddress"
          placeholder="Town Address"
        />

        <Input
          type="text"
          name="postaladdress"
          required
          placeholder="Home postal code"
        />
        <Button onClick={handleClick}>Continue</Button>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: pink;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding-top: 20vh;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  width: 80vw;
  max-width: 400px;
  border-radius: 9px;
  border: 1px solid lightgray;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin-bottom: 9px;
  padding: 6px 4px;
  border-radius: 4px;
  border: none;
`;
const Title = styled.h5`
  margin-bottom: 8px;
  color: white;
  font-size: 22px;
`;
const Button = styled.button`
  width: 50%;
  margin: 10px auto;
  padding: 8px;
  background: white;
  border-radius: 11px;
  cursor: pointer;
  border: none;
  background: #ff5da2;
  transition: all 0.3s linear;
  opacity: 0.8;
  &:hover {
    color: white;
    opacity: 1;
  }
`;
export default ShippingInfo;
