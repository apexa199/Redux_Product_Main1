import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchProducts,fetchParticularProduct} from '../store/product-actions';
import {useEffect, useState} from 'react'
import './Product.css'
import { useParams } from "react-router-dom";

const ProductDetails=()=>{
    let { productId } = useParams();
    const dispatch=useAppDispatch();
 
    const particularProduct=useAppSelector(state=>state.product.particular_product);
   

    useEffect(()=>{

        let p :string = productId || "";
        let d: number = parseInt(p);

       

        dispatch(fetchParticularProduct(d))

    },[])
    
   
   
    
    return(
        <>
           
            <div>
               {particularProduct.category}
               {particularProduct.id}
               {particularProduct.title}
            
            </div>
        </>

    );
}
export default ProductDetails;