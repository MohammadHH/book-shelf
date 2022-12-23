import { getCategoriesImages } from "./data/images";
import axios from "axios";
const categoriesImages = getCategoriesImages();

export interface Category {
  description: string;
  id: number;
  title: string;
  image: string;
}

export async function fetchCategories() {
  try {
    const result = await axios.get(
      "https://book-shelf-b0945.firebaseio.com/categories.json"
    );
    const categories = result.data["-MKcDuv2DXkq_iTl7f3Q"] as Category[];

    return categories.map((category) => {
      return {
        ...category,
        image:
          category.id <= 8
            ? categoriesImages[category.id - 1]
            : categoriesImages[0],
      };
    });
  } catch (error) {
    console.log(error);
  }
}
