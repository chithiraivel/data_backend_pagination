import logo from "./logo.svg";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Calender from "./Calender";
import Forms from "./Forms";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Show from "./Show";
import NewForm from "./NewForm";
import SideBar from "./SideBar";
import New1 from "./New1";
import New2 from "./New2";
import Sample from "./Sample";
import FirstPage from "./FirstPage";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import Basic from "./basic"

function App() {
  return (
    <div>
       
      {/* <BrowserRouter>
        <Routes>
        <Route path="/" element={<SideBar/> } />
          <Route path="new2" element={<New2 />} />
          <Route path="/new1" element={<New1 />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Routes>
        <Route path="/create" element={<Create/> } />
        <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter> */}
      <Basic/>
    </div>
  );
}

export default App;
