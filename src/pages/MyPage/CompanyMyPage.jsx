/* 기업 마이페이지 메인 */

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/Mypage/profile/Profile";

// 제일 아래에 배치된 div
const Profile_box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  background-color: white;
  height: 78vh;
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

const CompanyMyPage = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수를 얻음
  // 어떤 이벤트 핸들러 내에서 navigate 함수를 사용할 수 있습니다.
  const editNavigate = () => {
    // 예를 들어, EditCompanyMain 컴포넌트로 이동하고 싶다면 다음과 같이 navigate 함수를 사용합니다.
    navigate("/EditCompanyMain");
  };
  const jobListNavigate = () => {
    navigate("/JobPostingList");
  };
  const adListNavigate = () => {
    navigate("/AdList");
  };

  return (
    <Profile_box>
      <Profile />
      <Btn onClick={editNavigate}>내 정보 수정</Btn>
      <Btn onClick={jobListNavigate}>채용 공고 목록</Btn>
      <Btn onClick={adListNavigate}>광고 목록</Btn>
    </Profile_box>
  );
};

export default CompanyMyPage;
