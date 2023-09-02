import React, { useState } from "react";
import { styled } from "styled-components";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginBtn from "./LoginBtn";
import axios, { AxiosError } from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인버튼 클릭시 수행
  const loginHdr = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      const token = res.data;
      console.log(token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.log(axiosError.response.data);
        } else {
          console.error("Request failed:", axiosError.message);
        }
      } else {
        console.error("Unknown error occurred:");
      }
    }
  };
  return (
    <LoginContainer>
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <LoginBtn onClick={e => loginHdr(e)} />
    </LoginContainer>
  );
};

export default LoginForm;

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 240px;
`;
