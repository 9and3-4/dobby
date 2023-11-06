import ProfileCompany from "../../components/Mypage/profile/ProfileCompany";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../../components/Styles";

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
