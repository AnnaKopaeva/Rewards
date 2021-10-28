import * as React from "react";

import Feed from "./containers/Feed";
import Header from "./containers/Header";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Wrapper>
    <Header />
    <Feed />
  </Wrapper>
);

export default App;
