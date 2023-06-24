/* eslint-disable react/prop-types */
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./PostCard.css";
import { Tag } from "../Tag/Tag";
import { useState } from "react";
import { Link } from "react-router-dom";
export const PostCard = ({
  postId,
  username,
  upvotes,
  downvotes,
  post,
  tags,
  postDescription,
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownVote] = useState(downvotes);
  const [disableBtn, setDisableBtn] = useState({
    upvote: false,
    downvote: false,
  });

  const upvoteHandler = () => {
    disableBtn.downvote
      ? setUpvote((upvote) => upvote + 2)
      : setUpvote((upvote) => upvote + 1);
    setDisableBtn(() => ({ downvote: false, upvote: true }));
  };
  const downvoteHandler = () => {
    disableBtn.upvote
      ? setDownVote((downvote) => downvote + 2)
      : setDownVote((downvote) => downvote + 1);
    setDisableBtn(() => ({ upvote: false, downvote: true }));
  };
  return (
    <div className="post-card">
      <div className="vote-actions">
        <button disabled={disableBtn.upvote} onClick={upvoteHandler}>
          <ArrowDropUpIcon sx={{ color: "blueviolet", fontSize: "3rem" }} />
        </button>
        <span>{upvote - downvote}</span>
        <button disabled={disableBtn.downvote} onClick={downvoteHandler}>
          <ArrowDropDownIcon sx={{ fontSize: "3rem" }} />
        </button>
      </div>
      <div className="post-details">
        <div className="post-user-details">
          <InsertEmoticonOutlinedIcon />
          <p>
            Posted By <span>@{username}</span>
          </p>
        </div>
        <div className="post-details">
          <h3>{post}</h3>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
          <p>{postDescription}</p>
          <hr />
        </div>
        <div className="post-actions">
          <ChatBubbleOutlineIcon />
          <Link to={"/post/" + postId}>
            <ShareIcon sx={{ color: "black" }} />
          </Link>
          {bookmarked ? (
            <span onClick={() => setBookmarked(false)}>
              <BookmarkIcon />
            </span>
          ) : (
            <span onClick={() => setBookmarked(true)}>
              <BookmarkBorderIcon />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
