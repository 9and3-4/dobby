// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// // 맨아래
// const PostWrapper = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   overflow: hidden;

//   @media (max-width: 768px) {
//     min-width: 600px;
//   }
// `;

// // 그 위에 테이블 생성
// const Postbox = styled.table`
//   width: 100%;
//   border-collapse: collapse; // 테이블 셀 사이의 간격을 없앰
//   text-align: center;
//   tbody tr:hover {
//     background-color: var(--RED); // 마우스 올리면 빨간색 배경이 나타남
//     color: white;
//   }
// `;

// // 테이블 제목(머리) 셀
// const HeaderCell = styled.th`
//   padding: 15px;
//   border-collapse: separate;
//   border-spacing: 10px;
// `;

// // 테이블 머리
// const TableHeader = styled.thead`
//   border-top: 2px solid var(--RED);
//   border-bottom: 1px solid var(--RED);
// `;

// // 테이블 행
// const TableRow = styled.tr`
//   border-bottom: 1px solid var(--RED);
// `;

// // 테이블 셀
// const TableCell = styled.td`
//   padding: 16px;
//   &.title {
//     text-align: start;
//   }
// `;

// // 제목 누르면 링크 연결
// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
// `;

// const PostList = (boardItem) => {
//   // 백 연결해서 게시판 정보 끌고 오기

//   return (
//     // 배열에 항목이 하나 이상 존재하면 조건문 결과 TRUE
//     <>
//       <PostWrapper>
//         <Postbox>
//           <TableHeader>
//             <TableRow>
//               <HeaderCell>번호</HeaderCell>
//               <HeaderCell>제목</HeaderCell>
//               <HeaderCell>작성자</HeaderCell>
//               <HeaderCell>작성일</HeaderCell>
//               <HeaderCell>조회수</HeaderCell>
//               <HeaderCell>♥</HeaderCell>
//             </TableRow>
//           </TableHeader>
//           <tbody>
//             {boardItem.map((item, index) => (
//               <TableRow key={index}>
//                 <TableCell className="number">{item.postNum}</TableCell>
//                 <TableCell className="title">
//                   <StyledLink to={`/post/${item.postNum}`}>
//                     {item.title}
//                   </StyledLink>
//                 </TableCell>
//                 <TableCell className="nickname">{item.nickname}</TableCell>
//                 <TableCell className="wirtedate">{item.writeDate}</TableCell>
//                 <TableCell className="viewcount">{item.viewCount}</TableCell>
//                 <TableCell className="likecount">{item.likeCount}</TableCell>
//               </TableRow>
//             ))}
//             ;
//           </tbody>
//         </Postbox>
//       </PostWrapper>
//     </>
//   );
// };

// export default PostList;

// 2번 대안

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
const PostList = ({ boardName, title, resultData }) => {
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
            <HeaderCell>POST ID</HeaderCell>
            <HeaderCell>제목</HeaderCell>
            <HeaderCell>작성자</HeaderCell>
            <HeaderCell>작성일</HeaderCell>
            <HeaderCell>조회수</HeaderCell>
            <HeaderCell>♡</HeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {boardItem.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="postid">{item.postID}</TableCell>
              <TableCell className="title">{item.title}</TableCell>
              <StyledLink to={`/post/${item.postID}`}>{item.title}</StyledLink>
              <TableCell className="nickname">{item.nickname}</TableCell>
              <TableCell className="writeDate">{item.writeDate}</TableCell>
              <TableCell className="viewCound">{item.viewCount}</TableCell>
              <TableCell className="likeCound">{item.likeCound}</TableCell>
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

export default PostList;
