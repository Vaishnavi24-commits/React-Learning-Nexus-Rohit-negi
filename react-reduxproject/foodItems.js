import { useDispatch } from "react-redux";
import { useState } from "react"
import { addItems,removeItems } from "./slice2";

export default function FoodCart({value}){
     
     const [inCart, setInCart] = useState(false);
      const dispatch = useDispatch();

        function handleClick(){
            if(inCart){
                dispatch(removeItems())
                setInCart(false);
            }
            else
            {
                dispatch(addItems());
                setInCart(true);
            }
        }


        return (
            <>
              <h1>{value.foodName}</h1>
              <h2>{value.price}</h2>
              <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>
            </>
        )


}

