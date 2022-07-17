import { Paper, Typography, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { getCountryDetails } from "../api/api";
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate();
  const [countryName, setCountryName] = useState(null);
  const [found,setFound]=useState(true)

  const handleOnChange = (e) => {
    if (e.key === "Enter") handleSearch();
    setCountryName(e.target.value.trim());
  };
  const handleSearch = async() => {
    try{
        let {data}=await getCountryDetails(countryName);
        setFound(true);
        navigate(`/details/${countryName}`,{state:{data}});
      }catch(err){
        setFound(false);
        console.log(err);
    }
  };
  return (
    <Paper
      variant="outlined"
      sx={{textAlign:'center', margin: "auto", marginTop: "2%", width: "80%", height: "30vh" }}
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
          type='text'
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
      {!found && <h2 style={{color:'red'}}>Country Not Found</h2>}
    </Paper>
  );
}
