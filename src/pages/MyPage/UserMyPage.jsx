/* 개인 마이페이지 메인 */

import React from "react";
import profile_img from "../../images/userprofile.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Profile_box = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  border: 2px solid #ed342e;
`;

// 제일 아래에 배치된 div
const Profile_box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 30px;
  background-color: white;
  height: 78vh;
`;

const Dobby = styled.img`
  width: 100px;
  height: auto;
`;

const ProfileText = styled.text`
  font-size: 15px;
  margin: 10px;
  color: #ed342e;
`;

const Btn = styled.button`
  width: 250px;
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
const UserMyPage = () => {
  const navigate = useNavigate();

  const editNavigate = () => {
    navigate("/EditUserMain");
  };

  const profile_inner = () => {
    const name = "USER"; // 추후 지정한 닉네임 가져오도록
    const ID_email = "songwoohee@naver.com";
    return (
      <Profile_box2>
        <Profile_box>
          <Dobby
            url="https://firebasestorage.googleapis.com/v0/b/kh-mini-prj.appspot.com/o/userprofile.png?alt=media&token=2a16b8e8-48a9-4bd7-8f33-dcabe97db3b2"
            alt="개인 프로필 사진"
          />
          <ProfileText>{name}님</ProfileText>
          <ProfileText>ID : {ID_email}</ProfileText>
        </Profile_box>
        <Btn onClick={editNavigate}>내 정보 수정</Btn>
        <Btn>작성글 보기</Btn>
        <Btn>지원 회사 목록</Btn>
        <Btn>즐겨찾기 목록</Btn>
      </Profile_box2>
    );
  };

  return <>{profile_inner()}</>;
};

export default UserMyPage;
