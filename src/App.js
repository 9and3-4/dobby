import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyMyPage from "./pages/MyPage/CompanyMyPage";
import EditCompanyMain from "./pages/MyPage/EditCompany";
import GlobalStyle from "./style/globalStyle";
import JobPostingList from "./pages/MyPage/JobPostingList";
import Layout from "./components/Layout";
import BoardWritePage from "./pages/Board/BoardWritePage";
import AdList from "./pages/MyPage/AdList";
import Condition from "./pages/LoginPage/Condition";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserMyPage from "./pages/MyPage/UserMyPage";
import AdPage from "./pages/advertisement/AdPage";
import AdJoinPage from "./pages/advertisement/AdJoinPage";
import AdminBoardList from "./pages/admin/AdminBoardList";
import BoardListPage from "./pages/Board/BoardListPage";
import Signup from "./pages/LoginPage/Signup";
import Main from "./pages/MainPage/Main";
import BoardDetail from "./pages/Board/BoardDetailPage";
import AdminMain from "./pages/MainPage/AdminMain";
import CompanySignup from "./pages/LoginPage/CompanySignup";
import CompanyInfo from "./components/Review/CompanyInfo";
import CompanyDetail from "./components/Review/CompanyDetail";
import CompanyInfoLayout from "./components/CompanyInfoLayout";
import CompanyFeedback from "./components/Review/CompanyFeedback";
import EditUserMain from "./pages/MyPage/EditUser";
import CompanyPost from "./components/Review/CompanyPost";
import CompanyJobPosing from "./components/Review/CompanyJobPosting";
import DobbyIntroduction from "./components/DobbyIntroduction";
import TermsofUse from "./components/Termsofuse";
import PostListPage from "./pages/MyPage/PostListPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ProvideService from "./components/ProvideService";
import AdminJobPostList from "./pages/admin/AdminJobPostList";
import AdminAdList from "./pages/admin/AdminAdList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/CompanyMyPage" element={<CompanyMyPage />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobPostingList" element={<JobPostingList />} />
            <Route path="/AdList" element={<AdList />} />
            <Route path="/Condition" element={<Condition />} />
            <Route path="/BoardWritePage" element={<BoardWritePage />} />
            <Route path="/UserMyPage" element={<UserMyPage />} />
            <Route path="/PostListPage" element={<PostListPage />} />
            <Route path="/EditUserMain" element={<EditUserMain />} />
            <Route path="/AdPage" element={<AdPage />} />
            <Route path="/AdJoinPage" element={<AdJoinPage />} />
            <Route path="/BoardListPage" element={<BoardListPage />} />
            <Route path="/BoardDetailPage/:id" element={<BoardDetail />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/CompanySignup" element={<CompanySignup />} />
            <Route path="/AdminMain" element={<AdminMain />} />
            <Route path="/CompanyInfo" element={<CompanyInfo />} />
            <Route path="/AdminBoardList" element={<AdminBoardList />} />
            <Route path="/AdminJobPostList" element={<AdminJobPostList />} />
            <Route path="/AdminAdList" element={<AdminAdList />} />
            <Route element={<CompanyInfoLayout />}>
              <Route path="/CompanyDetail" element={<CompanyDetail />} />
              <Route path="/CompanyFeedback" element={<CompanyFeedback />} />
              <Route path="/CompanyPost" element={<CompanyPost />} />
              <Route path="/CompanyJobPosing" element={<CompanyJobPosing />} />
            </Route>
            <Route path="/DobbyIntroduction" element={<DobbyIntroduction />} />
            <Route path="/TermsofUse" element={<TermsofUse />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ProvideService" element={<ProvideService />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
