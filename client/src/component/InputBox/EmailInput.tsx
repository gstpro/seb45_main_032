import React, { useState } from "react";
import { styled } from "styled-components";

interface EmailInputProps {
  email?: string;
  setEmail: (email: string) => void;
  setValidEmail?: (isValidEmail: boolean) => void;
  setDuplicate?: (isDuplicate: boolean) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({
  email,
  setEmail,
  setValidEmail,
  setDuplicate,
}) => {
  const [isValid, setValid] = useState(false);

  const validateEmail = (email: any) => {
    // 이메일 유효성을 검사하는 정규 표현식
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const emailHdr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
    if (setValidEmail && setDuplicate) {
      setValidEmail(false);
      setDuplicate(false);
    }
    if (validateEmail(email)) {
      setValid(true);
      if (setValidEmail) {
        setValidEmail(true);
      }
    } else {
      setValid(false);
      if (setValidEmail && setDuplicate) {
        setValidEmail(false);
        setDuplicate(false);
      }
    }
  };

  return (
    <EIContainer>
      <InputBox
        type="email"
        placeholder="email"
        onChange={e => emailHdr(e)}
      ></InputBox>
      {isValid ? (
        <InputMsg style={{ color: "#279eff" }}>
          유효한 email형식 입니다.
        </InputMsg>
      ) : (
        <InputMsg style={{ color: "#ff3030" }}>
          email형식으로 작성 및 체크를 누르세요
        </InputMsg>
      )}
    </EIContainer>
  );
};

export default EmailInput;

export const EIContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 190px;
`;

export const InputBox = styled.input`
  height: 31px;
  border: 1px, inset, #595959;
  border-radius: 4px;
  padding-left: 10px;
`;

export const InputMsg = styled.label`
  margin-top: 4px;
  color: #279eff;
  font-size: 10px;
  margin-bottom: 6px;
`;
