import axios from "axios";
import { Now_Playing_Movies, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Now_Playing_Movies, options);
    dispatch(getNowPlayingMovies(res.data.results));
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default useNowPlayingMovies;
