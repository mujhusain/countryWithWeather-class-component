import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "./utilities/CountryCard";
import{Link} from'react-router-dom';

export default function CountryDetails() {
  const location = useLocation();
  const [data, setData] = useState(null);
  

  useEffect(() => {
    setData(location?.state.data)
    console.log(data);
  }, [data]);

  return (
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Link to='/'>

        <Paper variant="outlined" sx={{height: "50px", margin: "auto"}} >
            <Typography variant='h4' align='center' color='primary' gutterBottom>Country Details</Typography>
        </Paper>
        </Link>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="stretch"
          wrap="wrap"
          spacing={2}
        >
          {data?.map((item, index) => {
            return (
              <CountryCard
                name={item.name.common}
                capital={item.capital[0]}
                poplation={item.population}
                latlong={item.latlng[0] + ", " + item.latlng[0]}
                flag={item.flags.svg}
              />
            );
          })}
        </Grid>
      </Box>
  );
}
