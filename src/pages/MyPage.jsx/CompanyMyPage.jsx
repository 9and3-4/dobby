import ProfileCompany from "../component/ProfileCompany";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Wrapper } from "../component/styles";

const CompanyMyPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <ProfileCompany />
        <Footer />
      </Wrapper>
    </>
  );
};

export default CompanyMyPage;
