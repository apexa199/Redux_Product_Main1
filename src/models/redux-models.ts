export interface ProductModel{
    "image": string,
    "title": string,
    "price": number,
    "category": string,
    "id": number,
    "rating" :{
        rate: number; 
    }

}
export interface ProductArrayModel{
    all_products:ProductModel[],
    particular_product:ProductModel
}