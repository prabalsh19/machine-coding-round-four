import { PostNav } from "../../components/PostNav/PostNav";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { PostCard } from "../../components/PostCard/PostCard";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { forumData } from "../../db/db";
import { CommentSection } from "../../components/CommentSection/CommentSection";
export const Post = () => {
  const { id } = useParams();

  const [selectedPost, setSelectedPost] = useState({});
  useEffect(() => {
    setSelectedPost(() => forumData.posts.find(({ postId }) => postId == id));
  }, [id]);
  return (
    <div className="post-page">
      <Sidebar />
      <div>
        <PostNav />
        {selectedPost?.postId && (
          <>
            <PostCard {...selectedPost} />
            <CommentSection post={selectedPost} />
          </>
        )}
      </div>
    </div>
  );
};
