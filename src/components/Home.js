import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import { getCountryDetails } from "../api/api";
import WithRouting from "./WithRouting";

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { countryName: null, found: true };
  }
  async handleSearch() {
    // const { navigate } = this.props;
    try {
      let { data } = await getCountryDetails(this.state.countryName);
      this.setState = { found: true };
      
      this.props.navigate(`/details/${this.state.countryName}`, {
        state: { data },
      });
    } catch (err) {
      this.setState = { found: false };
      console.log(err);
    }
  }
  handleOnChange(event) {
    if (event.key === "Enter") this.handleSearch();
    this.setState({ countryName: event.target.value.trim() });
  }
  render() {
    return (
      <Paper
        variant="outlined"
        sx={{
          textAlign: "center",
          margin: "auto",
          marginTop: "2%",
          width: "80%",
          height: "30vh",
        }}
      >
        <Typography variant="h4" color="primary">
          COUNTRY DATA
        </Typography>
        <Stack
          direction="row"
          sx={{ margin: "10%" }}
          justifyContent="center"
          spacing={2}
        >
          <TextField
            type="text"
            id="outlined-basic"
            onChange={this.handleOnChange.bind(this)}
            label="Enter Country Name"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            onClick={this.handleSearch.bind(this)}
            disabled={this.state.countryName?.length === 0 ? true : false}
          >
            Search
          </Button>
        </Stack>
        {!this.state.found && (
          <h2 style={{ color: "red" }}>Country Not Found</h2>
        )}
      </Paper>
    );
  }
}

export default WithRouting(Home);
