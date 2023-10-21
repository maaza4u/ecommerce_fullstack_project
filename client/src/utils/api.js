
import axios from "axios"; 


// Creating an object 'params' to hold request headers, including Authorization
const params = {
    header: {
        
        Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,  // Adding Authorization header with the Stripe app key;
        
    },
    
    
};


// Async function to fetch data from an API based on the provided URL
export const fetchDataFromApi = async (url) => {
    try {
        // Making a GET request using axios to the provided URL with the 'params' object
        const  { data }  =   await axios.get(
            process.env.REACT_APP_DEV_URL + url, 
            params
            );

  
        return data;
    } catch (error) {
        console.log(error);
        return error;  
    }
    
}

export const makePaymentRequest = axios.create({
baseURL : process.env.REACT_APP_DEV_URL,
headers : {
    Authorization: "bearer" + process.env.REACT_APP_STRIPE_APP_KEY,
},

});