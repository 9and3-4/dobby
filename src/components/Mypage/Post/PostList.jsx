import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 맨아래
const PostWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    min-width: 600px;
  }
`;

// 그 위에 테이블 생성
const Postbox = styled.table`
  width: 100%;
  border-collapse: collapse; // 테이블 셀 사이의 간격을 없앰
  text-align: center;
  tbody tr:hover {
    background-color: var(--RED); // 마우스 올리면 빨간색 배경이 나타남
    color: white;
  }
`;

// 테이블 제목(머리) 셀
const HeaderCell = styled.th`
  padding: 15px;
  border-collapse: separate;
  border-spacing: 10px;
`;

// 테이블 머리
const TableHeader = styled.thead`
  border-top: 2px solid var(--RED);
  border-bottom: 1px solid var(--RED);
`;

// 테이블 행
const TableRow = styled.tr`
  border-bottom: 1px solid var(--RED);
`;

// 테이블 셀
const TableCell = styled.td`
  padding: 16px;
  &.title {
    text-align: start;
  }
`;

// 제목 누르면 링크 연결
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostList = (boardItem) => {
  // 백 연결해서 게시판 정보 끌고 오기

  return (
    // 배열에 항목이 하나 이상 존재하면 조건문 결과 TRUE
    <>
      <PostWrapper>
        <Postbox>
          <TableHeader>
            <TableRow>
              <HeaderCell>번호</HeaderCell>
              <HeaderCell>제목</HeaderCell>
              <HeaderCell>작성자</HeaderCell>
              <HeaderCell>작성일</HeaderCell>
              <HeaderCell>조회수</HeaderCell>
              <HeaderCell>♥</HeaderCell>
            </TableRow>
          </TableHeader>
          <tbody>
            {boardItem.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="number">{item.postNum}</TableCell>
                <TableCell className="title">
                  <StyledLink to={`/post/${item.postNum}`}>
                    {item.title}
                  </StyledLink>
                </TableCell>
                <TableCell className="nickname">{item.nickname}</TableCell>
                <TableCell className="wirtedate">{item.writeDate}</TableCell>
                <TableCell className="viewcount">{item.viewCount}</TableCell>
                <TableCell className="likecount">{item.likeCount}</TableCell>
              </TableRow>
            ))}
            ;
          </tbody>
        </Postbox>
      </PostWrapper>
    </>
  );
};

export default PostList;
