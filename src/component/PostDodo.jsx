import React from 'react';
import MsButton from "./UI/button/MsButton";
import {useHistory} from "react-router-dom";

const PostDodo = (props) => {
    const  router = useHistory()
    
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MsButton onClick={() => window.location.replace(`/post/${props.post.id}`)}>Push</MsButton>
            </div>
            <div className="post__btns">
                <MsButton onClick={() => props.remove(props.post)}>Fly</MsButton>
            </div>
        </div>
    );
};

export default PostDodo;