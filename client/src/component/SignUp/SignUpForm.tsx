import React, { useState } from "react";
import { styled } from "styled-components";
import EmailInput from "../InputBox/EmailInput";
import NickNameInput from "../InputBox/NickNameInput";
import PasswordInput from "../InputBox/PasswordInput";
import PasswordCfInput from "../InputBox/PasswordCfInput";
import ConfirmBtn from "../Button/ConfirmBtn";
import MobileCertify from "./MobileCertify";
import axios, { AxiosError } from "axios";
import { iconImg } from "../../ImageData/IconData";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [passwordCf, setPasswordCf] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [certifyNum, setCertifyNum] = useState("");
  const [isCertify, setCertify] = useState(false);
  const [image, setImage] = useState("");
  const [testFile, setTestFile] = useState({
    email: "",
    nickName: "",
    password: "",
    profileImage: "",
    phone: "",
  });

  const imageHdr = () => {
    const iconId = Math.floor(Math.random() * (18 - 1)) + 1;
    const randomImg = iconImg[iconId].img;
    console.log(iconId);
    setImage(randomImg);
  };

  //인증버튼클릭시 수행 API주소 바꿀것
  const certifyHdr = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(phoneNum);
    try {
      const res = await axios.post("http://localhost:8080/phonecertify", {
        phoneNum: phoneNum,
      });
      console.log(res.data);
      imageHdr();
    } catch (err) {
      console.log("인증 실패");
    }
  };
  //전송버튼 클릭시 수행 api주소 바꿀것.
  const sendHdr = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/send", {
        certifyNum: certifyNum,
      });
      console.log(res.data);
      if (res.data) {
        setCertify(true);
      }
    } catch (err) {
      console.log("인증번호 잘못보냄");
    }
  };
  //확인버튼 클릭시 수행 APi주소 수정!
  const signUpHdr = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = {
        email: email,
        nickName: nickName,
        password: password,
        profileImage: image,
        phone: phoneNum,
      };
      //회원가입 api 주소 확인하고 변경해야함.
      const res = await axios.post("http://localhost:8080/signup", data);
      const successMsg = res.data;
      console.log(successMsg);
      setTestFile(successMsg);
    } catch (error) {
      console.log("형식이 잘못되었거나 알수없는 에러");
      // if (axios.isAxiosError(error)) {
      //   const axiosError = error as AxiosError;
      //   if (axiosError.response) {
      //     console.log("회원가입 정보 확인바람", axiosError.response.data);
      //   } else {
      //     console.error("요청 실패함", axiosError.message);
      //   }
      // } else {
      //   console.error("알수 없는 에러가 발생");
      // }
    }
  };
  return (
    <SignUpFormSection>
      <div>
        <AgreeSpan>이용약관</AgreeSpan>
        <InputSpan>정보입력</InputSpan>
        <DoneSpan>완료</DoneSpan>
      </div>
      <InputCtn>
        <EmailInput setEmail={setEmail} />
        <NickNameInput setNickName={setNickName} />
        <PasswordInput setPassword={setPassword} />
        <PasswordCfInput setPasswordCf={setPasswordCf} />
      </InputCtn>
      <MobileCertify
        certifyHdr={certifyHdr}
        phoneNum={phoneNum}
        setPhoneNum={setPhoneNum}
        setCertifyNum={setCertifyNum}
        certifyNum={certifyNum}
        sendHdr={sendHdr}
      />
      <ConfirmBtn
        onClick={e => signUpHdr(e)}
        isDisable={
          isCertify && email && password && passwordCf && nickName && image
            ? false
            : true
        }
      />
      <img src={testFile.profileImage}></img>
    </SignUpFormSection>
  );
};

export default SignUpForm;

export const SignUpFormSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  width: 239px;
`;
export const AgreeSpan = styled.span`
  font-size: 12px;
  color: #595959;
  margin-right: 5px;
`;

export const InputSpan = styled.span`
  font-size: 12px;
  margin-right: 5px;
`;

export const DoneSpan = styled.span`
  font-size: 12px;
  color: #595959;
`;

export const InputCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 36px;
`;
