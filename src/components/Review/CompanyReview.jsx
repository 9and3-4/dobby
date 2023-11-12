import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
`;

const CompanyInfoBox = styled.div`
  display: flex;
`;

const CompanyReview = () => {
  const companyLogo = {};

  return (
    <>
      <Container>
        <CompanyInfoBox></CompanyInfoBox>
      </Container>
    </>
  );
};

export default CompanyReview;
