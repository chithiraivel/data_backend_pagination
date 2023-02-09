import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import TextField from "@mui/material/TextField";
import a from "../../calender/src/Assets/11.png";
import b from "../../calender/src/Assets/12.png";
import AddCardIcon from "@mui/icons-material/AddCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import { useNavigate } from "react-router-dom";
import c from "../../calender/src/Assets/1.jfif";
import { useForm } from "react-hook-form";
import  FormControl  from "@mui/material/FormLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Button from '@mui/material/Button';
import Calender from "./Calender";
import FirstPage from "./FirstPage";
import New1 from "./New1";
import { API_URL } from "./Constants/URL";
import axios from 'axios'



const NewForm = (props) => {
  const [image, setImage] = useState([]);
  const [fileName, setFileName] = useState("No Selected File");

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [first, setFirst] = useState("");

  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nation, setNation] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [facebook, setFacebook] = useState("");
  const [google, setGoogle] = useState("");
  const [obj,setObj]=useState([])
  const [isLive,setIsLive]=useState(false)


  const handleFirst = (event) => {
    if (event.target.name == "firstName") {
      setFirst(event.target.value);
    }
    if (event.target.name == "lastName") {
      setLast(event.target.value);
    }
    if (event.target.name == "password") {
      setPassword(event.target.value);
    }
    if (event.target.name == "email") {
      setEmail(event.target.value);
    }
    if (event.target.name == "phone") {
      setPhone(event.target.value);
    }
    if (event.target.name == "address") {
      setAddress(event.target.value);
    }
    if (event.target.name == "nation") {
      setNation(event.target.value);
    }
    if (event.target.name == "gender") {
      setGender(event.target.value);
    }
    if (event.target.name == "languages") {
      setLanguages(event.target.value);
    }
    if (event.target.name == "twitter") {
      setTwitter(event.target.value);
    }
    if (event.target.name == "linkedin") {
      setLinkedIn(event.target.value);
    }
    if (event.target.name == "facebook") {
      setFacebook(event.target.value);
    }
    if (event.target.name == "google") {
      setGoogle(event.target.value);
    }

  };
  const save = async (e) => {
    e.preventDefault()
    // if(first == "" ){
      // localStorage.setItem('isLive' ,JSON.stringify(isLive))
    //  }else{
      //  setObj([...obj,{name:first ,developer:nation,phone:phone,email:email,address:address}])
      //  console.log("obj",obj);
      //  localStorage.setItem('obj' ,JSON.stringify(obj))
      // localStorage.setItem('isLive' ,JSON.stringify(!isLive))
    //  }
    await axios.post(API_URL,{
      first,
      email,
      phone,
      address,
      nation
  })
  };
 
 

  const { register,handleSubmit,  watch, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
   
  

  return (
    <div>
      
      <div className="three">
        <div className="two">
          <p>
            <span style={{ fontSize: "20px", color: "gray" }}>My Profile</span>{" "}
            <ChevronRightIcon />{" "}
            <span
              style={{ fontSize: "20px", fontWeight: "bold", opacity: "0.7" }}
            >
              {" "}
              Edit Profile
            </span>
          </p>
          <p>
          
          <form onClick={handleSubmit(onSubmit)}>
            <button  onClick={(e) =>save(e)} >
              Save <ArrowForwardIcon />{" "}
            </button>
            </form>
          </p>
        </div>
        <div className="one">
        <form style={{ margin: "20px 50px", lineHeight: "75px" }} >
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <div className="avatar">
                <div>
                  <label htmlFor="file" id="icon">
                    <EditLocationAltIcon />
                  </label>
                </div>
                <input
                  type="file"
                  onChange={handleChange}
                  id="file"
                  style={{ display: "none" }}
                />
                <img src={file} className="avatar2" />
              </div>

                <div style={{ display: "flex" }}>
                  <div>  
                    <TextField
                    sx={{width:'170px'}}
          id="outlined-basic"
          label="FirstName"
          name="first"
          variant="outlined"
          size="small"
          
          fullWidth
          {...register("firstName", {required : "FirstName is required ."})}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
          onChange={(event) => setFirst(event.target.value)}
          inputProps={{
            style: {
                height: "22px",
            },
        }}
        />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <TextField
                         sx={{width:'170px',height:'30px'}}
                         id="outlined-basic"
                         label="LastName"
                         name="lastName"
                         variant="outlined"
                         size="small" 
                         fullWidth
                         {...register("lastName", {required : "Last Name is required ."})}
                         error={Boolean(errors.lastName)}
                         helperText={errors.lastName?.message}
                        onChange={(event) => handleFirst(event)}
                        inputProps={{
                            style: {
                                height: "22px",
                            },
                        }}
                     />
                  </div>
                </div>
                <div>
                <TextField
                         sx={{width:'26.5vw'}}
                         id="outlined-basic"
                         label="Password"
                         name="password"
                         type="password"
                         variant="outlined"
                         size="small" 
                         fullWidth
                         {...register("password", {required : "Password is required ."})}
                         error={Boolean(errors.password)}
                         helperText={errors.password?.message}
                        onChange={(event) => handleFirst(event)}
                        inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                </div>
                <div>
                <TextField
                         sx={{width:'26.5vw'}}
                         id="outlined-basic"
                         label="Email"
                         name="email"
                         type="email"
                         variant="outlined"
                         size="small" 
                         fullWidth
                         {...register("email", {required : "Email is required ."})}
                         error={Boolean(errors.email)}
                         helperText={errors.email?.message}
                        onChange={(event) => setEmail(event.target.value)}
                        inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                </div>
                <div>
                <TextField
                         sx={{width:'26.5vw'}}
                         id="outlined-basic"
                         label="PhoneNumber"
                         name="phone"
                         variant="outlined"
                         type="number"
                         size="small" 
                         fullWidth
                         {...register("phone", {required : "PhoneNumber is required ."})}
                         error={Boolean(errors.phone)}
                         helperText={errors.phone?.message}
                        onChange={(event) => setPhone(event.target.value)}
                        inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                </div>

                <div>
                <TextField
                         sx={{width:'26.5vw'}}
                         id="outlined-basic"
                         label="Address"
                         name="address"
                         variant="outlined"
                         size="small" 
                         fullWidth
                         {...register("address", {required : "Address is required ."})}
                         error={Boolean(errors.address)}
                         helperText={errors.address?.message}
                        onChange={(event) => setAddress(event.target.value)}
                        inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                </div>
                <div>
                <TextField
                         sx={{width:'26.5vw'}}
                         id="outlined-basic"
                         label="Nation"
                         name="nation"
                         variant="outlined"
                         value="Indian"
                         size="small" 
                         fullWidth
                         {...register("nation", {required : "Nation is required ."})}
                         error={Boolean(errors.nation)}
                         helperText={errors.nation?.message}
                        onChange={(event) => setNation(event.target.value)}
                        inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                </div>
            </Grid>

            <Grid item xs={12} md={8}>
              <div style={{ margin: "20px 120px", lineHeight: "75px" }}>
                <FormControl error={Boolean(errors.gender)}>
                    <FormLabel component="legend">Choose Your Gender</FormLabel>
                    <RadioGroup row aria-Label="gender" name="gender">
                          <FormControlLabel 
                              value="male"
                              control={
                                <Radio {...register("gender", {required:"Choose your gender"})}/>
                              }
                              label="Male"
                          />
                          <FormControlLabel 
                              value="female"
                              control={
                                <Radio {...register("gender", {required:"Choose your gender"})}/>
                              }
                              label="Female"
                          />
                          <FormControlLabel 
                              value="others"
                              control={
                                <Radio {...register("gender", {required:"Choose your gender"})}/>
                              }
                              label="Others"
                          />
                    </RadioGroup>
                </FormControl>

                <FormControl error={Boolean(errors.gender)}>
                    <FormLabel component="legend">Choose Your Languages</FormLabel>
                    <RadioGroup row aria-Label="languages" name="languages">
                          <FormControlLabel 
                              value="tamil"
                              control={
                                <Radio {...register("languages", {required:"Choose your Languages"})}/>
                              }
                              label="Tamil"
                          />
                          <FormControlLabel 
                              value="english"
                              control={
                                <Radio {...register("languages", {required:"Choose your Languages"})}/>
                              }
                              label="English"
                          />
                          <FormControlLabel 
                              value="hindi"
                              control={
                                <Radio {...register("languages", {required:"Choose your Languages"})}/>
                              }
                              label="hindi"
                          />
                    </RadioGroup>
                </FormControl>

                {/* <div style={{ display: "flex" }}>
                  <div>
                    <span>Date Of Birth</span>
                    <br />
                    <select style={{ width: "100px", height: "25px" }}>
                      <option>January</option>
                      <option>Febrary</option>
                      <option>March</option>
                    </select>
                    <select style={{ width: "60px", height: "25px" }}>
                      <option>31</option>
                      <option>30</option>
                      <option>29</option>
                    </select>
                    <select style={{ width: "100px", height: "25px" }}>
                      <option>1998</option>
                      <option>1997</option>
                      <option>1996</option>
                    </select>
                  </div>
                </div> */}

                <div style={{ display: "flex" }}>
                  <div>
                  <TextField
                         sx={{width:'16.5vw'}}
                         id="outlined-basic"
                         label="Twitter"
                         name="twitter"
                         variant="outlined"
                         value="www.Twitter.com"
                         size="small" 
                         fullWidth
                         {...register("twitter", {required : "Twitter is required ."})}
                         error={Boolean(errors.twitter)}
                         helperText={errors.twitter?.message}
                         inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                  <TextField
                         sx={{width:'17vw'}}
                         id="outlined-basic"
                         label="LinkedIn"
                         name="linkedin"
                         variant="outlined"
                         value="www.Linkedin.com"
                         size="small" 
                         fullWidth
                         {...register("linkedin", {required : "LinkedIn is required ."})}
                         error={Boolean(errors.linkedin)}
                         helperText={errors.linkedin?.message}
                         inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                  <TextField
                         sx={{width:'16.5vw'}}
                         id="outlined-basic"
                         label="FaceBook"
                         name="facebook"
                         value="www.facebook.com"
                         variant="outlined"
                         size="small" 
                         fullWidth
                         {...register("facebook", {required : "FaceBook is required ."})}
                         error={Boolean(errors.facebook)}
                         helperText={errors.facebook?.message}
                         inputProps={{
                          style: {
                              height: "22px",
                          },
                      }}
                     />
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                  <TextField
                         sx={{width:'17vw'}}
                         id="outlined-basic"
                         label="Google"
                         name="google"
                         variant="outlined"
                         value="www.google.com"
                         size="small" 
                         fullWidth
                         {...register("google", {required : "Google is required ."})}
                         error={Boolean(errors.google)}
                         helperText={errors.google?.message}
                         inputProps ={{
                          style:{
                            height:'22px'
                          }
                         }}
                     />
                  </div>
                </div>

                {/* <div>
                  <span>Slogan</span>
                  <br />
                  <input
                    type="text"
                    style={{ width: "73vh", height: "25px" }}
                  />
                </div>
                <div>
                  <span>Payment Method</span>
                  <div style={{ display: "flex" }}>
                    <div style={{ height: "50px", width: "250px" }}>
                      <img src={a} style={{ height: "30px", width: "110px" }} />
                    </div>
                    <div style={{ height: "50px", width: "100px" }}>
                      <img src={b} style={{ height: "30px", width: "110px" }} />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    style={{
                      border: "none",
                      color: "green",
                      marginTop: "40px",
                    }}
                  >
                    <AddCardIcon /> ADD PAYMENT METHOD
                  </button>
                </div> */}
              </div>
            </Grid>
          </Grid>
              </form>
        </div>
      </div>
     <div>
     
     </div>
    </div>
  );
};

export default NewForm;
