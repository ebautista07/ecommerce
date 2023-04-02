import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const Item = ({ element }) => {
  return (
    <Card
      sx={{
        width: 270,
        height: 370,
        backgroundColor: "#151f28",
        color: "white",
        border: "1px solid #151f28",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px #151f28",
        marginLeft:"50px",
        marginRight:"50px",
        
      }}
    >
      <CardMedia sx={{ height: 200 }} image={element.img} />
      <CardContent sx={{ height: 110 }}>
        <Typography  style={{ fontFamily: "Nunito", fontSize: "18px" }} component="div" align="center">
          {element.title}
        </Typography>
        <Typography variant="body" component="div" align="center" style={{ fontFamily: "Nunito" }}> 
          ${toThousand(element.price)}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Link to={`/itemDetail/${element.id}`}>
          <Button className="btn4"
            style={{ backgroundColor: "#7baab1", fontFamily: "Nunito", color:"white"}}
            component="div"
            justifyContent="center"
            size="small"
            variant="contained"
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
