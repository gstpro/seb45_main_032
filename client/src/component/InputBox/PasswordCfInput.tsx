import React from "react";
import { styled } from "styled-components";

interface PasswordCfInputProps {
  setPasswordCf: (passwordCf: string) => void;
}

const PasswordCfInput: React.FC<PasswordCfInputProps> = ({ setPasswordCf }) => {
  const pwCfHdr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCf(e.target.value);
  };

  return (
    <PwCfCtn>
      <InputBox
        type="password"
        placeholder="비밀번호 재입력"
        onChange={e => pwCfHdr(e)}
      ></InputBox>
      <InputMsg>비밀번호를 입력하세요</InputMsg>
    </PwCfCtn>
  );
};

export default PasswordCfInput;

export const PwCfCtn = styled.section`
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
  margin-top: 4px;
  font-size: 10px;
`;
