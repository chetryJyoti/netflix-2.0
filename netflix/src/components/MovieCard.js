import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";
import {addItem} from "../redux/wishListSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;

  const handleItems = (item) =>{
    dispatch(addItem(item));
    console.log(item);
  }

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div>
      <div className="w-48 pr-2" onClick={handleOpen}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="movie-banner" />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-white font-extrabold">WISHLIST</span>
        <button onClick={()=>handleItems(`${TMDB_IMG_URL}/${posterPath}`)} className="font-extrabold text-white">+</button>
      </div>
    </div>
  );
};

export default MovieCard;
