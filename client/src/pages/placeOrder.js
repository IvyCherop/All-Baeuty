import React from "react";
// import CartTotals from './cart/CartTotals'
import styled from "styled-components";
import { createOrder } from "../redux2/actions/orderActions";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  // const userInfo=useSelector((state)=>state.userSignin)
  const navigate = useNavigate();
  if (!cart.shippingAddress) {
    navigate("/shipping");
  }
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(createOrder(cart?.cartItems, cart?.tax, cart?.shippingFee));
  };
  return (
    <Wrapper>
      <Title>Order Summary</Title>
      <Text>
        Total to be paid:Kshs <span>{cart?.cartTotal?.toFixed()}</span>
      </Text>
      <ShippingInfo>
        <Header>Delivery Address</Header>
        <Text>
          Town: <span>{cart.shippingAddress.town}</span>
        </Text>
        <Text>
          Address: <span>{cart?.shippingAddress?.townaddress}</span>
        </Text>
        {/* <Text>Home Address: {cart?.shippingAddress?.homeaddress}</Text> */}
        <Text>
          Postal Address: <span>{cart?.shippingAddress?.postaladdress}</span>
        </Text>
      </ShippingInfo>
      <Payment>
        Payment Method: <span>{cart?.paymentMethod}</span>
      </Payment>
      <Link to="/place-order/success">
        <Button onClick={handleClick}>PlaceOrder</Button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 19vh;
`;

const ShippingInfo = styled.div`
  margin: 20px 0;
`;

const Title = styled.h3`
  margin-bottom: 14px;
`;

const Header = styled.h4`
  margin-bottom: 6px;
  text-decoration: underline;
`;
const Text = styled.h5`
  margin-bottom: 5px;
  span {
    color: chocolate;
    font-size: 16px;
  }
`;
const Payment = styled.h5`
  margin-top: 9px;
  span {
    color: chocolate;
  }
`;
const Button = styled.button`
  padding: 14px 35px;
  margin-top: 30px;
  /* width:fit-content; */
  cursor: pointer;
  border-radius: 27px;
  border: transparent;
  color: whitesmoke;

  background: crimson;
  transition: all 0.5s linear;

  &:hover {
    opacity: 0.8;
    background: chocolate;
  }
`;

export default PlaceOrder;
