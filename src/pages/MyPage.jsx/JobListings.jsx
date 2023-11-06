import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../../components/Styles";
import Index from "../../components/Mypage/Joblist/Index";

const JobListings = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Index />
        <Footer />
      </Wrapper>
    </>
  );
};

export default JobListings;
