import React, { Component } from "react";
import LandPage from "../Containers/LandPage/LandPage";
import FullBook from "../components/Book/FullBook";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/:bookId" element={<FullBook />} />
          <Route
            path="/"
            element={<LandPage categories={this.state.categories} />}
          />
        </Routes>
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
