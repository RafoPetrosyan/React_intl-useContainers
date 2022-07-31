import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import AuthorizedGuard from "./guards/AuthorizedGuard";
import AuthGuard from "./guards/AuthGuard";

const App = () => (
      <Routes>
          <Route path='/' element={<AuthorizedGuard />}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/users' element={<Users />} />
          </Route>
          <Route path={'/auth'} element={<AuthGuard />}>
              <Route path='sign-in' element={<SignIn />} />
          </Route>
      </Routes>
);

export default App;
