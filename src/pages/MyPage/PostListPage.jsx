// import { useEffect, useState } from "react";
// import boardAxiosApi from "../api/BoardAxiosApi";
// import styled from "styled-components";
// import Pages from "../components/Board/Paginations";
// import BoardWriteButton from "../components/Board/BoardWriteButton";
// import { useParams } from "react-router-dom";
// import PostList from "../../components/Mypage/Post/PostList";

// const BoardName = styled.div`
//   text-align: center;
//   font-size: 2.2rem;
//   font-weight: bold;
//   padding: 90px 0px 10px 0px;

//   @media (max-width: 768px) {
//     text-align: center;
//     margin: 30px 0 10px 0;
//     padding: 10px 0;
//     font-size: 1.6rem;
//   }
// `;

// const WriteButtonWrapper = styled.div`
//   text-align: right;
//   padding-top: 30px;
//   margin-right: 190px;

//   @media (max-width: 400px) {
//     margin-right: 40px;
//   }
// `;

// const BoardPage = ({ boardName, boardNum }) => {
//   const { pageNum } = useParams();
//   const [resultData, setResultData] = useState(null);
//   const [keyword, setKeyword] = useState("");

//   const handleSetResultData = (data) => {
//     setResultData(data);
//   };
//   const handleSetKeyword = (newKeyword) => {
//     setKeyword(newKeyword);
//   };

//   const getBoardName = (boardName) => {
//     switch (boardName) {
//       case "Information":
//         return "정보 공유";
//       case "QnA":
//         return "Q&A";
//       case "Worker":
//         return "직장인";
//       case "Best":
//         return "BEST";
//       default:
//         return boardName;
//     }
//   };

//   // 정보공유에서 추천수 100개인 글 베스트 게시판으로 이동
//   useEffect(() => {
//     if (boardName === "Best") {
//       boardAxiosApi.moveBestBoard();
//     }
//   }, [boardName]);

//   return (
//     <>
//       <BoardName>{getBoardName(boardName)}</BoardName>
//       <PostList
//         boardName={boardName.toLowerCase()}
//         pageNum={pageNum}
//         resultData={resultData}
//       />
//       <WriteButtonWrapper>
//         <BoardWriteButton />
//       </WriteButtonWrapper>
//       {resultData && (
//         <Pages
//           boardNum={boardNum}
//           path={`/${boardName.toLowerCase()}`}
//           keyword={keyword}
//           resultData={resultData}
//         />
//       )}
//       {!resultData && (
//         <Pages boardNum={boardNum} path={`/${boardName.toLowerCase()}`} />
//       )}
//     </>
//   );
// };

// export default BoardPage;

// 2번 대안

import React from "react";
import Profile from "../../components/Mypage/profile/Profile";
import PostList from "../../components/Mypage/Post/PostList";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;
`;

const Maintextbox = styled.div`
  width: 150px;
  height: 20px;
`;
const Maintext = styled.p`
  font-size: 25px;
  color: var(--RED);
  font-weight: bold;
`;
const Mainbox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostListbox = styled.div`
  display: flex;
  padding-top: 70px;
`;

const PostListPage = () => {
  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
        </ProfileBox>
        <Maintextbox>
          <Maintext>MY POST</Maintext>
        </Maintextbox>
        <Mainbox>
          <PostListbox>
            <PostList />
          </PostListbox>
        </Mainbox>
      </Container>
    </>
  );
};
export default PostListPage;
