import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import LargeBtn from "../Button/LargeBtn";

const api = process.env.REACT_APP_DB_HOST;

type FormData = {
  email: string;
  password: string;
};

// type T = {
//   nickName: string;
//   profileImage: string;
//   accessToken: string;
//   refreshToken: string;
// };
const schema = yup.object().shape({
  email: yup
    .string()
    .email("email형식으로 입력하세요")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
      "영문자 숫자조합 8글자 이상입니다.",
    )
    .required("Pw is required"),
});

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginHdr = async (data: FormData) => {
    try {
      const res: any = await axios.post(`${api}/members/login`, data);
      console.log(res.data);
      localStorage.setItem("nickName", res?.nickName);
      localStorage.setItem("profileImage", res?.profileImage);
      localStorage.setItem("refreshToken", res?.refreshToken);
      localStorage.setItem("accessToken", res?.accessToken);
    } catch (e: AxiosError | unknown) {
      if (axios.isAxiosError(e)) {
        setErrorMsg("로그인 정보를 확인하세요");
      }
    }
  };

  return (
    <LoginContainer>
      <LForm onSubmit={handleSubmit(loginHdr)}>
        <InputWrapper>
          <TextInput placeholder="email" {...register("email")} />
          <Span>email을 입력하세요.</Span>
        </InputWrapper>
        <InputWrapper>
          <TextInput
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <Span>비밀번호를 입력하세요.</Span>
        </InputWrapper>
        <div style={{ marginTop: "12px" }}>
          <LargeBtn name={"로그인"} />
        </div>
        <ErrMsg>{errorMsg}</ErrMsg>
        <SignUpLink to={"/memberAgree"}>회원가입</SignUpLink>
      </LForm>
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

export const LForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 240px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 8px;
`;

export const TextInput = styled.input`
  height: 31px;
  width: 100%;
  border: 1px inset #595959;
  border-radius: 4px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const Span = styled.span`
  justify-content: flex-start;
  margin-top: 4px;
  color: #279eff;
  font-size: 10px;
  margin-bottom: 6px;
`;

export const ErrMsg = styled.div`
  justify-content: flex-start;
  margin-top: 4px;
  color: #ff2727;
  font-size: 10px;
  margin-bottom: 6px;
`;

export const SignUpLink = styled(Link)`
  margin-top: 6px;
  font-size: 12px;
  color: #636262;
`;
