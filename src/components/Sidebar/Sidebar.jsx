import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RocketOutlinedIcon from "@mui/icons-material/RocketOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";

import "./Sidebar.css";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <div className="link">
          <HomeOutlinedIcon />
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div className="link">
          <RocketOutlinedIcon />
          <NavLink to={"/explore"}>Explore</NavLink>
        </div>
        <div className="link">
          <BookmarkBorderOutlinedIcon />
          <NavLink to={"/bookmark"}>Bookmarks</NavLink>
        </div>
        <div className="link">
          <AccountCircleOutlinedIcon />
          <NavLink to={"/profile"}>Profile</NavLink>
        </div>
      </div>
      <div className="profile">
        <InsertEmoticonOutlinedIcon />
        <div className="profile-details">
          <b>Prabal Sharma</b>
          <small>@prabalsh19</small>
        </div>
      </div>
    </div>
  );
};
