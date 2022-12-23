import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const images = [
  "http://01eba9f59936628a9c10-a672e330d72d3d2e689cb64015c1f8c5.r97.cf2.rackcdn.com/javascript-and-jquery-book-cover.png",
  "https://luiggiannes.me/wp-content/uploads/2020/05/Eloquent-js-cover.jpg",
  "https://risingstack.com/static/node-js-monitoring-ebook-43c4cbc41cdf3f80187802657b373c9d.png",
  "https://2ality.com/2018/08/impatient-js/cover-epub.jpg",
  "https://d2sofvawe08yqg.cloudfront.net/hands-on-nextjs/hero?1549498603",
  "https://risingstack.com/static/learn-using-npm-443ae85142f1d636df8782bcc4983649.png",
  "https://d2sofvawe08yqg.cloudfront.net/little-javascript/hero?1570006608",
];

interface Book {
  author: string;
  id: string;
  category: string;
  description: string;
  publishedOn: string;
  reviewedBy: string;
}

export function Expanded() {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .get("https://book-shelf-b0945.firebaseio.com/book" + bookId + ".json")
      .then((res) => setBook(res.data[Object.keys(res.data)[0]]))
      .catch((err) => {
        console.log(err);
        setBook(null);
      });
  }, [bookId]);

  const { author, id, category, description, publishedOn, reviewedBy } =
    book || {};

  return book ? (
    <section className="text-center pt-4 pb-4">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Link to="/">
                  <button className="btn btn-outline btn-outline-secondary">
                    Back
                  </button>
                </Link>
              </div>
              {author && <h5 className="text-secondary">By: {author}</h5>}
            </div>
          </div>
          {id && (
            <img
              src={images[(Number(id) - 1) % images.length]}
              alt="front page"
              className="card-img-top"
            />
          )}
          <div className="card-body">
            {category && <h5 className="card-title">{category}</h5>}
            {description && <p className="card-text">{description}</p>}
          </div>
          <div className="card-footer">
            {publishedOn && (
              <div className="float-left text-primary">
                Published On: {new Date(publishedOn).toDateString()}
              </div>
            )}
            {reviewedBy && (
              <div className="float-right text-success">
                Reviewed By: {reviewedBy}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  ) : (
    <h2 className="text-center pt-4">Loading ...</h2>
  );
}
