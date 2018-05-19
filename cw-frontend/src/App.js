import React, { Component } from 'react';
import './App.css';
import Layout from "./containers/Layout/Layout";
import {Route, Switch} from "react-router-dom";

import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";
import ProductInfo from "./containers/ProductInfo/ProductInfo";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Products}/>
          <Route path="/products/new" exact component={NewProduct}/>
          <Route path="/productinfo" exact component={ProductInfo}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/login" exact component={Login}/>

        </Switch>

      </Layout>
    );
  }
}

export default App;
