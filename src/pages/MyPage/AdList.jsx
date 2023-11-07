import React from "react";
import styled from "styled-components";
import profile_img from "../../images/companyprofile.png";
import adlistex from "../../images/adlistex.png";

// 맨 하단 ..
const Container = styled.div`
  display: flex;
  background-color: white;
  height: 800px;
`;

// profile 맨 하단에 깔려 있음
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

// 그 위에 프로필
const ProfileBox2 = styled.div`
  width: 300px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  border: 2px solid #ed342e;
  margin-left: 70px;
`;

const ProfileImg = styled.img`
  width: 100px;
  padding-bottom: 15px;
`;

const ProfileText = styled.p`
  font-size: 15px;
  color: #ed342e;
  padding: 10px;
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

const PostList = styled.div`
  display: flex;
  display: column;
`;

const MainText = styled.div`
  font-size: 23px;
  color: var(--RED);
  font-weight: bold;
  padding: 10px;
  padding-top: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const ListImage = styled.img`
  width: 300px;
  height: auto;
`;

const ListTitle = styled.div`
  font-size: 15px;
  padding: 10px;
  text-align: center;
`;

const ListDate = styled.div`
  font-size: 15px;
  padding: 10px;
  text-align: center;
`;

const AdList = () => {
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
          </ProfileBox2>
        </Profile>
        <PostList>
          <MainText>광고 등록 목록</MainText>
          <List>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 STANDARD</ListTitle>
            <ListDate>날짜 2023-11-06</ListDate>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 DELUXE</ListTitle>
            <ListDate>날짜 2023-11-07</ListDate>
          </List>
          <List>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 DELUXE</ListTitle>
            <ListDate>날짜 2023-11-10</ListDate>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 STANDARD</ListTitle>
            <ListDate>날짜 2023-11-11</ListDate>
          </List>
          <List>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 PREMIUM</ListTitle>
            <ListDate>날짜 2023-11-20</ListDate>
            <ListImage src={adlistex} alt="채용 공고 이미지" />
            <ListTitle>요금제 STANDARD</ListTitle>
            <ListDate>날짜 2023-11-25</ListDate>
          </List>
        </PostList>
      </Container>
    </>
  );
};

export default AdList;
