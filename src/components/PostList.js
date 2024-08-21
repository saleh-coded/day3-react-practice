import React from 'react'
import posts from '../assets/data/posts'
import PostCard from './PostCard'
import "../assets/css/starts.css";

const PostList = () => {
    const displayIteam = posts.map((post) => {
        return <PostCard

        itemImage={post.image}
        itemTitle={post.title}
        itamDescription={post.description}
        itemLikenumber={post.likes}

        
        />;

    });

        return (
            <div className="item-section">{displayIteam}</div>
  )
};

export default PostList