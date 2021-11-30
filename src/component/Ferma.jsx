import React, {useState} from 'react';
import MsInput from "./UI/input/MsInput";
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
            <MsInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Egg holder"/>
            <MsInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Egg reducer"/>
            <MsButton onClick={addNewDodo}>Make Dodo</MsButton>
        </form>
    );
};

export default Ferma;