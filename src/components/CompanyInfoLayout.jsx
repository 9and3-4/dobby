import React from "react";
import { Outlet } from "react-router-dom";
import CompanyCategories from "./Review/CompanyCategories";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerBox = styled.div`
  border: 2px solid var(--RED);
  width: 1300px;
  height: 600px;
`;

const CategoriesBox = styled.div`
  width: 500px;
  margin: 30px;
`;

const CompanyInfoLayout = () => (
  <>
    <Container>
      <CategoriesBox>
        <CompanyCategories />
      </CategoriesBox>
      <ContainerBox>
        <Outlet />
      </ContainerBox>
    </Container>
  </>
);

export default CompanyInfoLayout;
