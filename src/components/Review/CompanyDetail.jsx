/* companyInfo 에서 기업 누르면 링크 타고 기업의 자세한 내용을 확인할 수 있는 화면 */

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Introduction = styled.div`
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 30px;
  }

  p {
    font-size: 17px;
    margin-bottom: 8px;
  }
`;

const ExplainBox = styled.div``;

// 기업 url 스타일 주기
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const CompanyDetail = () => {
  const [companyDetail, setCompanyDetail] = useState([]);
  const { id } = useParams(); // useParams를 사용하여 URL에서 기업 ID를 가져옴

  useEffect(() => {
    console.log("기업 상세 조회 id : ", id);
    const fetchCompanyDetail = async () => {
      try {
        // 기업 데이터가 있을 때에만 요청을 보냄
        // if (companyData) {
        const response = await AxiosApi.companyDetail(id);
        if (response.status === 200) {
          setCompanyDetail(response.data[0]);
          console.log(response.data); // 로그 추가
          // }
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };

    fetchCompanyDetail();
  }, []);

  if (!companyDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Introduction>
        <h2>{companyDetail.name}</h2>
        <ExplainBox>
          <p>
            홈페이지 :{" "}
            <StyledLink
              href={companyDetail.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {companyDetail.url}
            </StyledLink>
          </p>
          <p>업종 : {companyDetail.businessCategory}</p>
          <p>주소 : {companyDetail.address}</p>
          <p>대표 : {companyDetail.ceo}</p>
          <p>설립 : {companyDetail.foundedYear}</p>
          <p>규모 : {companyDetail.sizeScale}</p>
          <p>직원수 : {companyDetail.staffSize}</p>
          <p>연봉정보: {companyDetail.annualIncome}</p>
          <p>전화번호 : {companyDetail.contactNumber}</p>
          <p>{companyDetail.profile}</p>
        </ExplainBox>
      </Introduction>
    </>
  );
};

export default CompanyDetail;
