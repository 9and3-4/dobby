import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import UserMyPage from "./Woohee/pages/UserMyPage";
import { StyledBackground } from "./Woohee/component/styles";
import CompanyMyPage from "./Woohee/pages/CompanyMyPage";
import EditCompanyMain from "./Woohee/pages/EditCompany";
import JobListings from "./Woohee/pages/JobListings";

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
