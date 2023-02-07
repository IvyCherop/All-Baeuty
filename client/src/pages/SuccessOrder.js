import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../redux2/actions/userActions";
import { useNavigate } from "react-router-dom";
const SuccessOrder = () => {
  const userInfo = useSelector((state) => state.userSignin.userInfo);

  const userName = userInfo?.user?.name;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(signout());
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Title>
          Dear <span>{userName}</span> your order has been placed successfully.
        </Title>
        <Text>
          You'll be receive an email shortly confirming the order placement and
          the xpected delivery date.
        </Text>
        <Text>It was a pleasure serving you!!See you soon.</Text>
        <Buttons>
          <Link to="/">
            <Button>Back To Products</Button>
          </Link>
          <Button onClick={handleClick}>Logout</Button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 89vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: lightcoral;
  box-shadow: 6px 7px 22px pink;
  border-radius: 6px;
  width: 90vw;
  max-width: 500px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 7px 10px;
  background: transparent;
  border: 2px solid chocolate;
  transition: all 0.6s linear;
  border-radius: 8px;
  color: white;
  &:hover {
    background: chocolate;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 10px;
  font-size: 22px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  span {
    color: deeppink;
    text-decoration: underline;
  }
`;

const Text = styled.h4`
  color: gray;
  margin-bottom: 8px;
  font-size: 17px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export default SuccessOrder;
