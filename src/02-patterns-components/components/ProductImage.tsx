import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noimage from '../assets/no-image.jpg'

export const ProductImage = ({img = ''}) =>{

    const {product} = useContext(ProductContext)
    let imgToShow:string;

    if( img ){ imgToShow = img }
    else if ( product.img ){ imgToShow = product.img }
    else{ imgToShow = noimage }
    
    return(
        <img src={imgToShow} className={styles.productImg} alt="product" />
    )
}