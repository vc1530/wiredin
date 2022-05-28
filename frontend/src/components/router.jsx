import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import About from "../pages/about";
import SignUp from "../pages/signup";
import LogIn from "../pages/login";
import Feed from "../pages/feed";
import Quiz from "../pages/quiz";
import Chat from "../pages/chat";
import Settings from "../pages/settings";

/**
 * The router is imported in app.jsx
 *
 * Our site just has two routes in it–Home and About
 * Each one is defined as a component in /pages
 * We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
 */

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/feed" component={Feed} />
    <Route path="/quiz" component={Quiz} />
    <Route path="/chat" component={Chat} />
    <Route path="/settings" component={Settings} />
  </Switch>
);
