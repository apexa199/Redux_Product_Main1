import { useAppDispatch,useAppSelector } from "../hooks/redux-hooks";
import {fetchProducts,fetchParticularProduct} from '../store/product-actions';
import {useEffect, useState} from 'react'
import './Product.css'
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Product=()=>{
    const [product_id,setProduct_id]=useState(1);
    const dispatch=useAppDispatch();
    const allproducts=useAppSelector(state=>state.product.all_products);
    const particularProduct=useAppSelector(state=>state.product.particular_product);
   

    useEffect(()=>{

        dispatch(fetchProducts())

    },[])
    const searchHandler=()=>{
        dispatch(fetchParticularProduct(product_id))
    }
    const checkProduct=():boolean=>{
        if(allproducts.length==0){
            return false
        }
        return true
    }
   
    
    return(
        <>
                   
                    <h3>Product List</h3>
                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{backgroundColor : "lightgrey"}}>
          <TableRow>
            <TableCell colSpan={2}>Title</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Available Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                        {checkProduct() &&
                            allproducts.map((product)=>(
                                <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                             >
                                 <TableCell component="th" scope="row">
                             <img src={product.image} height={"30px"} width={"25px"}/>
                               </TableCell>
                               <TableCell ><Link to={"product/"+ product.id} className="app-link">{product.title}</Link></TableCell>
                               <TableCell >{product.category}</TableCell>
                               <TableCell >Price -${product.price}</TableCell>
                               <TableCell>{product.rating.rate}</TableCell>
                 
                              
                             </TableRow>
                           ))}
                         </TableBody>
                       </Table>
                     </TableContainer>
          
        </>

    );
}
export default Product;