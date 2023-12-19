import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function Kpi({ title, value, description }) {
  return (
    <Box sx={{ margin: "auto", mt: 2 }}>
      <Card variant="outlined" style={{ borderRadius: "20px", padding: "3%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <br/>
          <Typography
            variant="h5"
            component="div"
            style={{ textAlign: "center", fontWeight: "600" }}
          >
            {value}
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="#f75733"
            style={{ textAlign: "center", fontSize:"13px" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Kpi;
