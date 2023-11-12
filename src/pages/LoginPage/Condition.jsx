import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #ed342e;
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ListEl = styled.li`
  margin: 35px 30vw;
`;

const CustomButton = styled.button`
  background-color: white;
  color: #ed342e;
  padding: 5px 10px;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  border: 2px solid #ed342e;
  border-radius: 0.35rem;
  cursor: pointer;

  &:hover {
    background-color: #ed342e;
    color: white;
  }
`;

const Term = styled.div`
  margin-top: 20px;
  border: 1px solid #ed342e;
  border-radius: 0.15rem;
  padding: 0 10px;
  overflow-y: auto;
  width: 40vw;
  min-width: 250px;
  height: 150px;
  font-size: 1rem;
`;

const CheckboxInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ed342e;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  margin-left: 0.25rem;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const Checkbox = ({ text, checked, onChange }) => {
  return (
    <StyledLabel>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <StyledP>{text}</StyledP>
    </StyledLabel>
  );
};

const Condition = () => {
  const [allChecked, setAllChecked] = useState(false);
  // const [termsData, setTermsData] = useState({});
  const [term1Checked, setTerm1Checked] = useState(false);
  const [term2Checked, setTerm2Checked] = useState(false);
  const [term3Checked, setTerm3Checked] = useState(false);
  const [term4Checked, setTerm4Checked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModelText] = useState("중복된 아이디 입니다.");
  const location = useLocation();
  const navigate = useNavigate();
  const userType = location.state?.userType;

  const areAllChecked = () =>
    term1Checked && term2Checked && term3Checked && term4Checked;

  const handleNextButtonClick = () => {
    if (areAllChecked()) {
      // console.log("다음으로 버튼이 눌렸습니다.");
      if (userType === "user") {
        navigate("/Signup");
      } else {
        navigate("/CompanySignup");
      }
    } else {
      // 모달
      setModalOpen(true);
      setModelText("모든 약관에 동의해야 합니다.");
      // alert("모든 약관에 동의해야 합니다.");
    }
  };

  const handleAllCheckedChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setTerm1Checked(newCheckedState);
    setTerm2Checked(newCheckedState);
    setTerm3Checked(newCheckedState);
    setTerm4Checked(newCheckedState);
  };

  const handleTerm1CheckedChange = () => {
    setTerm1Checked(!term1Checked);
    setAllChecked(areAllChecked());
  };

  const handleTerm2CheckedChange = () => {
    setTerm2Checked(!term2Checked);
    setAllChecked(areAllChecked());
  };

  const handleTerm3CheckedChange = () => {
    setTerm3Checked(!term3Checked);
    setAllChecked(areAllChecked());
  };

  const handleTerm4CheckedChange = () => {
    setTerm4Checked(!term4Checked);
    setAllChecked(areAllChecked());
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <List>
        <ListEl>
          <Checkbox
            text={"전체 동의하기"}
            checked={allChecked}
            onChange={handleAllCheckedChange}
          />
        </ListEl>
        <ListEl>
          <Checkbox
            text={"9 3/4 이용약관"}
            checked={term1Checked}
            onChange={handleTerm1CheckedChange}
          />
          <Term>안녕하세요</Term>
        </ListEl>
        <ListEl>
          <Checkbox
            text={"[필수]개인정보 수집이용 및 약관"}
            checked={term2Checked}
            onChange={handleTerm2CheckedChange}
          />
          <Term>안녕하세요</Term>
        </ListEl>
        <ListEl>
          <Checkbox
            text={"[선택]개인정보 수집이용 및 약관"}
            checked={term3Checked}
            onChange={handleTerm3CheckedChange}
          />
          <Term>안녕하세요</Term>
        </ListEl>
        {userType === "company" && (
          <ListEl>
            <Checkbox
              text={"단체 회원 이용 시 주의사항에 대한 동의"}
              checked={term4Checked}
              onChange={handleTerm4CheckedChange}
            />
            <Term>안녕하세요</Term>
          </ListEl>
        )}
        <ListEl>
          <CustomButton onClick={handleNextButtonClick}>다음으로</CustomButton>
        </ListEl>
      </List>
      <Modal open={modalOpen} close={closeModal} header="오류">
        {modalText}
      </Modal>
    </>
  );
};

export default Condition;
