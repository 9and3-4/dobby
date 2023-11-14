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

const TableRow = styled.tr`
  background-color: ${(props) => (props.isHovered ? "#eee" : "transparent")};
  color: ${(props) => (props.isHovered ? "#ed342e" : "inherit")};
  cursor: pointer;

  ${(props) => {
    if (props.isActive === "inactive") {
      return `
        background-color: #fdffcb;
      `;
    } else if (props.isActive === "quit") {
      return `
        background-color: #bbb;
      `;
    }
    return "";
  }}
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
  //   const [currentType, setCurrentType] = useState("user");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  const fetchBoardList = async () => {
    try {
      const response = await AxiosApi.managerCompanyInfoGet(); // jobposting api
      setBoardList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     fetchBoardList();
  //   }, [currentType]);

  const headers = [
    "id",
    "COMPANY_ID",
    "TITLE",
    "DESCRIPTION",
    "QUALIFICATION",
    "DEADLINE",
    "IMAGE",
    "ISENABLED",
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
    setSelectedUser(null);
  };

  const handleManageState = async (state) => {
    await AxiosApi.manageState(state, selectedUser);
    fetchBoardList(); // 상태가 변경될 때마다 데이터 다시 불러오기
    setIsModalOpen(false);
  };

  return (
    <BoardContainer>
      <Title>채용 공고 관리 리스트</Title>
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
                isActive={board.isActive} // 추가된 부분: isActive props 전달
              >
                {
                  <>
                    <BoardTd>{board.id}</BoardTd>
                    <BoardTd>{board.companyId}</BoardTd>
                    <BoardTd>{board.role}</BoardTd>
                    <BoardTd>
                      {board.email && board.email.replace(/\/$/, "")}
                    </BoardTd>
                    <BoardTd>{board.password}</BoardTd>
                    <BoardTd>{board.companyName}</BoardTd>
                    <BoardTd>{board.ceo}</BoardTd>
                    <BoardTd>{board.customerContact}</BoardTd>
                    <BoardTd>{board.businessCategory}</BoardTd>
                    <BoardTd>{board.sizeScale}</BoardTd>
                    <BoardTd>
                      {board.companyUrl && board.companyUrl.replace(/\/$/, "")}
                    </BoardTd>
                    <BoardTd>{board.isActive}</BoardTd>
                  </>
                }
              </TableRow>
            ))}
        </tbody>
      </BoardTable>
      {isModalOpen && (
        <div>
          <Modal
            open={isModalOpen}
            close={closeModal}
            header={`customer id : ${selectedUser}`}
          >
            <ModalButtonContainer>
              <ModalButton onClick={() => handleManageState("enabled")}>
                enabled
              </ModalButton>
              <ModalButton onClick={() => handleManageState("disabled")}>
                disabled
              </ModalButton>
            </ModalButtonContainer>
          </Modal>
        </div>
      )}
    </BoardContainer>
  );
};

export default AdminBoardList;
