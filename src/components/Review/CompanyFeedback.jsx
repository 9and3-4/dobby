import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const FeedbackBox = styled.div`
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Substance = styled.div``;

const CompanyFeedback = () => {
  const [companyFeedback, setCompanyFeedback] = useState([]);
  //const { id } = useParams();

  useEffect(() => {
    const id = localStorage.getItem("comId");
    console.log("기업 상세 조회 id : ", id);
    const fetchCompanyFeedback = async () => {
      try {
        const response = await AxiosApi.companyFeedback(id);
        if (response.status === 200) {
          setCompanyFeedback(response.data[0]);
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };

    fetchCompanyFeedback();
  }, []);

  if (!companyFeedback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FeedbackBox>
        <h2>{companyFeedback.name}</h2>
        <Substance>
          <p>작성 시간 : {companyFeedback.writedate}</p>
          <p>내용 : {companyFeedback.content}</p>
          <p>별점 : {companyFeedback.rating}</p>
        </Substance>
      </FeedbackBox>
    </>
  );
};

export default CompanyFeedback;
