import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes=[
    {path:'/About', component: About, exact:true},
    {path:'/Posts', component: Posts, exact:true},
    {path:'/Posts/:id', component: PostIdPage, exact:true},
]
export const publicRoutes=[
    {path:'/login', component: Login, exact:true},
    ]