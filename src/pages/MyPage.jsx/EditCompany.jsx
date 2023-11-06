/* 기업 마이페이지 정보 수정 */

import Header from "../component/Header";
import Footer from "../component/Footer";
import { Wrapper } from "../component/styles";
import EditCompany from "../component/EditCompany";

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
