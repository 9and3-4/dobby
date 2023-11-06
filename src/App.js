import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import UserMyPage from "./pages/MyPage.jsx/UserMyPage";
import { StyledBackground } from "./components/Styles";
import CompanyMyPage from "./pages/CompanyMyPage";
import EditCompanyMain from "./pages/EditCompanyMain";
import JobListings from "./pages/JobListings";

function App() {
  return (
    <>
      <StyledBackground>
        <Router>
          <Routes>
            <Route path="/" element={<CompanyMyPage />} />
            <Route path="/EditCompanyMain" element={<EditCompanyMain />} />
            <Route path="/JobListings" element={<JobListings />} />
          </Routes>
        </Router>

        {/* <JobListings /> */}
      </StyledBackground>
    </>
  );
}

export default App;
