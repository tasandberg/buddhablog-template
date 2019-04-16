import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Blog from "./Blog";
import Page from "./Page";

const Main = ({ posts, pages }) => (
  <Router>
    <div className="row">
      <div className="col-md-2 col-xs-12">
        <NavigationBar pages={pages} />
      </div>
      <div className="col-md-8 col-xs-12 main-content">
        <Route exact path="/" component={() => <Blog posts={posts} />} />
        {pages.map(page => (
          <Route
            path={"/" + page.slug}
            key={page.slug}
            component={() => (
              <Page title={page.title} content={page.markdown} />
            )}
          />
        ))}
      </div>
    </div>
  </Router>
);

Main.propTypes = {
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired
};

export default Main;