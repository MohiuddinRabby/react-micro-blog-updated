import React, { useContext, useState } from "react";
import { ColorContext } from "../global/ColorContext";

const MainContentPost = ({ post }) => {
  const { selectedColor } = useContext(ColorContext);
  const [like, setLike] = useState(false);
  const likeBlogPost = () => {
    setLike(!like);
  };
  return (
    <div className="single-content">
      <img alt="profile-pic" src="https://placeimg.com/40/40/people" />
      <h3>{post?.author}</h3>
      <p>{post?.body}</p>
      <button
        style={{ backgroundColor: selectedColor }}
        className="btn-love"
        onClick={likeBlogPost}
      >
        {like ? "Loved" : "Love"}
      </button>
    </div>
  );
};

export default MainContentPost;
