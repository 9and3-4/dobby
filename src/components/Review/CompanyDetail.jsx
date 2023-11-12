/* companyInfo 에서 기업 누르면 링크 타고 기업의 자세한 내용을 확인할 수 있는 화면 */

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import { useParams, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const DetailBox = styled.div`
  display: flex;
`;

const Detail = styled.div`
  color: var(--RED);
  font-size: 18px;
`;

// 기업 url 스타일 주기
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`;

const CompanyDetail = () => {
  //     const [companyDetail, setCompanyDetail] = useState([]);
  const location = useLocation();
  const companyDetail = location.state?.companyData;
  console.log(companyDetail);

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      //   try {
      //     const response = await AxiosApi.companyDetail();
      //     if (response.status === 200) {
      //       setCompanyDetail(response.data);
      //     }
      //   } catch (error) {
      //     console.log("Error fetching company detail:", error);
      //   }
    };
    fetchCompanyDetail();
  }, [CompanyDetail]);

  if (!companyDetail) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <DetailBox>
          <Detail>
            <h2>{companyDetail.name}</h2>
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
          </Detail>
        </DetailBox>
      </Container>
    </>
  );
};

export default CompanyDetail;
