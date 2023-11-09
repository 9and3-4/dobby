import React from "react";
import Profile from "../../components/Mypage/profile/Profile";
import Apply from "../../components/Mypage/Apply/Apply";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
  display: flex;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;
`;

const Maintextbox = styled.div`
  width: 200px;
  height: 50px;
`;
const Maintext = styled.text`
  font-size: 25px;
  color: var(--RED);
  font-weight: bold;
`;

const ApplyListPage = () => {
  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
        </ProfileBox>
        <Maintextbox>
          <Maintext>지원 회사 목록</Maintext>
        </Maintextbox>
        <Apply />
      </Container>
    </>
  );
};
export default ApplyListPage;
