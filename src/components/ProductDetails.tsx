import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchProducts,fetchParticularProduct} from '../store/product-actions';
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Button, Card, CardMedia, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import './Product.css'
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
           <Card >
           <Box >
           <CardMedia style={{float :"left", marginLeft : "220px"}}
        component="img"
        sx={{ width: 300 }}
        image={particularProduct.image}
        />                      
           
    <CardContent style={{float : "right", margin : "120px", }}>
    <CardActions>
      <Button className="butn">Sale</Button>
    </CardActions>
      <Typography sx={{ mb: 1}} className="productCat">{particularProduct.category}</Typography>
      <Typography sx={{ mb: 1.5 }} >{particularProduct.title}</Typography>
      <Typography sx={{ mb: 1.5 }} className="productRate">Ratings : {particularProduct.rating.rate}</Typography>
      <Typography sx={{ mb: 1.5 }} >${particularProduct.price}</Typography>
      <CardActions>
      <Button>Add to cart</Button>
      <Button>Buy Now</Button>
    </CardActions>
    </CardContent>
   

            </Box>
          </Card>
        </>

    );
}
export default ProductDetails;