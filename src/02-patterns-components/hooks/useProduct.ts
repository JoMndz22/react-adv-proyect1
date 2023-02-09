import { useEffect, useState, useRef } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product     : Product;
    onChange    ?: (args: onChangeArgs) => void;
    value       ?: number;
    initialValues ?: InitialValues
    maxCount    ?: number;
}

export const useProduct = ( {onChange, product, value = 0, initialValues}:useProductArgs ) => {
    
    const [counter,setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value:number) =>{// value sera = 1 ó -1
        
        let newValue = Math.max(counter + value,0);// elige el num maximo
        if(initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount )
        }
        setCounter(newValue)

        onChange && onChange({ count:newValue, product });
    }

    const reset = () => {
        setCounter( initialValues?.count || value )
    }

    useEffect(()=>{
        if( !isMounted.current ) return;//si es falso no ha sido ocupado NO va setear el valor x si viene un initialvalues
        setCounter(value)
    },[value])

    useEffect(()=>{
        isMounted.current = true
    },[])

    return{ 
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}