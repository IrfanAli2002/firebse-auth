import React from "react";
import {  BrowserRouter as Router,   Route,   Routes,} from "react-router-dom";
import Dashboard from "../screens/dashboard";
import Post from "../screens/post";
import User from "../screens/user"
import Todo from "../screens/todo";
import Pic from "../screens/pic";
import Comment from "../screens/comment";

export default function RouterApp() {
    return (
        <div>
                <Router>
                <Routes>
                    <Route index path="/*" element={<Dashboard/>} />
                    <Route path="pic" element={<Pic/>}  />
                    <Route path="todo" element={<Todo/>}  />
                    <Route path="user" element={<User/>}  />
                    <Route path="post" element={<Post/>}  />
                    <Route path="comment" element={<Comment/>}  />
                </Routes>
           
        </Router>
            </div>
    );
}