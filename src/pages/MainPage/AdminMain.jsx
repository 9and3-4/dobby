import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBox = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -150px;
`;

const Title = styled.p`
  font-size: 30px;
  display: flex;
  color: var(--RED);
  margin: 20px;
`;

const MenuBtn = styled.button`
  width: 350px;
  background-color: #fff;
  color: #ed342e;
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;
  font-weight: bold;

  &:hover {
    background-color: #ed342e;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

const AdminMain = () => {
  const navigate = useNavigate();
  // 회원정보관리(개인/기업), 게시글 관리, 기업 관리, 광고 관리 바로 가기 4가지 연결

  return (
    <>
      <Container>
        <MainBox>
          <Title>관리자 페이지</Title>
          <Title>메 뉴</Title>
          <MenuBtn>회원 정보 관리(개인/기업)</MenuBtn>
          <MenuBtn>게시글 관리</MenuBtn>
          <MenuBtn>가입 관리</MenuBtn>
          <MenuBtn>광고 관리</MenuBtn>
        </MainBox>
      </Container>
    </>
  );
};

export default AdminMain;
