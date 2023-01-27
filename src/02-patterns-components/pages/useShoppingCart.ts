import { useState } from "react";
import { Product, ProductsInCart } from "../interfaces/interfaces";



export const useShoppingCart = () =>{

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductsInCart}>({});
    
    const onProductCountChange = ( {count,product} : {count:number, product:Product}) => {
    
        setShoppingCart( oldShoppingCart => {

            if(count === 0 ){
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return rest;
            }

            return{
                ...oldShoppingCart,
                [ product.id ] : { ...product,count } 
            }
        })
    }

    return{ shoppingCart, onProductCountChange }
    
}