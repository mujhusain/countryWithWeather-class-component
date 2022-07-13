import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { getCountryDetails } from "../api/api";
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate();
  const [countryName, setCountryName] = useState(null);

  const handleOnChange = (e) => {
    if (e.key === "Enter") handleSearch();
    setCountryName(e.target.value.trim());
  };
  const handleSearch = async() => {
    try{
        let {data}=await getCountryDetails(countryName);
        navigate(`/details/${countryName}`,{state:{data}});
        console.log(data);
    }catch(err){
        console.log(err);
    }
  };
  return (
    <Paper
      variant="outlined"
      sx={{ margin: "auto", marginTop: "2%", width: "80%", height: "50vh" }}
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
          type="string"
          id="outlined-basic"
          onChange={handleOnChange}
          label="Enter Country Name"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          onClick={() => handleSearch()}
          disabled={countryName?.length === 0 ? true : false}
        >
          Search
        </Button>
      </Stack>
    </Paper>
  );
}
