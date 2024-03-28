import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchProducts,fetchParticularProduct} from '../store/product-actions';
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Button, Card } from "@mui/material";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

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
           <h3>Product Details</h3>
            <div>
               {particularProduct.image}                 
            </div>
            
            <Card>
            <CardActions>
      <Button size="small" >Sale</Button>
    </CardActions>
            <CardContent>

      <Typography sx={{ mb: 1.5 }} color="text.secondary">{particularProduct.category}</Typography>
      <Typography sx={{ mb: 1.5 }} >{particularProduct.title}</Typography>
      <Typography sx={{ mb: 1.5 }} >Ratings : {particularProduct.rating.rate}</Typography>
      <Typography sx={{ mb: 1.5 }} >{particularProduct.price}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
            </Card>

          
        </>

    );
}
export default ProductDetails;