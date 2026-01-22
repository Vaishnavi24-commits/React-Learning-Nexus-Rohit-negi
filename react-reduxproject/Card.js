import { useState } from "react";
import FoodItems from "./foodItems";

const foodItems = [
  { id: 1, foodName: "Paneer Butter Masala", price: 220 },
  { id: 2, foodName: "Veg Biryani", price: 180 },
  { id: 3, foodName: "Masala Dosa", price: 120 },
  { id: 4, foodName: "Cheese Pizza", price: 250 },
  { id: 5, foodName: "Veg Burger", price: 140 },
  { id: 6, foodName: "Pasta Alfredo", price: 200 },
  { id: 7, foodName: "Chole Bhature", price: 160 },
  { id: 8, foodName: "Fried Rice", price: 150 },
  { id: 9, foodName: "Spring Rolls", price: 130 },
  { id: 10, foodName: "Ice Cream Sundae", price: 110 }
];

export default function Card(){
   
    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>
                       <FoodItems value={value} />

                    </div>
                )
            })}
        </div>
    )
}
