import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompanyMyPage from "./pages/MyPage/CompanyMyPage";
import EditCompanyMain from "./pages/MyPage/EditCompany";
import GlobalStyle from "./style/globalStyle";
import JobListings from "./pages/MyPage/JobListings";
import Layout from "./components/Layout";
import BoardWritePage from "./pages/Board/BoardWritePage";
import AdList from "./pages/MyPage/AdList";
import UserMyPage from "./pages/MyPage/UserMyPage";
import EditUserMain from "./pages/MyPage/EditUser";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/" element={<CompanyMyPage />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobListings" element={<JobListings />} />
            <Route path="/AdList" element={<AdList />} /> */}
            <Route path="/" element={<UserMyPage />} />
            <Route path="/EditUserMain" element={<EditUserMain />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
