import react from "react";
import styled from "styled-components";

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

const ProfileImg = styled.ima`
  width: 100px;
  padding-bottom: 15px;
`;

const ProfileText = styled.text`
  font-size: 15px;
  margin: 10px;
  color: var(--RED);
`;

const Profile = (props) => {
  // 로컬 스토리지에서 계정 정보 가져오기
  // const = userId = window.localStage.getItem("userId");
  // const [profile, setProfile] = useState("");

  // useEffect(()=> {
  // axios로 서버에 요청하기
  //}, []);

  return (
    <>
      <Profilebox>
        {props.user === "user" && (
          <ProfileImg src={ProfileImg} alt="개인 프로필 사진" />
        )}
        <ProfileText>님</ProfileText>
        <ProfileText>ID : </ProfileText>
      </Profilebox>
    </>
  );
};

export default Profile;
