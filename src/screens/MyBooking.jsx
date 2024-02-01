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
        <>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                My Bookings
              </h2>
              {bookings && bookings.length > 0 ? (
                <>
                  {" "}
                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {bookings.map((item) => (
                      <div
                        key={item.id}
                        className="border border-[#cdcdcd] rounded-lg shadow-lg group relative pb-8"
                      >
                        <div className="mt-4 flex flex-col gap-y-4 justify-between items-center">
                          <div>
                            <h3 className=" text-black font-bold text-2xl py-3">
                              <a>
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 font-bold text-2xl"
                                />
                                {item.name}
                              </a>
                            </h3>
                            <p className="mt-1  text-black font-semibold text-xl">
                              Duration - {item.duration}
                            </p>
                          </div>
                          <p className=" text-black font-semibold text-xl">
                            {item.generes}
                          </p>
                          <p className=" text-black font-semibold text-xl">
                            language - {item.language}
                          </p>
                          <p className=" text-black font-semibold text-xl">
                            Peoples - {item.people}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default MyBooking;
