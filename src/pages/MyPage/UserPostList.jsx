// 초기에 만든것. 참고용. 삭제예정

import React from "react";
import styled from "styled-components";
import Profile from "../../components/Mypage/profile/Profile";

const Container = styled.div`
  display: flex;
  height: 800px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// 프로필 옆 작성글 맨 아래 깔림
const Board = styled.div`
  /* border: 2px solid red; */
  width: 75%;
  margin: 0 auto;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;

  @media only screen and (max-width: 768px) {
  }
`;

const Title = styled.text`
  font-size: 25px;
  color: var(--RED);
  font-weight: bold;
  padding-bottom: 30px;
`;

const TableHeader = styled.thead`
  border-top: 1px solid var(--RED);
  border-bottom: 1px solid var(--RED);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--RED);
  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  &.title {
    text-align: start;
  }
`;

const HeaderCell = styled.th`
  padding: 15px;
  color: var(--RED);
`;

const UserPostList = () => {
  return (
    <>
      <Container>
        <Profilebox>
          <Profile />
        </Profilebox>
        <Board>
          <Title>MY POST</Title>
          <TableHeader>
            <TableRow>
              <HeaderCell>Post ID</HeaderCell>
              <HeaderCell>제목</HeaderCell>
              <HeaderCell>작성자</HeaderCell>
              <HeaderCell>날짜</HeaderCell>
              <HeaderCell>조회수</HeaderCell>
              <HeaderCell>♥</HeaderCell>
            </TableRow>
          </TableHeader>
          <TableRow>
            <HeaderCell>5</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♥</HeaderCell>
          </TableRow>
          <TableRow>
            <HeaderCell>4</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♥</HeaderCell>
          </TableRow>
          <TableRow>
            <HeaderCell>3</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♥</HeaderCell>
          </TableRow>
          <TableRow>
            <HeaderCell>2</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♥</HeaderCell>
          </TableRow>
          <TableRow>
            <HeaderCell>1</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>날짜</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♥</HeaderCell>
          </TableRow>
        </Board>
      </Container>
    </>
  );
};

export default UserPostList;
