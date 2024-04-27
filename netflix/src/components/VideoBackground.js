import React from "react";
import useMovieById from "../hooks/useMovieById";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, bool }) => {
  const trailer = useSelector((state) => state.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"} `}
        src={`https://www.youtube.com/embed/${trailer?.key}?si=OiEvQjfiEHJArrPA&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
