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
        placeholder="password"
        onChange={e => emailHdr(e)}
      ></PwInput>
    </PwContainer>
  );
};
export default PasswordInput;

export const PwContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PwInput = styled.input``;
