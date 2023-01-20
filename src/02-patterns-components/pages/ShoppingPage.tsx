import { ProductButtons,ProductCard,ProductImage,ProductTitle } from "../components"

const product = {
    id:'1',
    title: 'swswsw',
    img: './coffee-mug.png'
}


const ShoppingPage = () =>{
    return(
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Hola Mundo" />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage