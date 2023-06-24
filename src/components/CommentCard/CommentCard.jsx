/* eslint-disable react/prop-types */
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const CommentCard = ({ comment, username, picUrl, createdAt }) => {
  const date = new Date(createdAt);
  const dateStr = date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });

  return (
    <div className="post-details">
      <div className="post-user-details">
        <img src={picUrl} alt="" width={"50px"} />
        <div>
          <p>@{username}</p>
          <p>{dateStr}</p>
        </div>
      </div>
      <div className="post-details">
        <p>{comment}</p>
        <hr />
      </div>
      <div className="post-actions">
        <FavoriteBorderIcon />

        <ChatBubbleOutlineIcon />
        <ShareIcon sx={{ color: "black" }} />
      </div>
    </div>
  );
};
