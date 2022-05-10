import "./LikeButton.css";
import React, { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const Buttons = (props) => {
  const [like, setLike] = useState("inactive");
  

  function likeClick() {
    if (like === "inactive") {
      setLike("active-like");
    } 
    else {
      setLike("inactive");
    }
  }
  
  

  return (
    <div className="post-buttons">
      <div>
        <button className={like} onClick={() => likeClick()}><ThumbUpIcon/>Likes
        </button>
      </div>
    </div>
  );
};

export default Buttons;