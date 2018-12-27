import React from "react";
import { Route } from "react-router-dom";

import App from "./components/app";
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";

export default (
  <Route path="/" exact component={App}>
    <Route path="/posts" component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
  </Route>
);
