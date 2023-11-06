/* 기업 마이페이지 정보 수정 */

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../../components/Styles";
import EditCompany from "../../components/Mypage/Edit/EditCompany";

const EditCompanyMain = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <EditCompany />
        <Footer />
      </Wrapper>
    </>
  );
};

export default EditCompanyMain;
