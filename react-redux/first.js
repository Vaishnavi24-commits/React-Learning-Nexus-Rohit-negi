import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Stores";
import Counting from "./Counting";
import CustomCounter from "./CustomCounter";

function App(){
    return(
        <>
        <Provider store={store}>
        <Counting></Counting>
        <br></br>
        <CustomCounter></CustomCounter>
        <br></br>
        </Provider>
        </>
    )
}






const root = ReactDOM.createRoot(document.getElementById("root")).render(<App/>)