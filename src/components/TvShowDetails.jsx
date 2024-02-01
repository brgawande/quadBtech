import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const TvShowDetails = ({ selectedShowDetails }) => {
  // const imageurl = selectedShowDetails[0]?.show?.image?.medium;
  // const url = imageurl.substring(26);
  // console.log(url);

  console.log(selectedShowDetails);
  return (
    <div>
      <div className="bb">
        {selectedShowDetails &&
          selectedShowDetails.map((item) => (
            <div className="bb min-h-[90vh] flex ">
              {/* left side image starts */}
              <div className="bb w-[30%]">
                <img
                  className="h-[100%]"
                  src={item?.show?.image?.original}
                  alt={item?.show?.name}
                />
              </div>
              {/* left side image ends */}
              {/* Right side image starts */}
              <div className="bb w-[70%] bg-black pl-8 pr-48 ">
                <h1 className="text-white text-4xl my-2 font-bold uppercase ">
                  {" "}
                  {item?.show?.name}
                </h1>
                <h1 className="text-white flex text-4xl my-2 font-bold uppercase ">
                  {" "}
                  <StarRating rating={item?.show?.rating?.average} />
                </h1>
                <div className="text-white pt-4 flex items-center justify-between">
                  <p className="font-semibold text-xl">
                    {item?.show?.premiered}
                  </p>
                  <p className="font-semibold text-xl">
                    {item?.show?.runtime} min
                  </p>
                  <p className="font-semibold text-xl">{item?.show?.genres}</p>
                </div>
                <p className="text-white text-xl pt-8 font-semibold capitalize ">
                  {" "}
                  {item?.show?.summary}
                </p>
                <Link
                  to={`/booking/${item?.show?.name}/${item?.show?.language}/${item?.show?.runtime}/${item?.show?.genres}`}
                >
                  <button className="mt-6 px-16 py-2 font-bold rounded-full text-black bg-yellow">
                    Book Now
                  </button>
                </Link>
              </div>
              {/* Right side image ends */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TvShowDetails;
