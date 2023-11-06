import Profile from "../component/Profile";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Wrapper } from "../component/styles";

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
