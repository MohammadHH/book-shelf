import React, { Component } from "react";
import BooksPage from "../Containers/LandPage/LandPage";
import FullBook from "../components/Book/FullBook";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { fetchCategories } from "../services/categoriesAPI";
import "./App.css";

const links = ["HOME", "BOOKS", "REVIEWS", "NEWS", "CONTACTS"];
const social = ["Facebook", "Twitter", "RSS"];

class App extends Component {
  state = {
    categories: [],
  };
  componentDidMount() {
    fetchCategories((categories) => this.setState({ categories }));
  }
  render() {
    return (
      <BrowserRouter>
        <Header links={links} />
        <Switch>
          <Route path="/:bookId" component={FullBook} />
          <Route
            path="/"
            render={() => <BooksPage categories={this.state.categories} />}
          />
        </Switch>
        <Footer
          navigation={links}
          navigationCategories={this.state.categories
            .map((c) => c.title)
            .sort()}
          social={social}
        />
      </BrowserRouter>
    );
  }
}

export default App;
