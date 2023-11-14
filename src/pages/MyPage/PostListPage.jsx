import React from "react";
import Profile from "../../components/Mypage/profile/Profile";
import PostList from "../../components/Mypage/Post/PostList";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
  display: flex;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
  }
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
  width: 150px;
  height: 20px;
`;
const Maintext = styled.p`
  font-size: 25px;
  color: var(--RED);
  font-weight: bold;
`;
const Mainbox = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostListbox = styled.div`
  display: flex;
  padding-top: 70px;
`;

const PostListPage = () => {
  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
        </ProfileBox>
        <Maintextbox>
          <Maintext>MY POST</Maintext>
        </Maintextbox>
        <Mainbox>
          <PostListbox>
            <PostList />
          </PostListbox>
        </Mainbox>
      </Container>
    </>
  );
};
export default PostListPage;
