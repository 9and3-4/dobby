import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyMyPage from "./pages/MyPage/CompanyMyPage";
import EditCompanyMain from "./pages/MyPage/EditCompany";
import GlobalStyle from "./style/globalStyle";
import JobListings from "./pages/MyPage/JobListings";
import Layout from "./components/Layout";
import BoardWritePage from "./pages/Board/BoardWritePage";
import AdList from "./pages/MyPage/AdList";
import Condition from "./pages/LoginPage/Condition";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserMyPage from "./pages/MyPage/UserMyPage";
import AdPage from "./pages/advertisement/AdPage";
import AdJoinPage from "./pages/advertisement/AdJoinPage";
import BoardListPage from "./pages/Board/BoardListPage";
import Signup from "./pages/LoginPage/Signup";
import Main from "./pages/MainPage/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<CompanyMyPage />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobListings" element={<JobListings />} />
            <Route path="/AdList" element={<AdList />} />
            <Route path="/Condition" element={<Condition user="company" />} />
            <Route path="/BoardWritePage" element={<BoardWritePage />} />
            <Route path="/UserMyPage" element={<UserMyPage />} />
            <Route path="/AdPage" element={<AdPage />} />
            <Route path="/AdJoinPage" element={<AdJoinPage />} />
            <Route path="/BoardListPage" element={<BoardListPage />} />
            <Route path="/Signup" element={<Signup />} />
          </Route>
        </Routes>
      </Router>

      {/* <JobListings /> */}
    </>
  );
}

export default App;
