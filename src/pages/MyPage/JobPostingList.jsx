import React from "react";
import styled from "styled-components";
import Profile from "../../components/Mypage/profile/Profile";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import PostDate from "../../components/Mypage/Post/PostDate";
import BackButtonComponent from "./BackButton";

const Container = styled.div`
  display: flex;
  background-color: white;
  height: 800px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: auto;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding-left: 20px;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
  }
`;

const MainText = styled.div`
  font-size: 23px;
  color: var(--RED);
  font-weight: bold;
  padding: 10px;
  padding-top: 20px;
`;

const SecondBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListUl = styled.ul`
  list-style-type: none;
  padding: 0;
  color: var(--RED);
`;

const ListLi = styled.li`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center; // 세로 중앙 정렬
  justify-content: center;
  /* text-align: center; */
`;

const AdListContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding-top: 10px;
`;

const ListHeader = styled.div`
  display: flex;
`;

const ListBody = styled.div`
  display: flex;
`;

const ListTitle = styled.h2`
  font-size: 0.8em;
  margin: 5px 0px;
  text-align: center;
`;

const ListText = styled.h2`
  font-size: 0.8em;
  margin: 5px 0px;
`;

const ListImage = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 8px;
  margin-right: 15px;
`;

const DateBox = styled.div`
  font-size: 1em;
  font-weight: bold;
`;

const JobPostingList = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const id = window.localStorage.getItem("userId");
        const response = await AxiosApi.jobList(id);
        if (response.status === 200) {
          console.log(response.data[0]);
          setJobList(response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchJobList();
  }, []);

  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
          <BackButtonComponent />
        </ProfileBox>
        <SecondBox>
          <MainText>채용 공고 목록</MainText>
          <PostList>
            <ListUl>
              {jobList &&
                jobList.map((jobList) => (
                  <ListLi key={jobList.jobListId}>
                    <AdListContentWrapper>
                      <ListHeader>
                        <ListImage
                          src={jobList.image}
                          alt={`Ad Image ${jobList.id}`}
                        />
                      </ListHeader>
                      <ListBody>
                        <DateBox>
                          <ListTitle>{jobList.title}</ListTitle>
                          <ListText>{jobList.description}</ListText>
                          <ListText>{jobList.qualification}</ListText>
                          <PostDate date={jobList.deadLine} />
                        </DateBox>
                      </ListBody>
                    </AdListContentWrapper>
                  </ListLi>
                ))}
            </ListUl>
          </PostList>
        </SecondBox>
      </Container>
    </>
  );
};

export default JobPostingList;
