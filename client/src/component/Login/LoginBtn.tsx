import React from "react";
import { styled } from "styled-components";

interface LoginBtnProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ onClick }) => {
  return <LIBtn onClick={onClick}>로그인</LIBtn>;
};

export default LoginBtn;

export const LIBtn = styled.button`
  background-color: #279eff;
  justify-content: center;
  color: white;
  border: 0px;
`;
