import React from "react";
import { styled } from "styled-components";

const TestPage = () => {
  const data = localStorage.getItem("nickName");
  const data2: any = localStorage.getItem("profileImage");
  const data3 = localStorage.getItem("accessToken");
  const data4 = localStorage.getItem("refreshToken");
  console.log(data);
  console.log(data2);
  console.log(data3);
  console.log(data4);

  return (
    <TCtn>
      <img
        style={{ height: "100px", width: "100px", backgroundColor: "red" }}
        src={data2}
      ></img>
    </TCtn>
  );
};

export default TestPage;

export const TCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TcRe = styled.div`
  display: flex;
`;
