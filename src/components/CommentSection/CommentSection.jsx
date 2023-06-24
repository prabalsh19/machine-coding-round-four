/* eslint-disable react/prop-types */
import { CommentCard } from "../CommentCard/CommentCard";
import "./CommentSection.css";

export const CommentSection = ({ post: { comments } }) => {
  console.log(comments);
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentCard key={comment.commentId} {...comment} />
      ))}
    </div>
  );
};
