import React, {useState} from 'react';
import MsImput from "./UI/imput/MsImput";
import MsButton from "./UI/button/MsButton";

const Ferma = ({create}) => {
    const addNewDodo = (e) => {
        e.preventDefault()
        const NewPost = {
            ...post, id: Date.now()
        }
        create(NewPost)
        setPost({title: '', body: ''})
    }

    const [post, setPost] = useState({title: '', body: ''})
    return (
        <form>
            <MsImput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Egg holder"/>
            <MsImput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Egg reducer"/>
            <MsButton onClick={addNewDodo}>Make Dodo</MsButton>
        </form>
    );
};

export default Ferma;