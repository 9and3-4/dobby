// 프로필 컴포넌트
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
// 제일 아래 배치된 div
const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 550px;
  color: var(--RED);
  border: 2px solid var(--RED);
`;

const Profileimg = styled.img`
  width: 130px;
`;

const ProfileText = styled.text`
  font-size: 15px;
  margin: 10px;
  color: var(--RED);
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

// const Profile = (props) => {
//   // 로컬 스토리지에서 계정 정보 가져오기
//   // const = userId = window.localStage.getItem("userId");
//   // const [profile, setProfile] = useState("");
//   // const [logout, setLogout] = useState(false);
//   const navigate = useNavigate();

//   // useEffect(()=> {
//   // axios로 서버에 요청하기
//   //}, []);

//   //임시 데이터 출력 (파이어베이스 통해 프로필 사진 가져옴)
//   const profileData = {
//     profileurl:
//       "https://firebasestorage.googleapis.com/v0/b/kh-mini-prj.appspot.com/o/userprofile.png?alt=media&token=2a16b8e8-48a9-4bd7-8f33-dcabe97db3b2",
//     name: "user",
//     id: "woohee@google.com",
//   };

//   const handleLogoutClick = () => {
//     window.localStorage.clear();
//     navigate("/");
//   };

//   return (
//     <>
//       <Profilebox>
//         {/* {props.user === "user" && (
//           <ProfileImg src={ProfileImg} alt="개인 프로필 사진" />
//         )} */}
//         <Profileimg img src={profileData.profileurl} alt="프로필사진" />
//         <ProfileText>{profileData.name} 님</ProfileText>
//         <ProfileText>ID : {profileData.id}</ProfileText>
//         <BtnProfile onClick={handleLogoutClick}>로그아웃</BtnProfile>
//       </Profilebox>
//     </>
//   );
// };

// export default Profile;
const Profile = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    window.localStorage.clear();
    navigate("/");
  };

  // role에 따라 프로필 데이터 동적으로 설정
  const role = window.localStorage.getItem("userRole");
  const profileData =
    role === "user"
      ? {
          profileUrl:
            "https://firebasestorage.googleapis.com/v0/b/mini-project-1f72d.appspot.com/o/userprofile.png?alt=media&token=bcffd93d-a021-44ae-bc59-b7dc20b4474e",
          name: window.localStorage.getItem("userNickName"),
          id: window.localStorage.getItem("userId"),
        }
      : role === "company"
      ? {
          profileUrl:
            "https://firebasestorage.googleapis.com/v0/b/mini-project-1f72d.appspot.com/o/companyprofile2.png?alt=media&token=3cfba5cd-b4d5-4188-b43b-34da0e5ac6ee",
          name: window.localStorage.getItem("userCompanyName"),
          id: window.localStorage.getItem("userId"),
        }
      : {};

  return (
    <>
      <Profilebox>
        <Profileimg src={profileData.profileUrl} alt="프로필사진" />
        <ProfileText>{profileData.name} 님</ProfileText>
        <ProfileText>ID : {profileData.id}</ProfileText>
        <BtnProfile onClick={handleLogoutClick}>로그아웃</BtnProfile>
      </Profilebox>
    </>
  );
};

export default Profile;
