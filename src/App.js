import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserMyPage from "./pages/MyPage.jsx/UserMyPage";
import CompanyMyPage from "./pages/MyPage.jsx/CompanyMyPage";
import EditCompanyMain from "./pages/MyPage.jsx/EditCompany";
import GlobalStyle from "./style/globalStyle";
import JobListings from "./pages/MyPage.jsx/JobListings";
import Layout from "./components/Layout";
import BoardWritePage from "./pages/Board/BoardWritePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<CompanyMyPage />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobListings" element={<JobListings />} />
            <Route path="/" element={<BoardWritePage />} />
          </Route>
        </Routes>
      </Router>

      {/* <JobListings /> */}
    </>
  );
}

export default App;
