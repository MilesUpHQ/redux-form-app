import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import reducers from "./reducers";
import routes from "./routes";
import promise from "redux-promise";
import App from "./components/app";
import postsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          {/* <li>
            <Link to="/posts/new">New</Link>
          </li> */}
        </ul>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/posts" exact component={postsIndex} />
          <Route path="/posts/new" component={PostsNew} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
