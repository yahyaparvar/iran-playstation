import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
interface Props {
  title: string;
  description: string;
  image: string;
  action: string;
  country: string;
  onClick: () => void;
}
export default function PSNCard(props: Props) {
  return (
    <Card onClick={props.onClick} sx={{ maxWidth: 345, marginLeft: 8 }}>
      <CardActionArea>
        <img src={`https://flagsapi.com/${props.country}/flat/64.png`}></img>
        <CardMedia component="img" image={props.image} alt="green iguana" />
        <CardContent>
          <Typography
            sx={{ color: "black" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            $10 - $100
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.action}
        </Button>
      </CardActions>
    </Card>
  );
}
