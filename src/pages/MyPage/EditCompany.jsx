/* 기업 마이페이지 정보 수정 */
import React from "react";
import profile_img from "../../images/companyprofile.png";
import styled from "styled-components";
import { useState } from "react";
import Profile from "../../components/Mypage/profile/Profile";

const Container = styled.div`
  display: flex;
  height: 800px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 150vh;
  }
`;

// profile 맨 하단에 깔려 있음
const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;
`;

const BtnProfile = styled.button`
  width: 200px;
  background-color: #fff;
  color: #ed342e;
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;

  &:hover {
    background-color: #ed342e;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

// 내정보수정 시작
// 맨 하단에 editwrite 깔아줌
const EditWrite = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 50px;

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

const BackButton = styled.button`
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

// 회원 탈퇴 버튼
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

const EditCompanyMain = () => {
  const [companyName, setCompanyName] = useState(""); // 기업명 상태 추가
  const NameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const [contactPerson, setContactPerson] = useState(""); // 담당자 이름
  const contactPersonChange = (e) => {
    setContactPerson(e.target.value);
  };

  const [department, setDepartment] = useState(""); // 부서
  const departmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const [scale, setScale] = useState(""); // 기업 규모
  const scaleChange = (e) => {
    setScale(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState(""); // 담당자 전화번호
  const PhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [currentPw, setCurrentPw] = useState(""); // 현재 비밀번호
  const currentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };

  const [newPw, setNewPw] = useState(""); // 새 비밀번호
  const newPwChange = (e) => {
    setNewPw(e.target.value);
  };

  const [newPwCheck, setNewPwCheck] = useState(""); // 새 비밀번화 확인
  const newPwCheckChange = (e) => {
    setNewPwCheck(e.target.value);
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
            <InputLabel htmlFor="companyName">기업명</InputLabel>
            <InputField
              id="companyName"
              type="text"
              value={companyName} // 입력 필드의 값으로 기업명 상태 사용
              onChange={NameChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="contacPerson">담당자 이름</InputLabel>
            <InputField
              id="contacPerson"
              type="text"
              value={contactPerson} // 입력 필드의 값으로 기존 담당자이름 상태 사용
              onChange={contactPersonChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="department">소속 팀명</InputLabel>
            <InputField
              id="department"
              type="text"
              value={department} // 입력 필드의 값으로 직무 상태 사용
              onChange={departmentChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="scale">기업 규모</InputLabel>
            <InputField
              id="scale"
              type="text"
              value={scale} // 입력 필드의 값으로 규모 상태 사용
              onChange={scaleChange} // 값이 변경될 때 호출
            />
          </InputContainer>
        </EditWrite>
        <EditWrite2>
          <InputContainer>
            <InputLabel htmlFor="phoneNumber">휴대폰 번호</InputLabel>
            <InputField
              id="phoneNumber"
              type="tel"
              placeholder="only number"
              value={phoneNumber} // 입력 필드의 값으로 휴대폰번호 상태 사용
              onChange={PhoneNumberChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="currentPw">현재 비밀번호</InputLabel>
            <InputField
              id="currentPw"
              type="text"
              value={currentPw} // 입력 필드의 값으로 현재 비밀번호 상태 사용
              onChange={currentPwChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="newPw">새 비밀번호</InputLabel>
            <InputField
              id="newPw"
              type="text"
              value={newPw} // 입력 필드의 값으로 새 비밀번호 상태 사용
              onChange={newPwChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="newPwCheck">새 비밀번호 확인</InputLabel>
            <InputField
              id="newPwCheck"
              type="text"
              value={newPw} // 입력 필드의 값으로 새 비밀번호 확인 상태 사용
              onChange={newPwCheckChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <Withdraw>회원 탈퇴</Withdraw>
          </InputContainer>

          <ButtonContainer>
            <BackButton>이전으로</BackButton>
            <UpdateButton>수정하기</UpdateButton>
          </ButtonContainer>
        </EditWrite2>
      </Container>
    </>
  );
};

export default EditCompanyMain;
