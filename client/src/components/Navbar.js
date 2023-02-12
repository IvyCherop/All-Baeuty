import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { css } from 'styled-components';
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useScrollPosition from "@react-hook/window-scroll";
import {
 
  searchProducts,
} from "../redux2/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux2/actions/userActions";
import { MdAccountCircle } from "react-icons/md";
import { device } from "./responsive";

const Navbar = ({ openSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollPosition(40);
  useEffect(() => {
    setIsScrolled(scrollY > 600 ? "true" : "false");
  }, [scrollY]);
  const userInfo = useSelector((state) => state.userSignin.userInfo);
  const userName = userInfo?.user?.name;
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts(searchTerm));
  }, [dispatch, searchTerm]);
  // console.log(searchTerm);
  const handleClick = () => {
    dispatch(signout());
  };
  return (
    <NavWrapper fixed={isScrolled}>
      <Nav>
        <NavToggle>
          <FaBars onClick={openSidebar} />
        </NavToggle>
        <Left>
          <Link to="/">
            <Logo>Beauty-Full</Logo>
          </Link>
        </Left>
        <Center>
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for any product by name..."
            autoFocus
          />
          <SearchContainer>
            <FaSearch />
          </SearchContainer>
        </Center>
        <Links>
        
          
          <Link to="/contact">
            <LinkTo to="/contact">Contact</LinkTo>
          </Link>
          <Link to="/about">
            <LinkTo to="/about">About</LinkTo>
          </Link>
        </Links>
        <Right>
          <CartSection>
            <Link to="/cart">
              <Cart src="data:image/png;base64,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"></Cart>
            </Link>
            <CartContent>{itemsInCart ? itemsInCart.length : 0}</CartContent>
          </CartSection>
          <Account>
            <AccountIcon>
              <MdAccountCircle />
            </AccountIcon>
            <AccountContent>
              <Link to="/account">
                <Text>{userInfo ? userName : "Account"}</Text>
              </Link>
              {userInfo ? (
                <Button type="submit" onClick={handleClick}>
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Text>Login</Text>
                </Link>
              )}
            </AccountContent>
          </Account>
        </Right>
      </Nav>
    </NavWrapper>
  );
};

const Nav = styled.div`
  width: 95vw;
  // max-width:1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media ${device.mobileL} {
    width: 94vw;
  }
  @media ${device.tablet} {
    width: 94vw;
  }
`;
const Button = styled.button`
  cursor: pointer;
  border: 1px solid pink;
  padding: 1px;
  margin-top: 4px;
  text-transform: uppercase;
`;
const Left = styled.div`
  // flex:1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  display: flex;
  width: 600px;
  // flex:1;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 400px;
  }
  @media screen and (max-width: 700px) {
    width: 300px;
  }
  @media screen and (max-width: 600px) {
    width: 250px;
  }
`;
const Right = styled.div`
  display: flex;
  flex-wrap: nowrap;
  // flex:1;
`;
const NavToggle = styled.div`
  cursor: pointer;
  color: black;
  transition: all 0.4s linear;
  font-size: 27px;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;
const Logo = styled.h1`
  font-weight: 900;
  cursor: pointer;
  color: Black;
  margin-top: 0;
  margin-bottom: 0;
  transition: all 0.2s linear;
  /* text-shadow:1px 5px 10px rgba(0,0,0,0.9) ; */
  /* text-shadow: 2px 1px 0px rgba(0, 0, 0, 0.9), 4px 2px 0px black; */
  &:hover {
    transform: scale(1.02);
    /* border:2px solid white; */
    opacity: 0.9;
  }
  @media screen and (max-width: 800px) {
    font-weight: 700;
    letter-spacing: 1;
    font-size: 24px;
  }
`;
const SearchContainer = styled.div`
  background:#FDB8C0;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 7px;
  padding-right: 9px;
  // width:80%;
  @media screen and (max-width: 800px) {
    padding: 5px;
  }

  font-size: 14px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const AccountContent = styled.div`
  position: absolute;
  display: flex;
  z-index: 6000;
  font-size: 20px;
  flex-direction: column;
  right: -14px;
  background:#FDB8C0 ;
  padding: 4px;
  text-align: center;
  border-radius: 3px;
  opacity: 0;
`;
const Account = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 35px;
  @media screen and (max-width: 500px) {
    margin-right: 10px;
  }
  transition: all 0.3s linear;
  font-size: 33px;
  &:hover {
    opacity: 0.9;
    ${AccountContent} {
      opacity: 1;
      z-index: -1;
    }
  }
`;
const Cart = styled.img`
  cursor: pointer;
  transition: all 0.3s linear;
  font-size: 22px;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  object-fit: contain;
  margin-right: 24px;
  color:#FDB8C0;
  @media screen and (max-width: 600px) {
    margin-right: 18px;
  }

  &:hover {
    /* transform:scale(1.1); */
    opacity: 0.9;
  }
`;
const CartContent = styled.h3`
  position: absolute;
  /* color:#F037A5; */
  color:black ;
  // color:purple;
  z-index: 1;
  top: -15px;
  left: 15px;
  font-size: 24px;
`;
const CartSection = styled.div`
  position: relative;
  &:hover {
    opacity: 0.9;
  }
`;

const Links = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Input = styled.input`
  // border:1px solid purple;
  border: none;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  padding: 8px;
  font-weight: 500;
  width: 96%;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 800px) {
    width: 75%;
    padding: 6px;
    margin-left: 12px;
  }
`;

const Text = styled.h6`
  cursor: pointer;
  width: 100%;
  padding-bottom: 4px;
  &:hover {
    opacity: 0.8;
    background:#E6E6FA;
  }
`;
const LinkTo = styled.div`
  color:black ;
  text-decoration: none;
  margin-right: 11px;
  cursor: pointer;
  position: relative;
  width: fit-content;
  &::after {
    content: "";
    position: absolute;
    width: 96%;
    height: 4px;
    left: 0;
    background: #E6E6FA;
    border-radius: 4px;
    top: 20px;
    opacity: 0;
  }
  &:hover {
    opacity: 0.8;
    // background:gray;
    &::after {
      opacity: 1;
    }
  }
`;

const AccountIcon = styled.div`
  color: black;
`;

const NavWrapper = styled.div`
  width: 100vw;
  height: 60px;
  transition: all 2s linear;
  position: ${({ fixed }) => fixed === "true" && "fixed"};

  background:#FDB8C0 ;
  z-index: 1000;
`;

export default Navbar;
