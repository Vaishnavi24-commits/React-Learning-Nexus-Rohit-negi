import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Card from "./Card";
import {Provider} from "react-redux";
import stores from "./store";
function App(){
    return(
        <Provider store={stores}>
            <Header/>
            <Card/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)