import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import React, { useEffect, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Tabs from "@mui/material/Tabs";
import Calender from "./Calender";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import NewForm from "./NewForm";
import Button  from "@mui/material/Button";

const Dashboard = () => {
  const navi = useNavigate();
  const arr = [
    { name: "DASHBOARD", icon: "fa fa-home" },
    {
      name: "INVENTARY",
      icon: "fa fa-th-large",
      nested: ["CONTACT", "CALENDER", "CLOCK"],
    },
    { name: "NOTIFICATION", icon: "fa fa-commenting-o" },
    { name: "DIRECTION..", icon: "fa fa-sitemap" },
    { name: "PROFILE", icon: "fa fa-user" },
  ];
  const [array, setArray] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    let a = JSON.parse(localStorage.getItem("obj"));
    setArray(a);
  };
  const dashboard =(e) => {
   
    if(e.target.innerHTML == 'CONTACT'){
      setVal(e.target.innerHTML)
      if(array == " "){
        console.log('hii');
      }else{
        navi('/new1')
        setActive(!active);
      }
       
    }
    if(e.target.innerHTML == 'CALENDER'){
      console.log('calender');
      
    }
    if(e.target.innerHTML == 'CLOCK'){
      console.log('clock');
    }
    
  }
  
  const invendary =(e) => {
    if(e.target.innerHTML == '<i class="fa fa-th-large"></i>INVENTARY'){
      console.log('calender');
      setHide(!hide)
    }
   
   
  }
   const [active, setActive] = useState(false);
   const [hide,setHide] =useState(false);
  const [value, setVal] = React.useState("");
  const [color, setColors] = React.useState("");
  const [ is,setIs]=useState(false)

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <div className="dashboard">
          <p className="dash2">Contact List (834)</p>
            {arr.map((data) => (
              <>
                <button 
               onClick={(e) => invendary(e)}  >
                  <i class={data.icon} ></i>
                  {data.name}
                </button>
                {hide ? (<div></div>) : (
                <div style={{ marginLeft: "33px" }}>
                  {data.nested?.map((text) => (
                    <div className="dash">
                      <button className={`button ${value}`} onClick={ (e) => dashboard(e)} >{text}</button>
                    </div>
                  ))}
                </div>
                )}
              </>
            ))}
          </div>
        </Grid>
        {/* <Grid item xs={12} md={10}> */}
          {/* <Calender /> */}
          {/* <NewForm/> */}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default Dashboard;
