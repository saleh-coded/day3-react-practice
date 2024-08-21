import React from 'react';
import "../assets/css/starts.css";

const PostCard = ({itemImage, itemTitle, itamDescription, itemLikenumber }) => {
  return (
    <div className="item-container">
      <img src={itemImage} alt="Saleh's cookies 1" />
      <h3>{itemTitle} </h3>
      <p>{itamDescription} </p>

      <div className="like-container">
        <b> {itemLikenumber} like</b>
        <button >Like</button>
      </div>




    </div>
  );
};

export default PostCard