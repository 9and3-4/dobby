import Profile from "../../components/Mypage/profile/ProfileUser";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Wrapper } from "../../components/Styles";

const UserMyPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <Profile />
        <Footer />
      </Wrapper>
    </>
  );
};

export default UserMyPage;
