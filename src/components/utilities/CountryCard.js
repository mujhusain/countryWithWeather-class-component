import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import WeatherCard from "./WeatherCard";
import { getWeatherData } from "../../api/api";


export default class CountryCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWeather: false,data:null};
  }
  async handleClick(event) {
    this.setState({showWeather:!this.state.showWeather});
    try {
      const { data } = await getWeatherData(this.props.capital);
      this.setState({data:data});
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
          <Grid item lg={3}>
      <Card sx={{ minWidth: 300, minHeight: 300 }} elevation={3}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={this.props.flag} alt={this.props.name} />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              sx={{ height: 40 }}
              component="div"
            >
              Country Name: {this.props.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="h6">
              Capital: {this.props.capital}
            </Typography>
            <Typography variant="body2" component="h6" color="text.secondary">
              Population: {this.props.poplation}
            </Typography>
            <Typography variant="body2" component="h6" color="text.secondary">
              LatLong: {this.props.latlong}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={this.handleClick.bind(this)}
          >
            Capital Weather
          </Button>
        </CardActions>
      </Card>
      {this.state.showWeather && (
        <WeatherCard
          cityName={this.props.capital}
          temp={this.state.data?.current?.temperature}
          time={this.state.data?.current?.observation_time}
          weather_desc={this.state.data?.current?.weather_descriptions}
          wind_speed={this.state.data?.current?.wind_speed}
          precip={this.state.data?.current?.precip}
          icon={this.state.data?.current?.weather_icons}
          humidity={this.state.data?.current?.humidity}
          cloudcover={this.state.data?.current?.cloudcover}
          uv_index={this.state.data?.current?.uv_index}
        />
      )}
    </Grid>
    )
  }
}