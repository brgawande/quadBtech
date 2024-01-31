import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(existingBookings);
  }, []);
  console.log(bookings);
  return (
    <div>
      <div>
        <h1>My Bookings</h1>
        {bookings && bookings.length > 0 ? (
          <>
            {bookings.map((item) => (
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 440 }}
                  image={
                    //   item?.show?.image?.medium ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l2N8CSq3Pz_Avi5abDq_iEZErbODkcW3Lg&usqp=CAU"
                  }
                  // title={item?.show?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <FaStar className="text-yellow-500" /> {item?.language}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </>
        ) : (
          <h1>Not Yet Booked? book now</h1>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
