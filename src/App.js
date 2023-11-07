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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route element={<Layout />}>
            {/* <Route path="/" element={<CompanyMyPage />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobListings" element={<JobListings />} />
            <Route path="/AdList" element={<AdList />} />
            <Route path="/Condition" element={<Condition user="company" />} /> */}
            <Route path="/BoardWritePage" element={<BoardWritePage />} />
          </Route>
        </Routes>
      </Router>

      {/* <JobListings /> */}
    </>
  );
}

export default App;
