import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import { useCallback } from "react";

export interface Props{
    className?:string;
    style?: CSSProperties;
}

export const ProductButtons = ({className,style}:Props) =>{

    const {counter,increaseBy, maxCount} = useContext(ProductContext)
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount, // !!Verifica si existe sino sera FALSE && si counter es igual a maxCount da TRUE sino FALSE
      [counter,maxCount],
    )
    
    
    return(
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={ ()=> increaseBy(-1)}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled }`}  onClick={ ()=> increaseBy(+1)}>+</button>
        </div>
    )
}