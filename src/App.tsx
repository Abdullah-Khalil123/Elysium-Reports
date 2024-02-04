import SideNav from "./Components/ActiveComponents/SideNav";
import "./App.css";
import NavBar from "./Components/ActiveComponents/NavBar";
import Charts from "./Components/Pages/Charts";
import SideInfo from "./Components/ActiveComponents/SideInfo";
import { Route, Routes } from "react-router-dom";
import Installments from "./Components/Pages/Installments";
import Transactions from "./Components/Pages/Transactions";
import Profile from "./Components/Pages/Profile";
import Deposits from "./Components/Pages/Deposits";

const App = () => {
  return (
    <div className="main">
      <SideNav />
      <div className="MainContent">
        <NavBar />
        <div className="content-main-side">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Transactions" element={<Transactions />} />
            <Route path="/Statistics" element={<Charts />} />
            <Route path="/Installments" element={<Installments />} />
            <Route path="/Deposits" element={<Deposits />} />
          </Routes>
          <SideInfo />
        </div>
      </div>
    </div>
  );
};

export default App;
