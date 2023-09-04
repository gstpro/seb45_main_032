import React from "react";
import { styled } from "styled-components";
import PetTalkLogo from "../PetTalkLogo/PetTalkLogo";
import MemberAgreeForm from "./MemberAgreeForm";
import FooterLogin from "./CheckLogin";
const MemberAgree = () => {
  return (
    <MAContainer>
      <PetTalkLogo />
      <MemberAgreeForm />
      <FooterLogin />
    </MAContainer>
  );
};

export default MemberAgree;

export const MAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 242px;
`;
