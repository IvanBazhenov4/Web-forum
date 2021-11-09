import React from 'react';
import MsButton from "./UI/button/MsButton";

const PostDodo = (props) => {
    console.log(props);
    return (
        <div className="post">
        <div className="post__content">
            <strong>{props.post.id} {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
            <div className="post__btns">
                 <MsButton onClick={() => props.remove(props.post)}>Fly</MsButton>
            </div>
        </div>
    );
};

export default PostDodo;