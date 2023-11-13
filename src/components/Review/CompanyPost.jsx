import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";

const PostBox = styled.div`
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Posting = styled.div`
  flex-direction: column;
  margin: 15px;

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin: 5px;
  }
`;

const CompanyPost = () => {
  const [companyPost, setCompanyPost] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("comId");
    console.log("기업 상세 조회 id : ", id);
    const fetchCompanyPost = async () => {
      try {
        const response = await AxiosApi.companyPost(id);
        if (response.status === 200) {
          setCompanyPost(response.data[0]);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };
    fetchCompanyPost();
  }, []);

  if (!CompanyPost) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostBox>
        <Posting>
          <h2>제목 : {companyPost.title}</h2>
          <p>{companyPost.content}</p>
          <p>작성시간 : {companyPost.wirtedate}</p>
          <p>👀 {companyPost.viewcount}</p>
          <p>♥ {companyPost.likecount}</p>
        </Posting>
      </PostBox>
    </>
  );
};

export default CompanyPost;
