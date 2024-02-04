import { useRef, useState } from "react";
import "../Styles/SideNav.css";
import profile from "../Assets/Icons/profile.svg";
import chart from "../Assets/Icons/chart.svg";
import pie from "../Assets/Icons/pie.svg";
import setting from "../Assets/Icons/settings.svg";
import cash from "../Assets/Icons/cash.svg";
import bars from "../Assets/Icons/bars.svg";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [activePage, setActivePage] = useState("Profile");
  const [isExpanded, setisExpanded] = useState(true);
  const sideNavOptions = useRef<HTMLUListElement | null>(null);

  const sideBarclassName = isExpanded ? "SideNav" : "SideNav collapsed";

  const handleNavExtend = () => {
    setisExpanded(!isExpanded);
  };

  const handlePageClick = (pageName: string) => {
    setActivePage(pageName);
  };

  const Pages = [
    { name: "Profile", icon: profile },
    { name: "Transactions", icon: cash },
    { name: "Statistics", icon: chart },
    { name: "Installments", icon: pie },
    { name: "Deposits", icon: setting },
  ];

  return (
    <div className={sideBarclassName}>
      <div className="nav-header-icon">
        <img src={bars} alt="" onClick={handleNavExtend} />
        <h2 className="nav-header">Elysium Reports</h2>
      </div>
      <ul className="nav-list" ref={sideNavOptions}>
        {Pages.map((item) => (
          <Link
            to={"/" + `${item.name}`}
            className={"liLink"}
            key={item.name}
            onClick={() => handlePageClick(item.name)}
          >
            <div
              className={
                item.name === activePage ? "borderline Active" : "borderline"
              }
            ></div>
            <img src={item.icon} alt="" />
            <p>{item.name}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
