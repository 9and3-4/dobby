// Layout.js

import React from "react";
import Header from "./Header"; // 헤더 컴포넌트 불러오기
import Footer from "./Footer"; // 푸터 컴포넌트 불러오기
import { Outlet } from "react-router-dom";
import { Wrapper } from "./Styles";

const Layout = () => (
  <Wrapper>
    <Header /> {/* 헤더 표시 */}
    <Outlet />
    <Footer /> {/* 푸터 표시 */}
  </Wrapper>
);

export default Layout;
