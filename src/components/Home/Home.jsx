import React, { useState } from "react";
import style from "./Home.module.css";
import { useGlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  let { books, favorite, AddToFavorite, removeFromFavorite } =
    useGlobalContext();

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 8;
  const lastIndex = currentPage * recordsPage;
  const firstIndex = lastIndex - recordsPage;
  const records = books.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(books.length / recordsPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const navigate = useNavigate();

  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  //* Favorite Checker
  const favoritesChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className={`${style.home}`}>
      <div
        className="row 
      "
      >
        {records.map((book, index) => (
          <div className={`col-md-3 col-lg-3 col-6  ${style.cardContainer}`}   key={index}>
            <div className={style.card}>
              <img
                src={book.image_url}
                onClick={() => navigate(`/books/${book.id}`)}
                className="card-img-top shadow p-3  bg-body-tertiary rounded"
                alt="..."
              />
            </div>
            <div className={` ${style.book_item_info}`}>
              <div>
                <Link to={`/books/${book.id}`} style={{ color: "aliceblue" }}>
                  <span> {book.title}</span>
                </Link>
                <div className="py-2">
                  <span
                    className="text-capitalize "
                    style={{ color: "sandybrown" }}
                  >
                    Author:
                  </span>
                  <span className="px-2 " style={{ color: "sandybrown" }}>
                    {book.author}
                  </span>
                </div>
                <div>
                  {favoritesChecker(book.id) ? (
                    <button
                      onClick={() => removeFromFavorite(book.id)}
                      className="btn btn-outline-secondary"
                    >
                      {" "}
                      <span style={{ color: "aliceblue" }}>
                        {" "}
                        Remove from fav
                      </span>
                      <i class="fa-regular fa-heart px-2"></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => AddToFavorite(book)}
                      className="btn btn-outline-secondary"
                    >
                      {" "}
                      <span style={{ color: "aliceblue" }}> Add to fav</span>
                      <i class="fa-regular fa-heart px-2"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}


        {/* start pagination  */}
        <nav aria-label="Page navigation example " className="mt-4 mb-4 ">
          <ul className={`pagination ${style.pagination}`}>
            <li className="page-item">
              <Link className="page-link" href="#" onClick={perPage}>
                Previous
              </Link>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <Link
                  className="page-link"
                  href="#"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link className="page-link" href="#" onClick={nextPage}>
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
