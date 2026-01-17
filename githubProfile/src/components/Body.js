import { useEffect, useState } from "react";
import useFetch from "../usefetch";

function Body(){

    const {generateProfile,setnumberofProfile,numberofProfile,Profile}=useFetch()
   

    return(
        <div className="but">
            <input type="text" className="input" placeholder="search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profile</button>
        <div className="Profile">{
            Profile.map((value)=>{
                return(<div key={value.id} className="cards">
                    <img src={value.avatar_url}></img>
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Profile</a>
                    </div>
                    )
            })
        }

        </div>
        </div>
    )
}


export default Body