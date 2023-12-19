import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function Kpi({ title, value, description }) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 300, margin: 'auto', mt: 2 }}>
      <Card variant="outlined" style={{border:"2px solid black"}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div" style={{textAlign:"center",fontWeight:"600"}}>
            {value}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{textAlign:"center"}}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Kpi;
