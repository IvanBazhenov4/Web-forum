import React, {useRef} from 'react';
import {useEffect, useState} from "react";
import DodoService from "../API/DodoService";
import {usePosts} from "../hooks/useDodo";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MsButton from "../component/UI/button/MsButton";
import Ferma from "../component/Ferma";
import MsModal from "../component/UI/MsModal/MsModal";
import PostFilter from "../component/PostFilter";
import PostListDodo from "../component/PostListDodo";
import Loader from "../component/UI/Loader/Loader";
import Dodonation from "../component/UI/dodonation/Dodonation";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../component/UI/select/MsSelect";
import Dodo from "../component/Dodo";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await DodoService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">

            <Dodo/>

            <MsButton style={{marginTop: 30}} onClick={() => setModal(true)}>Создать Додо</MsButton>

            <button onClick={fetchPosts}>!Get Dodo!</button>

            <MsModal visible={modal} setVisible={setModal}>
                <Ferma create={createPost}/>
            </MsModal>

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value=>setLimit(value)}
                defaultStatus="Posts on page"
                option={[
                    {value:5, name:'5'},
                    {value:10, name:'10'},
                    {value:25, name:'25'},
                    {value:-1, name:'99'},
                ]}
                />

            {postError &&
            <h1>Dodo erroros {postError}</h1>
            }

            <PostListDodo remove={removePost} posts={sortedAndSearchedPost} title="Dodo number"/>

            <div ref={lastElement} style={{height: 20, background: 'green'}}/>

            {isPostsLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div> 
            }
            
            <Dodonation page={page}
                        changePage={changePage}
                        totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;
