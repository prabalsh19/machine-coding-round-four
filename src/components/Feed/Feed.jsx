import { useFeedContext } from "../../context/feed-context";
import { PostCard } from "../PostCard/PostCard";
import "./Feed.css";

export const Feed = () => {
  const { feed } = useFeedContext();
  return (
    <div>
      <h1>Latest Posts</h1>
      {feed.map((forum) => (
        <PostCard key={forum.postId} {...forum} />
      ))}
    </div>
  );
};
