import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonProps } from '../components/ProductButtons';

export interface Product {
    id    :  string;
    img   ?: string;
    title :  string;
}
export interface ProductContextProps{
    counter     : number;
    product     : Product;
    increaseBy  : (n:number) =>void;
    maxCount    ?: number;
}
export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps) : JSX.Element,
    Title:   ( Props: ProductTitleProps) => JSX.Element,// Title: ( {title} : { title?: string }) => JSX.Element,
    Image:   ( Props: ProductImageProps) => JSX.Element,//Image: ( {img} : { img?: string }) => JSX.Element,
    Buttons: ( Props: ProductButtonProps) => JSX.Element,
}
export interface onChangeArgs{
    product : Product;
    count   : number;
}

export interface ProductsInCart extends Product{
    count: number;
}

export interface InitialValues {
    count       ?: number;
    maxCount    ?: number;
}

export interface ProductCardHandlers {
    count            : number;
    isMaxCountReached: boolean;
    maxCount         ?: number;
    product          : Product;

    increaseBy       : (value:number) => void;
    reset            : ()=> void;
}