import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";

const BoardContainer = styled.div`
  padding: 0 30px;
  position: relative;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const BoardTh = styled.th`
  background-color: #ed342e;
  color: white;
  padding: 15px;
  font-weight: bold;
  text-align: left;
`;

const BoardTd = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  margin: 0 10px;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#ed342e" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  cursor: pointer;
`;

const AdminBoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [currentType, setCurrentType] = useState("user");

  const fetchBoardList = async () => {
    try {
      let response;
      if (currentType === "user") {
        response = await AxiosApi.managerUserInfoGet();
      } else {
        response = await AxiosApi.managerCompanyInfoGet();
      }
      console.log(response.data);
      setBoardList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, [currentType]);

  return (
    <BoardContainer>
      <Title>회원 정보 리스트</Title>
      <ButtonContainer>
        <ToggleButton
          onClick={() => setCurrentType("user")}
          active={currentType === "user"}
        >
          개인회원
        </ToggleButton>
        <ToggleButton
          onClick={() => setCurrentType("company")}
          active={currentType === "company"}
        >
          기업회원
        </ToggleButton>
      </ButtonContainer>

      <BoardTable>
        <thead>
          <tr>
            <BoardTh>
              {currentType === "user"
                ? ["Role", "E-mail", "닉네임", "이름", "Password", "상태"]
                : [
                    "업종",
                    "대표",
                    "기업명",
                    "홈페이지",
                    "전화번호",
                    "E-mail",
                    "상태",
                    "Password",
                    "Role",
                    "규모",
                  ]}
            </BoardTh>
          </tr>
        </thead>
        <tbody>
          {boardList &&
            boardList.map((board) => (
              <tr key={board.id}>
                {currentType === "user" ? (
                  <>
                    <BoardTd>{board.role}</BoardTd>
                    <BoardTd>{board.email}</BoardTd>
                    <BoardTd>{board.nickName}</BoardTd>
                    <BoardTd>{board.name}</BoardTd>
                    <BoardTd>{board.password}</BoardTd>
                    <BoardTd>{board.isActive}</BoardTd>
                  </>
                ) : (
                  <>
                    <BoardTd>{board.businessCategory}</BoardTd>
                    <BoardTd>{board.ceo}</BoardTd>
                    <BoardTd>{board.companyName}</BoardTd>
                    <BoardTd>{board.companyUrl}</BoardTd>
                    <BoardTd>{board.customerContact}</BoardTd>
                    <BoardTd>{board.email}</BoardTd>
                    <BoardTd>{board.isActive}</BoardTd>
                    <BoardTd>{board.password}</BoardTd>
                    <BoardTd>{board.role}</BoardTd>
                    <BoardTd>{board.sizeScale}</BoardTd>
                  </>
                )}
              </tr>
            ))}
        </tbody>
      </BoardTable>
    </BoardContainer>
  );
};

export default AdminBoardList;
