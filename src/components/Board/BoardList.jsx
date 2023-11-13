import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import boardAxiosApi from "../../api/BoardAxiosApi";
import Categories from "../../components/Board/Categories";

const BoardContainer = styled.div`
  padding: 30px;
  position: flex;
  /* width: 1000px;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  } */
`;

const Title = styled.h1`
  color: #999;
  text-align: center;
  min-width: 80px;
  width: 80px;
  margin-right: 20px;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    min-width: 60px;
    font-size: 0.8rem;
  }
`;

const BoardUl = styled.ul`
  list-style-type: none;
  padding: 5% 10px;
`;

const BoardLi = styled.li`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex; // 내부 요소들을 flex로 배치합니다.
  align-items: center; // 세로 중앙 정렬
  /* width: 1000px; */
`;

const BoardTitle = styled.h2`
  font-size: 1.4em;
  color: #ed342e;
  margin: 0 0 10px;
`;

const BoardContent = styled.p`
  color: #444;
  font-size: 1em;
`;

const BoardDate = styled.p`
  color: #777;
  font-size: 0.8em;
  text-align: right;
`;

const BoardContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 10px;
  width: 1000px;
  @media screen and (max-width: 768px) {
    min-width: 768px;
    overflow-x: auto;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserId = styled.span`
  color: #777;
  /* font-style: italic; */
  font-size: 11px;
`;

// const WriteButton = styled.button`
//   position: fixed; // 버튼을 부모 컨테이너에 대해 절대적 위치로 설정
//   right: 50px; // 오른쪽에서 10px 떨어진 위치에
//   bottom: 20px; // 하단에서 10px 떨어진 위치에
//   z-index: 10;
//   width: 60px; // 버튼의 크기를 정사각형으로 설정
//   height: 60px; // 버튼의 크기를 정사각형으로 설정
//   border-radius: 50%; // 동그란 모양으로 만들기 위해 반지름을 50%로 설정
//   display: flex; // Flexbox 레이아웃 사용
//   justify-content: center; // 가로 중앙 정렬
//   align-items: center; // 세로 중앙 정렬
//   background-color: #ed342e; // 트위터 색상
//   color: white;
//   font-size: 30px; // 플러스 기호 크기
//   line-height: 1; // 기본 라인 높이 제거
//   border: none; // 기본 테두리 제거
//   cursor: pointer;
//   outline: none; // 클릭 시 테두리 제거

//   &:hover {
//     background-color: #ed342e; // 호버 시 배경색 변경
//   }

//   &:before {
//     // 가상 요소로 플러스 기호 생성
//     content: "+";
//   }
// `;

function BoardList() {
  const [boardList, setBoardList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setSelectedCategory(category), []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoardList = async () => {
      try {
        const rsp = await boardAxiosApi.boardList();
        console.log(rsp.data);
        setBoardList(rsp.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finally");
      }
    };
    fetchBoardList();
  }, []);

  // // 글쓰기 버튼 클릭 시
  // const handleWriteClick = () => {
  //   navigate("/boardWrite");
  // };

  // 카테고리 선택 시
  const handleCategorySelect = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  // 글 상세보기 버튼 클릭 시
  const handleDetailClick = (id) => {
    console.log("상세보기 id : ", id);
    navigate(`/BoardDetailPage/${id}`);
  };

  return (
    <BoardContainer>
      {/* <Categories category={selectedCategory} onSelect={handleCategorySelect} /> */}
      <Categories onSelect={handleCategorySelect} category={selectedCategory} />
      {/* <p>선택된 카테고리 : {selectedCategory}</p> */}
      {/* <p>선택된 카테고리 : {board.sub}</p> */}
      <BoardUl>
        {boardList.length > 0 &&
          boardList
            .filter((board) =>
              selectedCategory ? board.major === selectedCategory : true
            )
            .map((board) => (
              <BoardLi
                key={board.boardId}
                onClick={() => handleDetailClick(board.boardId)}
              >
                <Title>{board.sub}</Title>
                <BoardContentWrapper>
                  <BoardHeader>
                    <BoardTitle>{board.title}</BoardTitle>
                    <UserId>{board.boardId}</UserId>
                  </BoardHeader>
                  {/* <BoardContent>{board.content}</BoardContent> */}
                  <BoardDate>{board.regDate}</BoardDate>
                </BoardContentWrapper>
              </BoardLi>
            ))}
      </BoardUl>
      {/* <WriteButton onClick={handleWriteClick}></WriteButton> */}
    </BoardContainer>
  );
}

export default BoardList;
