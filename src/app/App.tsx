import { useEffect, useState } from "react";
import LandPage from "../containers/LandPage/LandPage";
import { Expanded } from "../components/Book/ExpandedBook";
import { Header } from "../layouts/Header/Header";
import { Footer } from "../layouts/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, fetchCategories } from "../services/categoriesAPI";
import "./App.css";

const links = ["HOME", "BOOKS", "REVIEWS", "NEWS", "CONTACTS"];
const social = ["Facebook", "Twitter", "RSS"];

export function App() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories().then((categories) => setCategories(categories || []));
  }, []);

  const navigationCategories = categories
    .map((category) => category.title)
    .sort();

  return (
    <BrowserRouter>
      <Header links={links} />
      <Routes>
        <Route path="/:bookId" element={<Expanded />} />
        <Route path="/" element={<LandPage categories={categories} />} />
      </Routes>
      <Footer
        navigation={links}
        navigationCategories={navigationCategories}
        social={social}
      />
    </BrowserRouter>
  );
}
