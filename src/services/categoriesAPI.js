import { getCategoriesImages } from "./data/images";
import axios from "axios";
const categoriesImages = getCategoriesImages();
//catgory=> id,image,title,description
export function fetchCategories(cb = () => {}) {
  axios
    .get("https://book-shelf-b0945.firebaseio.com/categories.json")
    .then((res) => {
      const categories = res.data["-MKcDuv2DXkq_iTl7f3Q"];
      categories.map((c) => {
        if (c.id <= 8) c.image = categoriesImages[c.id - 1];
        return c;
      });
      cb(categories);
    })
    .catch(console.log);
}
