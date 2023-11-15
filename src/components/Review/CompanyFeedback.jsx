import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import PostDate, { formatDate } from "../../components/Mypage/Post/PostDate";

const FeedbackBox = styled.div`
  margin: 10px;
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

const Substance = styled.div`
  flex-direction: column;
  margin: 15px;

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    color: var(--BLACK);
  }
  hr {
    border: 1px solid #fcb1b1;
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
          const tranData = response.data.map((e) => formatDate(e.WriteDate));
          console.log(tranData);

          setCompanyFeedback(response.data);
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };

    fetchCompanyFeedback();
  }, []);

  if (!companyFeedback) {
    return <div>올라온 리뷰가 없습니다.</div>;
  }

  return (
    <>
      <FeedbackBox>
        {companyFeedback.map((feedback, index) => (
          <Substance key={index}>
            <h2>내용 : {feedback.content}</h2>
            <p>작성 시간 : {formatDate("2023-11-01T04:10:20.000+00:00")}</p>
            <p>별점 : {feedback.rating}</p>
            <hr />
          </Substance>
        ))}
      </FeedbackBox>
    </>
  );
};

export default CompanyFeedback;
