import "./sidebar.css";
import * as GrIcons from "react-icons/gr"
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarTitle">
        <FaIcons.FaBars/>
      </div>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <GrIcons.GrDiamond className="sidebarIcon" />
              <div className="sidebarListItemName">Assets</div>
              <div className="sidebarListItemValue">0</div>
            </li>
            </Link>
            <li className="sidebarListItem">
              <GrIcons.GrDiamond className="sidebarIcon" />
              <div className="sidebarListItemName">Debts</div>
              <div className="sidebarListItemValue">0</div>
            </li>
          </ul>
      </div>
    </div>
  );
}