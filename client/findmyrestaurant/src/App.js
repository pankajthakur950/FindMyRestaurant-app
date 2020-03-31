import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Homepage from "pages/homepage";
import Header from "components/Header";
import LoginPage from "pages/login";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      currentUser: null
    }
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={Homepage} />
        <Route path="/login">
          {this.state.currentUser ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
