import React, { useEffect, useState } from "react";
import TvShowDetails from "../components/TvShowDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [selectedShowDetails, setSelectedShowDetails] = useState([]);
  const [allTvShows, setAllTvShows] = useState([]);
  useEffect(() => {
    const alltvshows = async () => {
      try {
        const res = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setAllTvShows(res.data);

        const selectedShow = res.data.find(
          (show) => show.show.id.toString() === id
        );
        setSelectedShowDetails([selectedShow]);
      } catch (error) {
        console.log(error);
      }
    };
    alltvshows();
  }, [id]);
  console.log("lllllll");
  console.log(selectedShowDetails);
  console.log("lllllll");

  return (
    <div>
      {/* <h1>Tv Show Details</h1> */}
      {/* <h1>{id}</h1> */}
      <TvShowDetails selectedShowDetails={selectedShowDetails} />
    </div>
  );
};

export default Details;
