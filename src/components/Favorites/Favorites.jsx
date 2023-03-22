import React from "react";
import style from "./Favorites.module.css";
import { useGlobalContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const Favorites = () => {
  let { favorite, AddToFavorite, removeFromFavorite } = useGlobalContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className={`  ${style.favorites}`}>
      <div className="row   ">
        {favorite.length > 0 ? (
          favorite.map((book, index) => (
            <div className=" col-md-3 col-6 col-lg-3" key={index}>
              <div className={style.card}>
                <img
                  src={book.image_url}
                  onClick={() => navigate(`/books/${book.id}`)}
                  className="card-img-top shadow p-3  mt-4 bg-body-tertiary rounded"
                  alt="..."
                />
              </div>
              <div className={` ${style.book_item_info}`}>
                <div>
                  <Link to={`/books/${book.id}`} style={{ color: "aliceblue" }}>
                    <span> {book.title.slice(0, 20)}...</span>
                  </Link>
                  <div className="py-2 ">
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
          ))
        ) : (
          <>
            <div>
              <h1 style={{ color: "sandybrown" }}>
                You don't have any favorites books yet!!
              </h1>

              <Link
                to={"/book"}
                className="btn btn-secondary my-3 "
                type="button"
              >
                <i class="fa-solid fa-arrow-left-long"></i>
                <span className="px-2">Go Back</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
