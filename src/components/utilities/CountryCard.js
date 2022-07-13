import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import WeatherCard from "./WeatherCard";
import { getWeatherData } from "../../api/api";

export default function CountryCard({
  name,
  capital,
  poplation,
  latlong,
  flag,
}) {
  const [showWeather, setShowWeather] = useState(false);
  const [data, setWeatherData] = useState();

  const handleClick = async () => {
    setShowWeather((prev) => !prev);
    try {
      const { data } = await getWeatherData(capital);
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Grid item lg={3}>
      <Card sx={{ maxWidth: 345, minHeight: 300 }} elevation={3}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={flag} alt={name} />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ height: 40 }}
              component="div"
            >
              Country Name: {name}
            </Typography>
            <Typography gutterBottom variant="body2" component="h6">
              Capital: {capital}
            </Typography>
            <Typography variant="body2" component="h6" color="text.secondary">
              Population: {poplation}
            </Typography>
            <Typography variant="body2" component="h6" color="text.secondary">
              LatLong: {latlong}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleClick}
          >
            Capital Weather
          </Button>
        </CardActions>
      </Card>
      {showWeather && (
        <WeatherCard
          cityName={capital}
          temp={data?.current?.temperature}
          time={data?.current?.observation_time}
          weather_desc={data?.current?.weather_descriptions}
          wind_speed={data?.current?.wind_speed}
          precip={data?.current?.precip}
          icon={data?.current?.weather_icons}
          humidity={data?.current?.humidity}
          cloudcover={data?.current?.cloudcover}
          uv_index={data?.current?.uv_index}
        />
      )}
    </Grid>
  );
}
