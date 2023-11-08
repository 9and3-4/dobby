import React from "react";
import styled from "styled-components";
import Profile from "../../components/Mypage/profile/Profile";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BtnProfile = styled.button`
  width: 200px;
  background-color: #fff;
  color: #ed342e;
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;

  &:hover {
    background-color: #ed342e;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
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
        <Profile />
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
