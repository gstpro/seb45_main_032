import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./page/LoginPage";
import MemberAgreePage from "./page/signup/MemberAgreePage";
import SignUpPage from "./page/SignUpPage";
import SignUpDone from "./component/signup/SignUpDone";
import TestPage from "./page/TestPage";
import Mypage from "./page/Mypage";
import Layout from "./Layout";
import Header from "./component/header/Header";
import Nav from "./component/nav/Nav";
import ChatPage from "./page/ChatPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Body>
          <Container>
            <Header />
            <Layout>
              <Routes>
                <Route path="/chat" element={<ChatPage />} />
                <Route path="/members" element={<Mypage />} />
              </Routes>
            </Layout>
            <Nav />
          </Container>
        </Body>
      </Router>
    </>
  );
}
export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto';
  }
`;
const Body = styled.body`
  width: 100vw;
  margin: 0px;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 500px;
  min-width: 320px;
  min-height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 36px;
`;
