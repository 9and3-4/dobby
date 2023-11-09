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

// /* 2번 대안 : 선생님 코드 참고 */

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import AxiosApi from "../../../api/AxiosApi";
// import PostDate from "./PostDate";

// const Container = styled.div`
//   display: flex;
// `;

// const PostUl = styled.ul`
//   list-style-type: none;
// `;

// const PostLi = styled.li`
//   color: var(--RED);
//   display: flex;
// `;

// const PostWrapper = styled.div`
//   display: flex;
//   flex-grow: 1;
//   flex-direction: column;
// `;

// const PostHeader = styled.div`
//   display: flex;
//   flex-grow: 1;
//   justify-content: space-between;
// `;

// const PostId = styled.p`
//   font-size: 13px;
// `;

// const PostTitle = styled.p`
//   font-size: 13px;
//   color: var(--RED);
// `;

// const CustomerId = styled.p`
//   color: var(--RED);
//   font-size: 13px;
// `;

// const PostContent = styled.p`
//   font-size: 13px;
// `;

// const PostView = styled.p`
//   font-size: 13px;
// `;

// const PostWriteDate = styled.p`
//   font-size: 0.8em;
// `;

// const PostList = () => {
//   const [postList, setPostList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const postList = async () => {
//       try {
//         const rsp = await AxiosApi.mypostlist("min123@naver.com");
//         console.log(rsp.data);
//         setPostList(rsp.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         console.log("finally");
//       }
//     };
//     postList();
//   }, []);

//   // 글 상세보기 버튼 클릭 시
//   const detailClick = (id) => {
//     navigate(`/PostDetail/${id}`);
//   };

//   return (
//     <>
//       <Container>
//         <PostUl>
//           {postList &&
//             postList.map((post) => (
//               <PostLi
//                 key={postList.postId}
//                 onClick={() => detailClick(post.postId)}
//               >
//                 <PostWrapper>
//                   <PostHeader>
//                     <PostId>{post.id}</PostId>
//                     <PostTitle>{post.title}</PostTitle>
//                     <CustomerId>{post.nickName}</CustomerId>
//                     <PostContent>{post.content}</PostContent>
//                     <PostWriteDate>
//                       <PostDate date={post.writeDate} />
//                     </PostWriteDate>
//                     <PostView>{post.ViewCount}</PostView>
//                     <PostDate>{post.likeCount}</PostDate>
//                   </PostHeader>
//                 </PostWrapper>
//               </PostLi>
//             ))}
//         </PostUl>
//       </Container>
//     </>
//   );
// };

// export default PostList;

// 2번 대안

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../api/AxiosApi";
import PostDate from "./PostDate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  justify-content: center; /* 수평 가운데 정렬 */

  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
`;

const PostTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  text-align: center;
`;

const TableRow = styled.tr`
  color: var(--RED);
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-top: 1px solid var(--RED);
  border-bottom: 1px solid var(--RED);

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 8px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const rsp = await AxiosApi.mypostlist("min123@naver.com");
        console.log(rsp.data);
        setPostList(rsp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostList();
  }, []);

  const detailClick = (id) => {
    navigate(`/PostDetail/${id}`);
  };

  return (
    <Container>
      <PostTable>
        <TableHead>
          <TableRow>
            <TableHeader>Post ID</TableHeader>
            <TableHeader>제목</TableHeader>
            <TableHeader>작성자</TableHeader>
            <TableHeader>작성일</TableHeader>
            <TableHeader>조회수</TableHeader>
            <TableHeader>♡</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList &&
            postList.map((post) => (
              <TableRow key={post.id} onClick={() => detailClick(post.id)}>
                <TableData>{post.id}</TableData>
                <TableData>{post.title}</TableData>
                <TableData>{post.nickName}</TableData>
                <TableData>
                  <PostDate date={post.writeDate} />
                </TableData>
                <TableData>{post.viewCount}</TableData>
                <TableData>{post.likeCount}</TableData>
              </TableRow>
            ))}
        </TableBody>
      </PostTable>
    </Container>
  );
};

export default PostList;
