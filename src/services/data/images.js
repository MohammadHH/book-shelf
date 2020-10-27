//Fiction
import BalancingAct from "./books/Fiction/BalancingAct.png";
import BookThief from "./books/Fiction/BookThief.png";
import Bootlegger from "./books/Fiction/Bootlegger.png";
import DirtyWood from "./books/Fiction/DirtyWood.png";
import JohnMarsden from "./books/Fiction/JohnMarsden.png";
import TheBootlegger from "./books/Fiction/TheBootlegger.png";

//Nonfiction
import decentHour from "./books/Nonfiction/DecentHour.png";
import fever from "./books/Nonfiction/Fever.png";
import feverTree from "./books/Nonfiction/FeverTree.png";
import greenWald from "./books/Nonfiction/GreenWald.png";
import theBook from "./books/Nonfiction/TheBook.png";
import wishMeDead from "./books/Nonfiction/WishMeDead.png";

//Children's
import FairyThings from "./books/Children's/FairyThings.png";
import InsideTheZoo from "./books/Children's/InsideTheZoo.png";
import PhonicsGames from "./books/Children's/PhonicsGames.png";
import RosieProject from "./books/Children's/RosieProject.png";
import Unicorn from "./books/Children's/Unicorn.png";
import WilliamShakespeare from "./books/Children's/WilliamShakespeare.png";

//Categories
import audio from "./categories/Audio.png";
import business from "./categories/Business.png";
import children from "./categories/Children.png";
import cooking from "./categories/Cooking.png";
import lifeStyle from "./categories/LifeStyle.png";
import mystery from "./categories/Mystery.png";
import romance from "./categories/Romance.png";
import fiction from "./categories/Fiction.png";

const fictions = [BookThief, JohnMarsden, DirtyWood, TheBootlegger, Bootlegger, BalancingAct];
const nonfictions = [feverTree, fever, theBook, greenWald, decentHour, wishMeDead];
const childrens = [WilliamShakespeare, FairyThings, PhonicsGames, Unicorn, RosieProject, InsideTheZoo];

const booksImages = [];
booksImages.push({ category: "fiction", images: fictions });
booksImages.push({ category: "nonfiction", images: nonfictions });
booksImages.push({ category: "childrens", images: childrens });

const categoriesImages = [audio, business, children, cooking, lifeStyle, mystery, romance, fiction];

export const getBooksImages = () => {
  return booksImages;
};

export const getCategoriesImages = () => {
  return categoriesImages;
};
