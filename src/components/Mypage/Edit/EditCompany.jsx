/* 기업 마이페이지내 정보 수정 화면(로그아웃+회원탈퇴 가능) 컴포넌트*/

import React from "react";
import profile_img from "../images/companyprofile.png";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;

// profile 맨 하단에 깔려 있음
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
`;

// 그 위에 프로필
const ProfileBox2 = styled.div`
  width: 300px;
  height: 550px;
  /* background-color: #ed342e; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  border: 2px solid #ed342e;
  margin-left: 100px;
`;

const ProfileImg = styled.img`
  width: 100px;
  padding-bottom: 15px;
`;

const ProfileText = styled.p`
  font-size: 15px;
  color: #ed342e;
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
`;

// margin-top은 옆 editwrite input창과 줄 맞추기 위해서
const EditWrite2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 103px;
`;

const MainText = styled.p`
  font-size: 25px;
  color: #ed342e;
  font-weight: bold;
  padding-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;
`;

const InputLabel = styled.label`
  font-size: 15px;
  color: #ed342e;
  margin: 10px;
`;

const InputField = styled.input`
    width: 200px;
    height: 20px;
    padding: 10px;
    margin 10px 0;
    border: 2px solid #ed342e;
    border-radius : 5px;
    outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-top: auto;
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

const EditCompany = () => {
  const [companyName, setCompanyName] = useState(""); // 기업명 상태 추가
  const NameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const [contactPerson, setContactPerson] = useState(""); // 담당자 이름
  const contactPersonChange = (e) => {
    setContactPerson(e.target.value);
  };

  const [department, setDepartment] = useState("");
  const departmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const [scale, setScale] = useState("");
  const scaleChange = (e) => {
    setScale(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const PhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const [currentPw, setCurrentPw] = useState("");
  const currentPwChange = (e) => {
    setCurrentPw(e.target.value);
  };

  const [newPw, setNewPw] = useState("");
  const newPwChange = (e) => {
    setNewPw(e.target.value);
  };

  const [newPwCheck, setNewPwCheck] = useState("");
  const newPwCheckChange = (e) => {
    setNewPwCheck(e.target.value);
  };

  const profileInfo = {
    name: "기업",
    id: "songwoohee@naver.com",
  };
  return (
    <>
      <Container>
        <Profile>
          <ProfileBox2>
            <ProfileImg src={profile_img} alt="기업 프로필 사진" />
            <ProfileText>{profileInfo.name}님</ProfileText>
            <ProfileText>ID : {profileInfo.id}</ProfileText>
            <BtnProfile>로그아웃</BtnProfile>
            <BtnProfile>회원 탈퇴</BtnProfile>
          </ProfileBox2>
        </Profile>
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
              onChange={newPwChange} // 값이 변경될 때 호출
            />
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

export default EditCompany;
