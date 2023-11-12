// 프로필 컴포넌트
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// 제일 아래 배치된 div
const ProfileImg = styled.img`
  width: 130px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 550px;
  color: #ed342e; /* 적절한 색상 값으로 대체 */
  border: 2px solid #ed342e; /* 적절한 색상 값으로 대체 */
`;

const ProfileText = styled.div`
  font-size: 15px;
  margin: 10px;
  color: #ed342e; /* 적절한 색상 값으로 대체 */
`;

const BtnProfile = styled.button`
  width: 200px;
  background-color: #fff;
  color: #ed342e; /* 적절한 색상 값으로 대체 */
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ed342e; /* 적절한 색상 값으로 대체 */
  transition: background-color 0.2s color 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ed342e;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // 로그아웃 시 localStorage 비우기 && 메인으로 이동
    window.localStorage.clear();
    navigate("/");
  };

  // role에 따라 프로필 데이터 동적으로 설정
  const role = window.localStorage.getItem("userRole");
  const profileData =
    role === "user" || role === "company"
      ? {
          profileUrl:
            role === "user"
              ? "https://firebasestorage.googleapis.com/v0/b/mini-project-1f72d.appspot.com/o/userprofile.png?alt=media&token=bcffd93d-a021-44ae-bc59-b7dc20b4474e"
              : " https://firebasestorage.googleapis.com/v0/b/mini-project-1f72d.appspot.com/o/companyprofile2.png?alt=media&token=3cfba5cd-b4d5-4188-b43b-34da0e5ac6ee",
          name:
            role === "user"
              ? window.localStorage.getItem("userNickName")
              : window.localStorage.getItem("userCompanyName"),
          id: window.localStorage.getItem("userId"),
        }
      : {};

  return (
    <>
      <ProfileBox>
        <ProfileImg src={profileData.profileUrl} alt="프로필사진" />
        <ProfileText>{profileData.name} 님</ProfileText>
        <ProfileText>ID : {profileData.id}</ProfileText>
        <BtnProfile onClick={handleLogoutClick}>로그아웃</BtnProfile>
      </ProfileBox>
    </>
  );
};

export default Profile;
