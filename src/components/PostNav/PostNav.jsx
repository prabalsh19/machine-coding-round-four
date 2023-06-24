import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./PostNav.css";
import { Link } from "react-router-dom";
export const PostNav = () => {
  return (
    <div className="post-nav">
      <Link to={"/"}>
        <ArrowBackIcon />
      </Link>
      <h3>Post</h3>
    </div>
  );
};
