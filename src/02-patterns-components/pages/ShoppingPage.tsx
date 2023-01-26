import { ProductButtons,ProductCard,ProductImage,ProductTitle } from "../components"
import { products } from '../data/products';

import '../styles/custom-styles.css'
import { useShoppingCart } from './useShoppingCart';

const ShoppingPage = () =>{

    const { shoppingCart,onProductCountChange } = useShoppingCart();

    return(
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                
                {
                    products.map( product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            className='bg-dark'
                            value={ shoppingCart[product.id]?.count || 0 }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-white text-bold' activeClass='active' />
                            <ProductButtons className='custom-buttons'/>
                        </ProductCard>
                    ))
                }
                
            </div>
            <div className="product-cart">
                {
                    Object.keys(shoppingCart).length > 0 
                    &&
                    Object.values(shoppingCart).map( product => (
                        <ProductCard
                            product={product} 
                            className='bg-dark'
                            style={{width: '150px'}}
                            key={product.id}
                            value={ product.count }
                            onChange={ onProductCountChange }
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons 
                                className='custom-buttons' 
                                style={{display:'flex', justifyContent:'center'}}
                            />
                        </ProductCard>
                    ))
                }
                

            </div>
        </div>
    )
}

export default ShoppingPage