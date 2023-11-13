import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";

const JobPostingBox = styled.div`
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JobPosting = styled.div`
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

const CompanyJobPosing = () => {
  const [CompanyJobPosing, setCompanyJobPosting] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("comId");
    console.log("기업 상세 조회 id : ", id);
    const fetchCompanyJobPosting = async () => {
      try {
        const response = await AxiosApi.companyJobPosting(id);
        if (response.status === 200) {
          setCompanyJobPosting(response.data[0]);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };

    fetchCompanyJobPosting();
  }, []);

  if (!CompanyJobPosing) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <JobPostingBox>
        <JobPosting>
          <h2>제목 : {CompanyJobPosing.title}</h2>
          <p>자격요건 : {CompanyJobPosing.qualification}</p>
          <p>내용 : {CompanyJobPosing.description}</p>
          <p>마감시간 : {CompanyJobPosing.deadline}</p>
          <p>이미지 {CompanyJobPosing.image}</p>
        </JobPosting>
      </JobPostingBox>
    </>
  );
};

export default CompanyJobPosing;
