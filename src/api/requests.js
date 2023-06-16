import { Navigate } from "react-router-dom";
import axios from "./axios";


// function for a post request

const postData = async (URL, data) => {

    try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        if (!token) {
            Navigate('/') // Redirect to login page
            return;
        }

        // set authorization header as bearer token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Send the request to the protected endpoint
        const response = await axios.post(URL, data, config);

        return response

    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            return errorMessage
        } else {
            console.log(JSON.stringify(error));
        }

    }

}

// function for a get request

const getData = async (URL) => {

    try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found. Redirecting to login page...');
            setLoading(false);
            Navigate('/') // Redirect to login page
            return;
        }

        // set authorization header as bearer token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Send the request to the protected endpoint
        const response = await axios.get(URL, config);

        return response

    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            return errorMessage
        } else {
            console.log(JSON.stringify(error));
        }

    }

}


// function for a patch request

const patchData = async (URL, data) => {

    try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        if (!token) {
            setError('No token found. Redirecting to login page...');
            setLoading(false);
            Navigate('/') // Redirect to login page
            return;
        }

        // set authorization header as bearer token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Send the request to the protected endpoint
        const response = await axios.patch(URL, data, config);
        return response

    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            return errorMessage
        } else {
            console.log(JSON.stringify(error));
        }

    }
}

// function for a delete request

const deleteData = async (URL) => {

    try {
        // Get the token from local storage
        const token = localStorage.getItem('token');
        if (!token) {
            setError('No token found. Redirecting to login page...');
            setLoading(false);
            Navigate('/') // Redirect to login page
            return;
        }

        // set authorization header as bearer token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Send the request to the protected endpoint
        const response = await axios.delete(URL, config);
        return response

    } catch (error) {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            return errorMessage
        } else {
            console.log(JSON.stringify(error));
        }
    }
}

export default {
    postData,
    getData,
    patchData,
    deleteData
}


