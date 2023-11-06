/* 기업 마이페이지 메인 컴포넌트 */

// import React from "react";
// import profile_img from "../images/companyprofile.png";
// import styled from "styled-components";

// const Profile_box = styled.div`
//   width: 450px;
//   height: 200px;
//   background-color: #7b010c;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

// // 제일 아래에 배치된 div
// const Profile_box2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   /* color: white; */
//   margin: 30px;
//   background-color: white;
// `;

// const Dobby = styled.img`
//   width: 50px;
//   height: auto;
// `;

// const Btn = styled.button`
//   width: 200px;
//   background-color: #7b010c;
//   color: white;
//   margin: 10px 0;
//   padding: 10px;
//   border-radius: 15px;
// `;

// // 마이페이지 메인
// const Profile = () => {
//   const profile_inner = () => {
//     const name = "Company";
//     const ID_email = "songwoohee@naver.com";
//     return (
//       <Profile_box2>
//         <Profile_box>
//           <Dobby src={profile_img} alt="기업 프로필 사진" />
//           <p>{name}님</p>
//           <p>ID : {ID_email}</p>
//         </Profile_box>
//         <Btn>내 정보 수정</Btn>
//         <Btn>채용 공고 목록</Btn>
//         <Btn>광고 목록</Btn>
//       </Profile_box2>
//     );
//   };

//   return <>{profile_inner()}</>;
// };

// export default Profile;

/* 대안2 :  흰색 바탕 + ed342e(밝은 빨강) 조합 */

import React from "react";
import profile_img from "../../../images/companyprofile.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Profile_box = styled.div`
  width: 300px;
  height: 400px;
  /* background-color: #ed342e; */
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
  /* color: white; */
  margin: 30px;
  background-color: white;
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

// 마이페이지 메인
const Profile = () => {
  const navigate = useNavigate(); // useNavigate를 사용하여 navigate 함수를 얻음
  // 어떤 이벤트 핸들러 내에서 navigate 함수를 사용할 수 있습니다.
  const editNavigate = () => {
    // 예를 들어, EditCompanyMain 컴포넌트로 이동하고 싶다면 다음과 같이 navigate 함수를 사용합니다.
    navigate("/EditCompanyMain");
  };
  const jobListNavigate = () => {
    navigate("/Index");
  };

  const profile_inner = () => {
    const name = "Company";
    const ID_email = "songwoohee@naver.com";
    return (
      <Profile_box2>
        <Profile_box>
          <Dobby src={profile_img} alt="기업 프로필 사진" />
          <ProfileText>{name}님</ProfileText>
          <ProfileText>ID : {ID_email}</ProfileText>
        </Profile_box>
        <Btn onClick={editNavigate}>내 정보 수정</Btn>
        <Btn onClick={jobListNavigate}>채용 공고 목록</Btn>
        <Btn>광고 목록</Btn>
      </Profile_box2>
    );
  };

  return <>{profile_inner()}</>;
};

export default Profile;
