/* 개인 마이페이지 정보 수정 */
import React from "react";
import profile_img from "../../images/userprofile.png";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  height: 78vh;

  @media only screen and (max-width: 768px) {
  }
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

  @media only screen and (max-width: 768px) {
    display: flex;
    margin: 10px;
    justify-content: center;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  padding-bottom: 15px;
`;

const ProfileText = styled.p`
  font-size: 15px;
  margin: 10px;
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
  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

// margin-top은 옆 editwrite input창과 줄 맞추기 위해서
const EditWrite2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;
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

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
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

const EditUserMain = () => {
  const [userName, setUserName] = useState(""); // 이름
  const NameChange = (e) => {
    setUserName(e.target.value);
  };

  const [nickName, setNickName] = useState(""); // 닉네임
  const nickNameChange = (e) => {
    setNickName(e.target.value);
  };

  const [company, setCompany] = useState(""); // 소속 회사명
  const companyChange = (e) => {
    setCompany(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState(""); // 휴대폰번호
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

  const [newPwCheck, setNewPwCheck] = useState(""); // 새 비밀번호 확인
  const newPwCheckChange = (e) => {
    setNewPwCheck(e.target.value);
  };

  const profileInfo = {
    name: "개인", // 추후 닉네임 가져올 수 있도록 useEffect, api, axios
    id: "songwoohee@naver.com",
  };
  return (
    <>
      <Container>
        <Profile>
          <ProfileBox2>
            <ProfileImg src={profile_img} alt="개인 프로필 사진" />
            <ProfileText>{profileInfo.name}님</ProfileText>
            <ProfileText>ID : {profileInfo.id}</ProfileText>
            <BtnProfile>로그아웃</BtnProfile>
            <BtnProfile>회원 탈퇴</BtnProfile>
          </ProfileBox2>
        </Profile>
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
            <InputLabel htmlFor="nickName">사용자명</InputLabel>
            <InputField
              id="nickName"
              type="text"
              value={nickName} // 입력 필드의 값으로 닉네임 사용
              onChange={nickNameChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="company">회사명</InputLabel>
            <InputField
              id="company"
              type="text"
              value={company} // 입력 필드의 값으로 소속회사 상태 사용
              onChange={companyChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="phoneNumber">휴대폰 번호</InputLabel>
            <InputField
              id="phoneNumber"
              type="text"
              value={phoneNumber} // 입력 필드의 값으로 휴대폰번호 사용
              onChange={PhoneNumberChange} // 값이 변경될 때 호출
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
          <ButtonContainer>
            <BackButton>이전으로</BackButton>
            <UpdateButton>수정하기</UpdateButton>
          </ButtonContainer>
        </EditWrite2>
      </Container>
    </>
  );
};

export default EditUserMain;
