import React, { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import Modal from "../../util/Modal";

const BoardContainer = styled.div`
  padding: 0 30px;
  position: relative;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #ed342e;
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
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
  justify-content: initial;
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  margin-right: 10px;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#ed342e" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  cursor: pointer;
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.isHovered ? "#eee" : "transparent")};
  color: ${(props) => (props.isHovered ? "#ed342e" : "inherit")};
  cursor: pointer;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalButton = styled.button`
  margin: 0 20px;
  width: 100px;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#ed342e" : "#ddd")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#ed342e")};
    color: ${(props) => (props.active ? "#ed342e" : "white")};
  }
`;

const AdminBoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const [currentType, setCurrentType] = useState("user");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  const fetchBoardList = async () => {
    try {
      const response =
        currentType === "user"
          ? await AxiosApi.managerUserInfoGet()
          : await AxiosApi.managerCompanyInfoGet();

      console.log(response.data);
      setBoardList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, [currentType]);

  const headers =
    currentType === "user"
      ? ["id", "Role", "E-mail", "Password", "닉네임", "이름", "상태"]
      : [
          "id",
          "company_id",
          "Role",
          "E-mail",
          "Password",
          "회사명",
          "대표",
          "전화번호",
          "업종",
          "회사규모",
          "홈페이지",
          "상태",
        ];

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleRowMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleRowMouseLeave = () => {
    setHoveredRow(null);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            {headers.map((header, index) => (
              <BoardTh key={index}>{header}</BoardTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {boardList &&
            boardList.map((board, index) => (
              <TableRow
                key={board.id}
                onClick={() => handleRowClick(board.id)}
                onMouseEnter={() => handleRowMouseEnter(index)}
                onMouseLeave={handleRowMouseLeave}
                isHovered={hoveredRow === index}
              >
                {currentType === "user" ? (
                  <>
                    <BoardTd>{board.id}</BoardTd>
                    <BoardTd>{board.role}</BoardTd>
                    <BoardTd>{board.email}</BoardTd>
                    <BoardTd>{board.password}</BoardTd>
                    <BoardTd>{board.nickName}</BoardTd>
                    <BoardTd>{board.name}</BoardTd>
                    <BoardTd>{board.isActive}</BoardTd>
                  </>
                ) : (
                  <>
                    <BoardTd>{board.id}</BoardTd>
                    <BoardTd>{board.companyId}</BoardTd>
                    <BoardTd>{board.role}</BoardTd>
                    <BoardTd>{board.email}</BoardTd>
                    <BoardTd>{board.password}</BoardTd>
                    <BoardTd>{board.companyName}</BoardTd>
                    <BoardTd>{board.ceo}</BoardTd>
                    <BoardTd>{board.customerContact}</BoardTd>
                    <BoardTd>{board.businessCategory}</BoardTd>
                    <BoardTd>{board.sizeScale}</BoardTd>
                    <BoardTd>{board.companyUrl}</BoardTd>
                    <BoardTd>{board.isActive}</BoardTd>
                  </>
                )}
              </TableRow>
            ))}
        </tbody>
      </BoardTable>
      {/* 모달 창 구현 */}
      {isModalOpen && (
        <div>
          <Modal
            open={isModalOpen}
            close={closeModal}
            header={`customer id : ${selectedUser}`}
          >
            <ModalButtonContainer>
              <ModalButton>active</ModalButton> {/* api 요청 추가 */}
              <ModalButton>inactive</ModalButton>
              <ModalButton>quit</ModalButton>
            </ModalButtonContainer>
          </Modal>
        </div>
      )}
    </BoardContainer>
  );
};

export default AdminBoardList;
