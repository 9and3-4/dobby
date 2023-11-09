import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import boardAxiosApi from "../../api/BoardAxiosApi";

const ListWrapper = styled.div`
  width: 75%;
  margin: 5% auto;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 768px) {
    min-width: 600px;
  }
  @media (max-width: 400px) {
    min-width: 300px;
    width: 95%;
  }
`;

const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  tbody tr:hover {
    background-color: #ed342e;
  }
`;

const HeaderCell = styled.th`
  padding: 15px;
  color: var(--RED);
`;

const TableHeader = styled.thead`
  border-top: 1px solid #ed342e;
  border-bottom: 1px solid #ed342e;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 16px;
  &.title {
    text-align: start;
  }
  @media (max-width: 768px) {
    &.view {
      display: none;
    }
  }
  @media (max-width: 400px) {
    &.view {
      display: none;
    }
    &.writedate {
      display: none;
    }
    &.nickname {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ed342e;
`;

// 게시판 이름, 제목, 작성일을 받아 데이터를 관리
const Apply = ({ boardName, title, resultData }) => {
  // 초기값으로 빈 객체 {}를 포함하는 배열 [{}]을 설정
  const [boardItem, setBoardItem] = useState([{}]);

  // 비동기 함수 fetchBoardItems를 정의
  // boardName, title, 및 resultData에 의존성이 있고, 변경될 때 호출
  useEffect(() => {
    const fetchBoardItems = async () => {
      let items = [];
      if (resultData) {
        items = resultData; // 검색결과가 있을 경우 해당 값을 items에 할당
      } else {
        // items = await boardAxiosApi.requestGeneralList(boardName, pageNum);
      }
      setBoardItem(items);
    };
    fetchBoardItems();
  }, [boardName, title, resultData]);

  //   return boardItem.length ? (
  return (
    <ListWrapper>
      <TableBox>
        <TableHeader>
          <TableRow>
            <HeaderCell>회사명</HeaderCell>
            <HeaderCell>포지션</HeaderCell>
            <HeaderCell>작성일</HeaderCell>
            <HeaderCell>진행 상태</HeaderCell>
            <HeaderCell>결과</HeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {boardItem.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="company">{item.company}</TableCell>
              <TableCell className="position">{item.position}</TableCell>
              <TableCell className="writeDate">{item.writeDate}</TableCell>
              <TableCell className="status">{item.status}</TableCell>
              <TableCell className="result">{item.result}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableBox>
    </ListWrapper>
  );
  //   : (
  //     <div style={{ fontSize: "18px", textAlign: "center", padding: "150px" }}>
  //       검색 결과가 없습니다 🥲
  //     </div>
  //   );
};

export default Apply;
