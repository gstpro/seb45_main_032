import React, { useState } from "react";
import { styled } from "styled-components";
import EmailInput from "../InputBox/EmailInput";
import PasswordInput from "../InputBox/PasswordInput";
import LoginBtn from "../Button/LoginBtn";
import axios, { AxiosError } from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //로그인버튼 클릭시 수행
  const loginHdr = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/members/login", {
        email: email,
        password: password,
      });
      const token = res.data;
      console.log(token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.log("로그인 정보 확인바람", axiosError.response.data);
        } else {
          console.error("요청 실패함", axiosError.message);
        }
      } else {
        console.error("알수 없는 에러가 발생");
      }
    }
  };
  return (
    <LoginContainer>
      <EmailInput setEmail={setEmail} />
      <PasswordInput setPassword={setPassword} />
      <LoginBtn onClick={e => loginHdr(e)} />
      <SignUpLink>회원가입</SignUpLink>
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
//회원가입 나중에 회원가입페이지 작성시 약관동의페이지로 이동하도록 styled.div 삭제하고 styled(Link)로 교체해야함
export const SignUpLink = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #636262;
`;
