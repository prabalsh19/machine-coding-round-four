import { useEffect, useState } from "react";
import { useFeedContext } from "../../context/feed-context";
import "./Sort.css";
export const Sort = () => {
  const { setFeed } = useFeedContext();
  const [showLatest, setShowLatest] = useState(true);
  const sortHandler = (e) => {
    setShowLatest(() => (e.target.value === "latest_post" ? true : false));
  };
  useEffect(() => {
    setFeed((prev) =>
      [...prev].sort((a, b) =>
        showLatest
          ? new Date(b.createdAt) - new Date(a.createdAt)
          : b.upvotes - a.upvotes
      )
    );
  }, [showLatest]);
  return (
    <div className="sort">
      <h3>Sort By</h3>
      <select onChange={(e) => sortHandler(e)} name="" id="">
        <option value="latest_post">Latest Post</option>
        <option value="most_upvoted">Most Upvotes</option>
      </select>
    </div>
  );
};
