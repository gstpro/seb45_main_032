import React from "react";
import { styled } from "styled-components";

interface EmailInputProps {
  setEmail: (email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ setEmail }) => {
  const emailHdr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <EIContainer>
      <InputBox
        type="email"
        placeholder="email"
        onChange={e => emailHdr(e)}
      ></InputBox>
      <InputMsg>email을 입력하세요</InputMsg>
    </EIContainer>
  );
};

export default EmailInput;

export const EIContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 240px;
`;

export const InputBox = styled.input`
  height: 31px;
  border: 1px, inset, #595959;
  border-radius: 4px;
  padding-left: 10px;
`;

export const InputMsg = styled.label`
  color: #279eff;
  font-size: 10px;
`;
