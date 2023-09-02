import React from "react";
import LoginForm from "./LoginForm";
import PetTalkLogo from "./PetTalkLogo";
import { styled } from "styled-components";

const Login = () => {
  return (
    <LoginContainer>
      <PetTalkLogo />
      <LoginForm />
    </LoginContainer>
  );
};

export default Login;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 226px;
`;
