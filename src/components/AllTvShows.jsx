import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa6";

const AllTvShows = ({ allTvShows }) => {
  console.log(allTvShows);
  return (
    <div>
      <div>
        {allTvShows && allTvShows.length > 0 ? (
          <div>
            {allTvShows.map((item) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 440 }}
                  image={
                    item?.show?.image?.medium ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l2N8CSq3Pz_Avi5abDq_iEZErbODkcW3Lg&usqp=CAU"
                  }
                  title={item?.show?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.show?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <FaStar className="text-yellow-500" />{" "}
                    {item?.show?.rating?.average}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Show Details</Button>
                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default AllTvShows;
