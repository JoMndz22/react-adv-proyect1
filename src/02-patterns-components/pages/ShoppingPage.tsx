import { ProductButtons,ProductCard,ProductImage,ProductTitle } from "../components"
import { products } from '../data/products';

import '../styles/custom-styles.css'

const ShoppingPage = () =>{

    const product = products[0];

    return(
        <div>
            <h1>ShoppingPage</h1>
            <hr />
        
            <ProductCard 
                key={product.id} 
                product={product} 
                className='bg-dark'
                initialValues={{
                    count:4,
                    maxCount: 10
                }}
            >
                {
                    ({reset,count,increaseBy,isMaxCountReached}) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle title={product.title} className='text-white text-bold' activeClass='active' />
                            <ProductButtons className='custom-buttons'/>
                            <button onClick={reset}>Reset</button>
                            
                            <button onClick={ ()=>increaseBy(-2) }>-2</button>
                            <button disabled={isMaxCountReached} onClick={ ()=>increaseBy(+2) }>+2</button>
                            <span>::{count}::</span>

                        </>
                    )
                }
            </ProductCard>
            
        </div>
    )
}

export default ShoppingPage