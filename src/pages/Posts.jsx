import React from 'react';
import {useEffect, useState} from "react";
import {usePosts} from "../hooks/useDodo";
import {useFetching} from "../hooks/useFetching";
import DodoService from "../API/DodoService";
import {getPageCount} from "../utils/pages";
import Dodo from "../component/Dodo";
import MsButton from "../component/UI/button/MsButton";
import MsModal from "../component/UI/MsModal/MsModal";
import Ferma from "../component/Ferma";
import PostFilter from "../component/PostFilter";
import PostListDodo from "../component/PostListDodo";
import Dodonation from "../component/UI/dodonation/Dodonation";
import Loader from "../component/UI/Loader/Loader";


function Posts() {
    const [posts, setPosts] = useState([]);
    const [modal, setModal]=useState(false);
    const [filter,setFilter]=useState({sort:'',query:''});
    const [totalPages, setTotalPages]=useState(0);
    const [limit, setLimit]=useState(10);
    const [page, setPage]=useState(1);
    const sortedAndSearchedPost=usePosts(posts,filter.sort,filter.query);

    const [fetchPosts,isPostsLoading,postError]= useFetching(async (limit,page)=>{
        const response=await DodoService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(()=>{
        fetchPosts(limit,page)
    },[])


    const createPost= (newPost) =>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost=(post)=>{
        setPosts(posts.filter(p=>p.id !== post.id))
    }
    const changePage=(page)=>{
        setPage(page)
        fetchPosts(limit,page)
    }

    return (
        <div className={"App"}>

            <Dodo/>
            <MsButton style={{marginTop:30}} onClick={()=>setModal(true)}>
                Создать Додо
            </MsButton>
            <button onClick={fetchPosts}>!Get Dodo!</button>
            <MsModal visible={modal} setVisible={setModal}>
                <Ferma create={createPost}/>
            </MsModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError&&
            <h1>Dodo erroros${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display:'flex',justifyContent:'center',marginTop:50}}><Loader/></div>
                :<PostListDodo remove={removePost} posts={sortedAndSearchedPost} title="Dodo number"/>
            }
            <Dodonation page={page}
                        changePage={changePage}
                        totalPages={totalPages}
            />

        </div>
    );
}
export default Posts;
