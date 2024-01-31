import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const TvShowDetails = ({ selectedShowDetails }) => {
  return (
    <div>
      <div>
        {selectedShowDetails &&
          selectedShowDetails.map((item) => (
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item?.show?.image?.original}
                  alt={item?.show?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item?.show?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item?.show?.summary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    to={`/booking/${item?.show?.name}/${item?.show?.language}`}
                  >
                    <Button variant="contained">Book Show Tickets</Button>
                  </Link>

                  {/* <Button size="small">Learn More</Button> */}
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default TvShowDetails;
