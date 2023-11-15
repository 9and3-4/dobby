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
  background-color: ${(props) =>
    props.isEnabled === "inactive"
      ? "#fdffcb"
      : props.isEnabled === "quit"
      ? "#bbb"
      : "transparent"};
`;

const TableRow = styled.tr`
  background-color: ${(props) => (props.isHovered ? "#eee" : "transparent")};
  color: ${(props) => (props.isHovered ? "#ed342e" : "inherit")};
  cursor: pointer;

  ${(props) => {
    if (props.isActive === 0) {
      return `
        background-color: #fdffcb;
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

const AdminAdList = () => {
  const [boardList, setBoardList] = useState([]);
  const [selectedAdvertisement, setSelectedAdvertisement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredRow, setHoveredRow] = useState(null);

  const fetchBoardList = async () => {
    try {
      const response = await AxiosApi.managerAdListInfoGet();
      console.log(response);
      setBoardList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

  const headers = [
    "advertisementID",
    "companyId",
    "회사명",
    "이미지",
    "시작날짜",
    "종료날짜",
    "광고 등록비",
    "isEnabled",
  ];

  const handleRowClick = (board) => {
    setSelectedAdvertisement(board);
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
    setSelectedAdvertisement(null);
  };

  const handleManageState = async (state) => {
    await AxiosApi.manageAdListState(
      state,
      selectedAdvertisement.advertisementID
    );
    fetchBoardList(); // 상태가 변경될 때마다 데이터 다시 불러오기
    setIsModalOpen(false);
  };

  return (
    <BoardContainer>
      <Title>광고 관리 리스트</Title>
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
                key={board.advertisementID}
                onClick={() => handleRowClick(board)}
                onMouseEnter={() => handleRowMouseEnter(index)}
                onMouseLeave={handleRowMouseLeave}
                isHovered={hoveredRow === index}
                isActive={board.isEnabled}
              >
                <>
                  <BoardTd>{board.advertisementID}</BoardTd>
                  <BoardTd>{board.companyId}</BoardTd>
                  <BoardTd>{board.companyName}</BoardTd>
                  <BoardTd>{board.image}</BoardTd>
                  <BoardTd>{board.startDate}</BoardTd>
                  <BoardTd>{board.endDate}</BoardTd>
                  <BoardTd>{board.adFee}</BoardTd>
                  <BoardTd isEnabled={board.isEnabled}>
                    {board.isEnabled ? "Enabled" : "Disabled"}
                  </BoardTd>
                </>
              </TableRow>
            ))}
        </tbody>
      </BoardTable>
      {isModalOpen && (
        <div>
          <Modal
            open={isModalOpen}
            close={closeModal}
            header={`Advertisement id : ${selectedAdvertisement.advertisementID}`}
          >
            <ModalButtonContainer>
              <ModalButton onClick={() => handleManageState(1)}>
                Enabled
              </ModalButton>
              <ModalButton onClick={() => handleManageState(0)}>
                Disabled
              </ModalButton>
            </ModalButtonContainer>
          </Modal>
        </div>
      )}
    </BoardContainer>
  );
};

export default AdminAdList;
