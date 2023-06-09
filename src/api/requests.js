import { useNavigate } from "react-router-dom";
import axios from "./axios";
import { useEffect } from "react";

const protectedData = (URL, data) => {

    const navigate = useNavigate()

    useEffect(() => {

        const postData = async () => {

            try {
                // Get the token from local storage
                const token = localStorage.getItem('token');

                if (!token) {
                    setError('No token found. Redirecting to login page...');
                    setLoading(false);
                    navigate('/') // Redirect to login page
                    return;
                }

                // Set the authorization header
                const config = {
                    headers: {
                        Authorization: token
                    }
                };

                // Send the request to the protected endpoint
                const response = await axios.post(URL, data, config);

                return response

            } catch (error) {
                if (error.response && error.response.data) {
                    const errorMessage =  error.response.data.message;
                    return errorMessage
                } else {
                    console.log(JSON.stringify(error));
                }

            }

        }

        postData();

    }, []);

}

export default protectedData;