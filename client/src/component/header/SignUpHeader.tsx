import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const SignUpHeader = () => {
  return (
    <SignUpLink to={"/memberAgree"}>
      <SignUp>signup</SignUp>
    </SignUpLink>
  );
};

export default SignUpHeader;

export const SignUpLink = styled(Link)`
  padding-right: 20px;
`;

export const SignUp = styled.div`
  color: #279eff;
`;
