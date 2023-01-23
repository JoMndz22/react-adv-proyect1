import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonProps } from '../components/ProductButtons';

export interface Product {
    id:string;
    img?:string;
    title:string;
}
export interface ProductContextProps{
    counter:number;
    product: Product;
    increaseBy: (n:number) =>void;
}
export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title:   ( Props: ProductTitleProps) => JSX.Element,// Title: ( {title} : { title?: string }) => JSX.Element,
    Image:   ( Props: ProductImageProps) => JSX.Element,//Image: ( {img} : { img?: string }) => JSX.Element,
    Buttons: ( Props: ProductButtonProps) => JSX.Element,
}