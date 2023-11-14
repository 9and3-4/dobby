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

const Substance = styled.div`
  flex-direction: column;
  margin: 15px;

  p {
    margin: 5px;
  }
`;

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
          setCompanyFeedback(response.data);
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
        {companyFeedback.map((feedback, index) => (
          <Substance key={index}>
            <p>작성 시간 : {feedback.writedate}</p>
            <p>내용 : {feedback.content}</p>
            <p>별점 : {feedback.rating}</p>
          </Substance>
        ))}
      </FeedbackBox>
    </>
  );
};

export default CompanyFeedback;
