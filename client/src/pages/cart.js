import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTotals, clearCart } from "../redux2/actions/cartActions";
import CartItem from "./cart/CartItem";
import EmptyCart from "../components/EmptyCart";
import CartTotals from "./cart/CartTotals";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const itemsInCart = useSelector((state) => state.cart.cartItems);
  const productsList = useSelector((state) => state.productsList.prdoucts);
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, itemsInCart, productsList]);
  const handleClick = () => {
    dispatch(clearCart());
  };
  if (itemsInCart?.length < 1) {
    return <EmptyCart />;
  }
  return (
    <Wrapper>
      <Link to="/">
        <BackButton check>Back To Products</BackButton>
      </Link>
      <BackButton
        onClick={handleClick}
        style={{
          background: "rgb(85, 81, 81)",
          position: "absolute",
          top: 60,
          right: 90,
        }}
      >
        CLearCart
      </BackButton>
      {itemsInCart?.map((item) => {
        return <CartItem key={item.product} {...item} />;
      })}
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 0;
  max-width: 800px;
  align-items: stretch;
  text-align: center;
  justify-content: center;
  margin-right: 10px;
`;

const BackButton = styled.div`
  padding: 8px 10px;
  margin-bottom: 20px;
  margin-top: 10px;
  width: fit-content;
  cursor: pointer;
  border-radius: 18px;
  border: transparent;
  color: whitesmoke;
  margin-right: auto;
  margin-left: auto;
  background: black;
  transition: all 0.5s linear;

  /* background:#09009B; */

  &:hover {
    opacity: 0.8;
    /* color:pink; */
    background: chocolate;
  }
`;

export default Cart;
