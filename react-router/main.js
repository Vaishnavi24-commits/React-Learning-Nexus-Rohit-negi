import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";
import Details from "./src/Details";
import Hello from "./src/Hello";
import Hi from "./src/Hi"
import Zero from "./src/zero";
import Github from "./src/github"



function App(){
    return(
        

        <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/details">Details</Link>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/details" element={<Details/>}>
            <Route index element={<Zero/>}></Route>
            <Route path="Hello" element={<Hello/>}></Route>
            <Route path="Hi" element={<Hi/>}></Route>

            </Route>



            <Route path="/Github/:name" element={<Github/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)