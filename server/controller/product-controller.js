import product from '../model/productSchema.js';

export const getProducts = async(request, response) => {
    try {
        const products = await product.find({});
        response.json(products);
    } catch (error) {
        console.log('Error', error.message);
    }
}
export const getProductById = async(request, response) => {
    try {
        const produ = await product.findOne({ 'id': request.params.id })
        response.json(produ);
    } catch (error) {
        console.log('Error', error.message);
    }
}