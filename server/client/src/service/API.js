import axios from 'axios'

const url = ''

export const authenticateSignup = async(user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling signup', error.message);
    }
}
export const authenticateLogin = async(user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling signup', error.message);
    }
}
export const getProductById = async(id) => {
    try {
        return await axios.get(`${url}/product/${id}`);
    } catch (error) {
        console.log('Error while calling product by id');
    }
}

export const payUsingPaytm = async(data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`${url}/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}