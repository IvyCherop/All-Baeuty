import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { savePaymentMethod } from "../redux2/actions/cartActions";
import { useDispatch } from "react-redux";
const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("Paypal");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(savePaymentMethod(paymentMethod));
  };
  // console.log(paymentMethod);
  return (
    <Wrapper>
      <Select>
        <RadioButton
          name="paymentMethod"
          id="PayPal"
          value="PayPal"
          type="radio"
          required
          checked
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Label htmlFor="PayPal">PayPal</Label>
      </Select>
      <Select>
        <RadioButton
          name="paymentMethod"
          value="mpesa"
          type="radio"
          required
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Label htmlFor="mpesa">Pay with Mpesa</Label>
      </Select>
      <Select>
        <RadioButton
          name="paymentMethod"
          value="Pay On Delivery"
          type="radio"
          required
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <Label htmlFor="mpesa">Pay on Delivery</Label>
      </Select>
      <Link to="/shipping">
        <Button onClick={handleClick}>Continue to Order</Button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* background: pink; */
  width: 100vw;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  left: 50%;
  position: absolute;
  /* transform: translateX(-50%); */

  padding-top: 22vh;

  flex-direction: column;
`;
const Button = styled.button`
  width: 26%;
  margin-top: 14vh;
  /* margin :10px auto; */
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
const Select = styled.div`
  margin-bottom: 4px;
`;
const RadioButton = styled.input`
  align-self: flex-start;
  margin-bottom: 8px;
`;
const Label = styled.label``;

export default PaymentMethod;
