import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const InfoBox = styled.div`
  flex: 0 0 calc(50% - 20px); /* 5개씩 나누기 위해 20% 너비 설정, 여백을 고려하여 계산 */
  margin: 10px; /* 요소 사이의 여백 조절 */
`;

const CompanyMain = styled.div`
  color: var(--RED);
  font-weight: bold;
  margin: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CompanyInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await AxiosApi.infoGet();
        console.log(response.status);
        if (response.status === 200) {
          setInfo(response.data);
          console.log(response.data); // 로그 추가
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
          <InfoBox key={company.id}>
            {/* Link 컴포넌트를 사용하여 클릭 시 '/company/:id' 경로로 이동 */}
            <StyledLink
              to={{
                pathname: `/CompanyDetail/${company.id}`,
                state: { companyData: company },
              }}
            >
              <CompanyMain>☺ {company.name}</CompanyMain>{" "}
            </StyledLink>
          </InfoBox>
        ))}
      </Container>
    </>
  );
};

export default CompanyInfo;
