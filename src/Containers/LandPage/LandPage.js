import React, { Component } from "react";
import Categories from "../../layouts/Categories/Categories";
import CarouselList from "../../layouts/CarouselList/CarouselList";
import { fetchBooksByCategories } from "../../services/booksAPI";

class LandPage extends Component {
  state = { books: [] };

  componentDidMount() {
    fetchBooksByCategories((books) => this.setState({ books }));
  }

  render() {
    return (
      <>
        <Categories categories={this.props.categories} />
        {this.state.books.map((booksList, index) => (
          <CarouselList
            {...booksList}
            even={index % 2 === 0}
            key={booksList.category}
          />
        ))}
      </>
    );
  }
}

export default LandPage;
