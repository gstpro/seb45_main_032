import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import petalkText from "../../asset/LogoAsset/petalk-text.png";
import global from "../../Data/global.json";
import axios from "axios";

const api = process.env.REACT_APP_DB_HOST;

const menuList = [
  { text: "Sign Up", link: "/memberAgree" },
  { text: "Login", link: "/login" },
];

const Header = () => {
  const token = window.localStorage.getItem("accessToken");

  const logoutHdr = async () => {
    try {
      const res = await axios.post(`${api}/members/logout`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`, // 토큰을 헤더에 추가
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });
      console.log(res);
      window.localStorage.clear();
      window.location.href = "/";
    } catch (error) {
      console.log("로그아웃에러", error);
    }
  };

  return (
    <HeaderContainer>
      <LogoLink to={"/"}>
        <HeadLogo src={petalkText} alt="petTalk"></HeadLogo>
      </LogoLink>
      <HeaderBtnContainer>
        {token ? (
          menuList.map(el => (
            <MenuLink to={el.link} key={el.text}>
              {el.text}
            </MenuLink>
          ))
        ) : (
          <div
            style={{
              marginRight: `${global.Spacing[24].value}px`,
              color: `${global.Primary.value}`,
            }}
            onClick={() => logoutHdr()}
          >
            Logout
          </div>
        )}
      </HeaderBtnContainer>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  top: 0;
  position: sticky;
  min-width: 320px;
  max-width: 500px;
  box-shadow: 0px 10px 34px #272c5614;
  background-color: white;
`;
export const LogoLink = styled(Link)`
  margin-left: 20px;
`;

export const HeadLogo = styled.img`
  height: 28px;
`;

export const HeaderBtnContainer = styled.div`
  display: flex;
  align-items: end;
  padding-right: 20px;
`;

export const MenuLink = styled(Link)`
  margin-right: ${global.Spacing[24].value}px;
  color: ${global.Primary.value};
`;
