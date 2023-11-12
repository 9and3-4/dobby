import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const InfoBox = styled.div`
  flex: 0 0 calc(50% = 10px); /* 2열로 나누기 위해 50% 너비 설정, 여백을 고려하여 계산 */
`;

const CompanyInfo = () => {
  //   const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        console.log();
        const response = await AxiosApi.infoGet();
        console.log(response.status);
        if (response.status === 200) {
          //   console.log(response.data);
          setInfo(response.data);
        }
      } catch (error) {
        console.error("Error fetching company info:", error);
      }
    };
    fetchCompanyInfo();
  }, []);

  return (
    <>
      <Container>
        {info.map((company) => (
          <InfoBox key={CompanyInfo.id}>
            <h2>{company.name}</h2>
            {/* <p>홈페이지 : {company.url}</p>
            <p>업종 : {company.businessCategory}</p>
            <p>주소 : {company.address}</p>
            <p>대표 : {company.ceo}</p>
            <p>설립 : {company.foundedYear}</p>
            <p>규모 : {company.sizeScale}</p>
            <p>직원수 : {company.staffSize}</p>
            <p>연봉정보: {company.annualIncome}</p>
            <p>전화번호 : {company.contactNumber}</p>
            <p>{company.profile}</p> */}
          </InfoBox>
        ))}
      </Container>
    </>
  );
};

export default CompanyInfo;
