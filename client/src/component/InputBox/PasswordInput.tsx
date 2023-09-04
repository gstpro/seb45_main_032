import React from "react";
import { styled } from "styled-components";

interface PasswordInputProps {
  setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
  const emailHdr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <PwContainer>
      <PwInput
        type="password"
        placeholder="비밀번호"
        onChange={e => emailHdr(e)}
      ></PwInput>
      <InputMsg>비밀번호를 입력하세요</InputMsg>
    </PwContainer>
  );
};
export default PasswordInput;

export const PwContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 240px;
`;

export const PwInput = styled.input`
  height: 31px;
  border: 1px, inset, #595959;
  border-radius: 4px;
  padding-left: 10px;
`;

export const InputMsg = styled.label`
  color: #279eff;
  margin-top: 4px;
  font-size: 10px;
`;
