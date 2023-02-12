import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux2/actions/userActions";
// import Loading from '../components/Loading'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Alert from "../components/Alert";
const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  // const redirect = props.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/';
  // const redirect="/"
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  // const userLogin = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (error) {
      setShowAlert(true);
    }
  }, [error]);
  // console.log(error);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match!!");
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      // props.history.push(redirect);
      alert ("Account created successfully")
      navigate("/");
    }
  }, [navigate, userInfo]);
  return (
    <Container>
      <Wrapper>
        {showAlert && <Alert type="danger" title={error} />}
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={submitHandler}>
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            placeholder="Username"
          />
          {/* <Input placeholder="last name" /> */}
          {/* <Input  placeholder="username (optional)" /> */}
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Email"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
          />
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            required
            placeholder="Confirm password"
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Hold..." : "REGISTER"}
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: #ffa6d5; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;

  padding: 20px;
  border-radius: 20px;
  background-color:#FDB8C0 ;
  box-shadow: 1px 4px 17px #ffa6d5;
  @media screen and (max-width: 600px) {
    width: 75%;
  }
  @media screen and (min-width: 900px) {
    width: 39%;
  }
  @media screen and (min-width: 1100px) {
    width: 28%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  //   flex: 1;
  min-width: 40%;
  margin: 10px 5px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  margin: auto;
  margin-top: 9px;
  border-radius: 25px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  background-color: black;
  &:hover {
    //   opacity:0.8;
    //   background:#FFA6D5;
    color: #082032;
  }
  color: white;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

export default Register;
