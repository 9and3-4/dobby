import React from "react";
import styled from "styled-components";
import Profile from "../../components/Mypage/profile/Profile";
import joblistex from "../../images/Joblistex.png";

// 맨 하단
const Container = styled.div`
  display: flex;
  background-color: white;
  height: 800px;
`;

// profile 맨 하단에 깔려 있음
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
`;

// 게시글 부분 시작

const JobContainer = styled.div`
  display: flex;
  display: column;
`;

const JobListings = () => {
  const profileInfo = {
    name: "기업",
    id: "songwoohee@naver.com",
  };
  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
        </ProfileBox>
        <JobContainer></JobContainer>
      </Container>
    </>
  );
};

export default JobListings;
