import React, { useEffect, useState } from "react";
import AllTvShows from "../components/AllTvShows";
import axios from "axios";

const Home = () => {
  const [allTvShows, setAllTvShows] = useState([]);
  useEffect(() => {
    const alltvshows = async () => {
      try {
        const res = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setAllTvShows(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    alltvshows();
  }, []);
  //   console.log("/////////");
  //   console.log(allTvShows);
  //   console.log("/////////");
  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl py-2">All Tv Shows</h1>
        <AllTvShows allTvShows={allTvShows} />
      </div>
    </>
  );
};

export default Home;
