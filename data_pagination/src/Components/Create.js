import React from "react";
import  TextField  from "@mui/material/TextField";
import  Button  from "@mui/material/Button";
import { useState } from "react";
import { API_URL } from "../Constants/URL";
import axios from 'axios'

const Create = () => {

    const [name ,setFirstName]=useState("")
    const [PhoneNumber ,setPhoneNumber]=useState("")
    const [email ,setEmail]=useState("")

    const getData = async () => {
       await axios.post(API_URL,{
            name,
            PhoneNumber,
            email
        })
    }
  return (
    <div style={{display:'flex',justifyContent:"space-evenly",marginTop:'100px',width:'65%',marginLeft:'200px'}}>
      <TextField
          label="Name"
          size="small"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          size="small"
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <Button  variant="contained" onClick={getData}>Create</Button>
    </div>
  );
};

export default Create;
