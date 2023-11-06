import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import UserMyPage from "./pages/MyPage.jsx/UserMyPage";
import { StyledBackground } from "./components/Styles";
import CompanyMyPage from "./pages/MyPage.jsx/CompanyMyPage";
import EditCompanyMain from "./pages/MyPage.jsx/EditCompany";
import GlobalStyle from "./style/globalStyle";
import JobListings from "./pages/MyPage.jsx/JobListings";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<CompanyMyPage />} />
          <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
          <Route path="/JobListings" element={<JobListings />} />
        </Routes>
      </Router>

      {/* <JobListings /> */}
    </>
  );
}

export default App;
