import { useState } from "react";
import { Product, ProductsInCart } from "../interfaces/interfaces";



export const useShoppingCart = () =>{

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductsInCart}>({});
    
    const onProductCountChange = ( {count,product} : {count:number, product:Product}) => {
        console.log(count);

        setShoppingCart( oldShoppingCart => {
        //si no existe un prod crear uno existe seteando el count a 0 
            const productInCart:ProductsInCart = oldShoppingCart[product.id] || { ...product, count:0 };
            
        // -- AGREGAR PRODUCTO
            //evaluar que numero es mayor, esto trae o un 1 o un -1 (signos diferentes se restan)
            if( Math.max(productInCart.count + count , 0 ) > 0 ){ // si todo es mayor a 0
                productInCart.count += count;
                return{
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

        // -- BORRAR PRODUCTO
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

        });
    }

    return{ shoppingCart, onProductCountChange }
    
}