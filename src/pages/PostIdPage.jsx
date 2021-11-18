import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import DodoService from "../API/DodoService";
import Loader from "../component/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await DodoService.getById(id);
    setPost(response.data);
  })
    const [fetchCom, isComLoading, errorCom] = useFetching(async (id) => {
      const response = await DodoService.getCommentsByPostId(id);
      setPost(response.data);
  })
  useEffect(() => {
    fetchPostById(params.id)
    fetchCom(params.id)
  },[])
  return (
    <div>
      <h1>U on dodo page ID={params.id}</h1>
      {isLoading
          ? <Loader/>
          :<div>{post.id}. {post.title}</div>
      }
      <h1>
        Comments
      </h1>
      <div>
        {isComLoading
        ?<Loader/>
            :<div>
              {comments.map(comm=>
              <div key={comm.id} style={{marginTop:15}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
              </div>
              )}
            </div>
        }
      </div>
    </div>
  );
};

export default PostIdPage;