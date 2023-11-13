/* 개인 마이페이지 정보 수정 */
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Profile from "../../components/Mypage/profile/Profile";
import BackButtonComponent from "./BackButton";
import AxiosApi from "../../api/AxiosApi";
import Modal from "../../util/Modal";
import { useNavigate, json } from "react-router-dom";
import { Items } from "../../components/signup/SignupComponent";

const Container = styled.div`
  display: flex;
  /* height: 800px; */

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 1500px;
  }
`;

const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;

  @media only screen and (max-width: 768px) {
  }
`;

// 내정보수정 시작
// 맨 하단에 editwrite 깔아줌
const EditWrite = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 50px;
  min-height: 150px;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
  }
`;

// margin-top은 옆 editwrite input창과 줄 맞추기 위해서
const EditWrite2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const MainText = styled.p`
  font-size: 25px;
  color: #ed342e;
  font-weight: bold;
  padding-bottom: 20px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding-right: 25px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: flex;
    /* flex-direction: row; */
    justify-content: flex-end;
    padding-right: 190px;
  }
`;

const InputLabel = styled.label`
  font-size: 15px;
  color: #ed342e;
  margin: 10px;
  padding-top: 7px;
  white-space: nowrap;
`;

const InputField = styled.input`
  width: 200px;
  height: 20px;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #ed342e;
  border-radius: 5px;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
  margin-top: auto;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const UpdateButton = styled.button`
  width: 150px;
  background-color: #ed342e;
  color: white;
  margin: 15px 15px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;

  &:hover {
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;
const Withdraw = styled.button`
  width: 200px;
  background-color: #ed342e;
  color: white;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;
  justify-content: flex-end;

  &:hover {
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

const EditUserMain = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getMember = async () => {
      const res = await AxiosApi.memberGet(
        window.localStorage.getItem("userId")
      );
      console.log("고객 정보 : " + res.data[0]); // 고객 정보 불러오기

      setUserData(res.data[0]);
      console.log("고객 email : " + window.localStorage.getItem("userId"));
    };
    getMember();
  }, []);

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("중복된 아이디 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

  // 오류 메시지
  const [curMessage, setCurMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isCurPw, setIsCurPw] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);

  console.log("userData: " + userData);
  const [userName, setUserName] = useState(""); // 이름
  const NameChange = (e) => {
    setUserName(e.target.value);
    setIsName(true);
  };

  const [nickName, setNickName] = useState(""); // 닉네임
  const nickNameChange = (e) => {
    setNickName(e.target.value);
    setIsNickName(true);
  };

  const [currentPw, setCurrentPw] = useState(""); // 현재 비밀번호
  const currentPwChange = (e) => {
    setCurrentPw(e.target.value);
    console.log(currentPw);
    console.log(window.localStorage.getItem("userPw"));
    if (currentPw !== window.localStorage.getItem("userPw")) {
      setCurMessage("현재 비밀번호와 일치하지 않습니다.");
      setIsCurPw(false);
    } else {
      setCurMessage("현재 비밀번호와 일치합니다.");
      setIsCurPw(true);
    }
  };

  const [newPw, setNewPw] = useState(""); // 새 비밀번호
  const newPwChange = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordNew = e.target.value;
    setNewPw(passwordNew);
    if (!passwordRegex.test(passwordNew)) {
      setPwMessage("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }
  };

  const [newPwCheck, setNewPwCheck] = useState(""); // 새 비밀번호 확인
  const newPwCheckChange = (e) => {
    const passwordCurrent = e.target.value;
    setNewPwCheck(passwordCurrent);
    if (passwordCurrent !== newPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다.");
      setIsConPw(true);
    }
  };

  // 수정하기 버튼 클릭 시
  const onClickBtn = async () => {
    const res2 = await AxiosApi.memberUpdate(
      window.localStorage.getItem("userId"),
      userName,
      nickName,
      newPw
    );
    console.log("res2 : " + res2);
    if (res2) {
      // 팝업
      setModalOpen(true);
      setModalText("회원 정보가 수정되었습니다.");
    } else {
      setModalOpen(true);
      setModalText("회원 정보 수정을 실패했습니다.");
    }
  };

  // 탈퇴하기 버튼 클릭 시
  const onClickBtn2 = async () => {
    const res3 = await AxiosApi.memberDel(
      window.localStorage.getItem("userId")
    );
    if (res3) {
      setModalOpen(true);
      setModalText("회원 탈퇴가 정상적으로 처리되었습니다.");
    } else {
      setModalOpen(true);
      setModalText("회원 탈퇴를 실패하였습니다.");
    }
  };

  return (
    <>
      <Container>
        <Profilebox>
          <Profile />
        </Profilebox>
        <EditWrite>
          <MainText>내 정보 수정</MainText>
          <InputContainer>
            <InputLabel htmlFor="userName">이름</InputLabel>
            <InputField
              id="userName"
              type="text"
              value={userName} // 입력 필드의 값으로 실명 사용
              onChange={NameChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="nickName">닉네임</InputLabel>
            <InputField
              id="nickName"
              type="text"
              value={nickName} // 입력 필드의 값으로 닉네임 사용
              onChange={nickNameChange} // 값이 변경될 때 호출
            />
          </InputContainer>
        </EditWrite>
        <EditWrite2>
          <InputContainer>
            <InputLabel htmlFor="currentPw">현재 비밀번호</InputLabel>
            <InputField
              id="currentPw"
              type="text"
              value={currentPw} // 입력 필드의 값으로 현재 비밀번호 상태 사용
              onChange={currentPwChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <Items className="hint">
            {currentPw.length > 0 && (
              <span className={`message ${isCurPw ? "success" : "error"}`}>
                {curMessage}
              </span>
            )}
          </Items>
          <InputContainer>
            <InputLabel htmlFor="newPw">새 비밀번호</InputLabel>
            <InputField
              id="newPw"
              type="text"
              value={newPw} // 입력 필드의 값으로 새 비밀번호 상태 사용
              onChange={newPwChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <Items className="hint">
            {newPw.length > 0 && (
              <span className={`message ${isPw ? "success" : "error"}`}>
                {pwMessage}
              </span>
            )}
          </Items>
          <InputContainer>
            <InputLabel htmlFor="newPwCheck">새 비밀번호 확인</InputLabel>
            <InputField
              id="newPwCheck"
              type="text"
              value={newPwCheck} // 입력 필드의 값으로 새 비밀번호 확인 상태 사용
              onChange={newPwCheckChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <Items className="hint">
            {newPwCheck.length > 0 && (
              <span className={`message ${isConPw ? "success" : "error"}`}>
                {conPwMessage}
              </span>
            )}
          </Items>
          <InputContainer>
            <Withdraw onClick={onClickBtn2}>회원 탈퇴</Withdraw>
          </InputContainer>

          <ButtonContainer>
            <BackButtonComponent />
            {isName && isNickName && isCurPw && isPw && isConPw ? (
              <UpdateButton enabled onClick={onClickBtn}>
                수정하기
              </UpdateButton>
            ) : (
              <UpdateButton disabled>수정하기</UpdateButton>
            )}
          </ButtonContainer>
        </EditWrite2>
        <Modal open={modalOpen} close={closeModal} header="알림">
          {modalText}
        </Modal>
      </Container>
    </>
  );
};

export default EditUserMain;
