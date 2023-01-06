import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

import CategoryPosts from "./pages/CategoryPosts";
import blog from "./pages/blog";
import work from "./pages/work";
import contact from "./pages/contact";

import "./styles.css";
import Navbar from "./components/navbar.js";

import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

function App() {
  const [screenSize, setScreenSize] = useState(null);

  const checkScreenSize = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setScreenSize("large");
    } else {
      setScreenSize("small");
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);

  if (screenSize === "large") {
    return (
      <div className="screenAlert">
        <p>Please resize the screen to view the content.</p>
      </div>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Navbar />
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/blog/:slug" component={PostPage} />
          <Route path="/project/:slug" component={ProjectPage} />
          <Route path="/CategoryPosts/:slug" component={CategoryPosts} />
          <Route path="/blog/" component={blog} />
          <Route path="/work/" component={work} />
          <Route path="/contact/" component={contact} />
        </Switch>
      </ApolloProvider>
    );
  }
}

export default App;
