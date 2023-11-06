import React from "react";
import profile_img from "../../../images/companyprofile.png";
import styled from "styled-components";

const Profile_box = styled.div`
  width: 450px;
  height: 200px;
  background-color: #7b010c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

// 제일 아래에 배치된 div
const Profile_box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Dobby = styled.img`
  width: 50px;
  height: auto;
`;

const Btn = styled.button`
  width: 200px;
  background-color: #7b010c;
  color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 15px;
`;

// 마이페이지 메인
const Profile = () => {
  const profile_inner = () => {
    const name = "USER"; // 추후 지정한 닉네임 가져오도록
    const ID_email = "songwoohee@naver.com";
    return (
      <Profile_box2>
        <Profile_box>
          <Dobby src={profile_img} alt="개인 프로필 사진" />
          <p>{name}님</p>
          <p>ID : {ID_email}</p>
        </Profile_box>
        <Btn>내 정보 수정</Btn>
        <Btn>작성글 보기</Btn>
        <Btn>지원 회사 목록</Btn>
        <Btn>즐겨찾기 목록</Btn>
      </Profile_box2>
    );
  };

  return <>{profile_inner()}</>;
};

export default Profile;
