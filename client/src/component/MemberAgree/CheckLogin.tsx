import React from "react";
import { styled } from "styled-components";

const FooterLogin = () => {
  return (
    <LoginCtn>
      <LoginSpan>계정이 있으시다면?</LoginSpan>
      <LoginLink>로그인</LoginLink>
    </LoginCtn>
  );
};

export default FooterLogin;

export const LoginCtn = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const LoginSpan = styled.span`
  font-size: 12px;
  margin-right: 4px;
`;
//현재 여기 div로 해놨는데 나중에 로그인페이지와 merge하면 Link로 바꿔야됨.
export const LoginLink = styled.div`
  font-size: 12px;
  color: #595959;
`;
