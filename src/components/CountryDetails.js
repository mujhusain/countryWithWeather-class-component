import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CountryCard from "./utilities/CountryCard";
import{Link} from'react-router-dom';
import WithRouting from './WithRouting'

// Hoc-, withRouter
import React, { Component } from 'react'

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state={data:null}
  }
  componentDidMount(){
    this.setState({data:this.props.location?.state.data});
  }
  render() {
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
        {this.state.data?.map((item, index) => {
          return (
            <CountryCard
            key={index}
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
    )
  }
}

export default WithRouting(CountryDetails);