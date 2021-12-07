// import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage.page";
//import RegisterPage from "./RegisterPage/RegisterPage.page";

function App() {
  return (
    <div>
      <LoginPage />
    </div>
    /*
    <Router>
        <Routes>
          <Route path="/" element={LoginPage} />
          <Route path="new-user" element={RegisterPage} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
      */
  );
}

export default App;
