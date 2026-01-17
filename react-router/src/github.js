import { useEffect } from "react";
import { useParams } from "react-router"
import { useState } from "react";

export default function Github(){
    const {name} = useParams();
    const[Profile,setProfile]=useState(null)

    
    async function fetchuser() {
       const response = await fetch(`https://api.github.com/users/${name}`)
       const data = await response.json()
       setProfile(data)
        
    }

    useEffect(()=>{
        fetchuser()
    },[])

    return (
        <>
        <h1>I am github</h1>
        <div>
            <img src={Profile?.avatar_url}></img>
            <h2>{Profile?.login}</h2>
        </div>
        
        </>
        
    )

} 
//  "?" isiliye lagaya h aynsc fetch se data aane m tym lagta h tab tak null value rhegi usme 
// we are asking to get avatar_url and login this will give error 
