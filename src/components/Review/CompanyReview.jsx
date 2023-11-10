import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
`;

const CompanyInfo = styled.div`
  display: flex;
`;

const CompanyReview = () => {
  const companyLogo = {};

  return (
    <>
      <Container>
        <CompanyInfo></CompanyInfo>
      </Container>
    </>
  );
};

export default CompanyInfo;
