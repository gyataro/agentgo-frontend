import sellService from "../services/sellService";
import { useEffect, useState } from "react";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SellCard = ({ sell }) => (
  <Card>
    <CardActionArea component={Link} to={`/sells/${sell._id}`}>
      <CardContent>
        <Typography variant="h6" noWrap>
          {sell.address}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          #{sell.caseNumber}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ref: {sell.reference}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

const SellList = () => {
  const [sells, setSells] = useState([]);

  useEffect(() => {
    sellService
      .readAll()
      .then((result) => setSells(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {sells.map((sell) => (
        <SellCard key={sell._id} sell={sell} />
      ))}
    </div>
  );
};

export default SellList;
