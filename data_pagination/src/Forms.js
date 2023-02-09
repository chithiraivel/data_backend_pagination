import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import NewForm from "./NewForm";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";
import New2 from "./New2";

const Forms = () => {
  const navi = useNavigate();
  const setOpen = () => {
    // setValue(!value);
    // setOpen(true)
    navi('/new2')
  };
  // const [value, setValue] = useState(true);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState(null);
  const [area, setArea] = useState(null);
  const [errMsg , setErrMsg]=useState("")
  
  const handleFirst = (event) => {
      if(event.target.name == "first"){
        setFirst(event.target.value)
      }
      if(event.target.name == "second"){
        setSecond(event.target.value)
      }
      if(event.target.name == "mobile"){
        if(isNaN(event.target.value)){
          setErrMsg('please enter number')
        }
        else{
          setErrMsg('')
        }
        setMobile(event.target.value)
        
      }
      if(event.target.name == "city"){
        setCity(event.target.value)
      }
      if(event.target.name == "area"){
        setArea(event.target.value)
      }
      
  }
  
  const handleSubmit = () => {
    if(errMsg !== "") return 
    if(mobile.length !== 10) return
    console.log(first , second , mobile ,city ,area);
}
const [open ,setOpen1] =useState(false)

  return (
    <div>
       
      <div className="form">
        <div>
          {/* <p style={{fontSize:'20px',fontWeight:'bolder'}}>Contact List (834)</p> */}
        </div>
        <div>
          <span>
            <i class="fa fa-list" aria-hidden="true"></i>
          </span>
          <span>
            <button className="form2">
              <i class="fa fa-th-large" style={{ color: "white" }}></i>
            </button>
          </span>
          <span>
            <button className="form3" onClick={() => setOpen()}>
              + Add New
            </button>
          </span>
          <span>
            <i className="fa fa-ellipsis-h"></i>
          </span>
        </div>
        
      </div>
    

      {/* <div>
        {value ? (
          <div></div>
        ) : (
         <SideBar/>
    
          <Dialog open={true} onClose={ () => setOpen(false)}>
            <div style={{ width: "100%", height: "600px" }}>   
           
              <div className="box">
              <h2 style={{textAlign:'center'}}>Registration Form</h2>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>FirstName :</span>
                  <br />
                  <TextField size="small" name="first" onChange={ (event) => handleFirst(event)} placeholder='FirstName'/>
                </div>
                <div>
                  <span>SecondName :</span>
                  <br />
                  <TextField size="small" name="second" onChange={ (event) => handleFirst(event)} placeholder='SecondName'/>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>MobileNumber :</span>
                  <br />
                  <TextField size="small" name="mobile" onChange={ (event) => handleFirst(event)} placeholder='MobileNumber'/>
                  <p style={{color:'red'}}>{errMsg}</p>
                </div>
                <div>
                  <span>City :</span>
                  <br />
                  <TextField size="small" name="city" onChange={ (event) => handleFirst(event)} placeholder='City'/>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span>Email :</span>
                  <br />
                  <TextField size="small" name="mobile" onChange={ (event) => handleFirst(event)} placeholder='Email '/>
                  <p style={{color:'red'}}>{errMsg}</p>
                </div>
                <div>
                  <span>Country :</span>
                  <br />
                  <TextField size="small" name="city" onChange={ (event) => handleFirst(event)} placeholder='Country'/>
                </div>
              </div>
              <div>

              <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup>
                <div style={{display:'flex'}}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
                </div>
             
              </RadioGroup>
                </div>
              <div>
                <span>
                  Address :<br />
                  <textarea name="area" onChange={ (event) => handleFirst(event)} style={{height:'50px',width:'460px'}} />
                </span>
               
              </div>
              <div style={{height:'60px',width:'60px',margin:'0 auto'}}>
              <button style={{height:'40px',width:'100px',borderRadius:'10px',border:'none',backgroundColor:'orange',fontWeight:'bolder'}} onClick={ () => handleSubmit()}>Submit</button>
              </div>
              
            </div>
         
          </div>
          </Dialog>
        )}
      </div> */}
       {/* <Dashboard/> */}
    </div>
    

  );
};

export default Forms;
