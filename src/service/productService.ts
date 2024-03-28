import Api from './Api';
// import { ProductModel } from '../models/redux-models';
export default{
    async getAllProducts(){
        var response=await Api().get('products');
        return response.data;
    },
    async getParticularProduct(productid:number){
        var response=await Api().get('products/'+ productid);
        return response.data;
    }
}