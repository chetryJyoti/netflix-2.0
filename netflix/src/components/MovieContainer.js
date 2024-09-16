import React from "react";
import MovieList from "./MovieList";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/wishListSlice"; 

const MovieContainer = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movie);
  const wishListItems = useSelector((store) => store.wishList.wishListItems);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
        <MovieList
          title={"Now Playing Movies"}
          movies={movie.nowPlayingMovies}
        />
        <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
        
        <h1 className="text-3xl py-3 ml-[30px] mt-[10px] text-white">
          WishList
        </h1>
        <div className="flex ml-[30px] overflow-x-auto scroll cursor-pointer hide-scrollbar mr-[30px]">
          {wishListItems.map((movies, index) => (
            <div key={index}>
              <div className="flex w-48 pr-2">
                <img src={movies} alt="movie-banner" />
              </div>
              <div className="flex justify-center items-center">
                <span className="text-white font-extrabold">REMOVE</span>
                <button
                  onClick={() => dispatch(removeItem(index))} // Remove item by index
                  className="font-extrabold text-white"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
