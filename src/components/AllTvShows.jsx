import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllTvShows = ({ allTvShows }) => {
  console.log(allTvShows);

  const products = [
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 1,
      name: "Earthen Bottle",
      href: "#",
      price: "$48",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Nomad Tumbler",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Focus Paper Refill",
      href: "#",
      price: "$89",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: 4,
      name: "Machined Mechanical Pencil",
      href: "#",
      price: "$35",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ];
  return (
    // <div>
    //   <div>
    //     {allTvShows && allTvShows.length > 0 ? (
    //       <div>
    //         {allTvShows.map((item) => (
    //           <Card sx={{ maxWidth: 345 }} key={item?.show?.id}>
    //             <CardMedia
    //               sx={{ height: 440 }}
    //               image={
    //                 item?.show?.image?.medium ||
    //                 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l2N8CSq3Pz_Avi5abDq_iEZErbODkcW3Lg&usqp=CAU"
    //               }
    //               title={item?.show?.name}
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5" component="div">
    //                 {item?.show?.name}
    //               </Typography>
    //               <Typography variant="body2" color="text.secondary">
    //                 <FaStar className="text-yellow-500" />{" "}
    //                 {item?.show?.rating?.average}
    //               </Typography>
    //             </CardContent>
    //             <CardActions>
    //               <Link to={`/details/${item?.show?.id}`}>
    //                 <Button variant="contained">Show Details</Button>
    //               </Link>

    //               {/* <Button size="small">Learn More</Button> */}
    //             </CardActions>
    //           </Card>
    //         ))}
    //       </div>
    //     ) : (
    //       <h1>Loading</h1>
    //     )}
    //   </div>
    // </div>
    <div className="bg-white">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* {allTvShows && allTvShows.length > 0 ? ({allTvShows.map((item) => ( */}
          {allTvShows && allTvShows.length > 0 ? (
            <>
              {" "}
              {allTvShows.map((item) => (
                <a key={item?.show?.name} className="group">
                  <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={
                        item?.show?.image?.medium ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5l2N8CSq3Pz_Avi5abDq_iEZErbODkcW3Lg&usqp=CAU"
                      }
                      alt={item?.show?.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4  text-black font-bold text-xl">
                    {item?.show?.name}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 flex">
                    <FaStar className="text-yellow-500" />
                    {item?.show?.rating?.average || 0}
                  </p>
                </a>
              ))}
            </>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTvShows;
