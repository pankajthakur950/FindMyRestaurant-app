import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Homepage from "pages/homepage";
import Header from "components/Header";
import LoginPage from "pages/login";
import RestaurantDetail from "components/RestaurantDetail"

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
        <Route exact path="/restaurant/:restaurantId" component={RestaurantDetail} />
        <Route path="/login">
          {this.state.currentUser ? <Redirect to="/" /> : <LoginPage />}
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
